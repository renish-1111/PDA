const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser');
const OpenAI = require('openai');

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
        await collection.updateOne({ username: username }, { $set: { q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, q8: q8, q9: q9, q10: q10, q11: q11, q12: q12, q13: q13, q14: q14, q15: q15 } })
        res.json('done');
        console.log(q1);
         // Generate response using GPT-3
         const advice = await generateAdvice("What are your short-term and long-term goals?", q1);
         console.log("Generated Advice:", advice);
         // Send response back to the user
         res.json({ success: true, advice });

         async function generateAdvice(question, ans) {
            // Define the prompt for GPT-3
            const prompt = `Question: ${question}\nAnswer:${ans}`;
        
            // Send prompt to GPT-3 API
            const { data } = await openai.complete({
                engine: 'davinci',
                prompt,
                maxTokens: 150,
                temperature: 0.7,
                topP: 1.0,
                frequencyPenalty: 0.0,
                presencePenalty: 0.0
            });
        
            // Extract and return the generated advice
            console.log(data.choices[1].text);
            return data.choices[1].text;
        }
        
         
    } catch (error) {
        res.json('error');
    }
});



// POST endpoint to handle form submissions
app.post('/home/form', async (req, res) => {
    const { q1 } = req.body;
    
    console.log(q1);
    
    try {
       
    } catch (error) {
        console.error('Error processing question:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

// Function to generate advice using GPT-3






app.listen(8000, () => {
    console.log("port connected");
})

