const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const axios = require('axios');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: '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' })

app.get("/", cors(), (req, res) => {

})

app.post("/sign-in", async (req, res) => {
    const { username, password } = req.body

    try {
        const check = await collection.findOne({ username: username, password: password })
        const check1 = await collection.findOne({ username: username })

        if (check) {
            res.json("exist")
        }
        else if (check1) {
            res.json("wrong password")
        }
        else {
            res.json("not exist")
        }

    }
    catch (e) {
        res.json("fail")
    }

})


app.post("/sign-up", async (req, res) => {
    const { name, username, password } = req.body

    const data = {
        name: name,
        username: username,
        password: password
    }

    try {
        const check = await collection.findOne({ username: username })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

app.post('/home/form', async (req, res) => {
    const { username, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15 } = req.body;

    try {
        // Update the collection
        await collection.updateOne({ username: username }, { $set: { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15 } });
        
        // Generate response using GPT-3
        const advice = await generateAdvice("What are your short-term and long-term goals?", q1);
        console.log("Generated Advice:", advice);
        await collection.updateOne({ username: username }, { $set: {advice:advice } });
        // Send response back to the user
        res.json({ success: true, message: 'done', advice });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

async function generateAdvice(question, ans) {
    try {
        // Define the prompt for GPT-3
        const prompt = `Question: ${question}\nAnswer: ${ans}`;

        // Set up the request payload
        const requestData = {
            model: 'davinci',
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        };

        // Send prompt to GPT-3 API
        const response = await axios.post('https://api.openai.com/v1/completions', requestData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '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'
            }
        });

        // Extract and return the generated advice
        console.log(response.data.choices[0].text);
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error generating advice:', error);
        throw error; // Re-throw the error for the caller to handle
    }
}





app.listen(8000, () => {
    console.log("port connected");
})

