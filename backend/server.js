const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAbwdwYbCBuLmlahvloQBQa9XyvWOOPvvg");


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());

function removeStar(str) {
    return str.replace(/\*/g, '');
}

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
        // Update answers in the database
        await collection.updateOne({ username: username }, {
            $set: {
                q1: q1, q2: q2, q3: q3, q4: q4, q5: q5,
                q6: q6, q7: q7, q8: q8, q9: q9, q10: q10,
                q11: q11, q12: q12, q13: q13, q14: q14, q15: q15
            }
        });

        // Generate advice
        const advice = await run(
            "What are your short-term and long-term goals?", q1,
            "What do you feel are your greatest strengths and weaknesses?", q2,
            "What aspects of your life do you feel most satisfied with right now?", q3,
            "What aspects of your life do you feel could use improvement?", q4,
            "Have you faced any obstacles or challenges recently that you're struggling to overcome?", q5,
            "How do you typically handle setbacks or failures?", q6,
            "What activities or tasks do you find most fulfilling or enjoyable?", q7,
            "Are there any skills or knowledge areas you're interested in developing further", q8, "How do you currently prioritize your time and energy?", q9, "Are there any habits or patterns you'd like to change?", q10, "How do you define success for yourself?", q11, "What support systems or resources do you currently have in place for personal development?", q12, "How do you maintain balance between different aspects of your life (work, family, hobbies, etc.)?", q13,
            "What motivates you to pursue personal growth and development?", q14,
            "How do you envision your ideal future self?", q15
        );

        // Update advice in the database
        await collection.updateOne({ username: username }, { $set: { advice: advice } });

        res.json('done');
    } catch (error) {
        res.json('error');
    }
});

async function run(Que1, Ans1, Que2, Ans2, Que3, Ans3, Que4, Ans4, Que5, Ans5, Que6, Ans6, Que7, Ans7, Que8, Ans8, Que9, Ans9, Que10, Ans10, Que11, Ans11, Que12, Ans12, Que13, Ans13, Que14, Ans14, Que15, Ans15) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Q:${Que1}\nA:${Ans1}\nQ:${Que2}\nA:${Ans2}\nQ:${Que3}\nA:${Ans3}\nQ:${Que4}\nA:${Ans4}\nQ:${Que5}\nA:${Ans5}\nQ:${Que6}\nA:${Ans6}\nQ:${Que7}\nA:${Ans7}\nQ:${Que8}\nA:${Ans8}\nQ:${Que9}\nA:${Ans9}\nQ:${Que10}\nA:${Ans10}\nQ:${Que11}\nA:${Ans11}\nQ:${Que12}\nA:${Ans12}\nQ:${Que13}\nA:${Ans13}\nQ:${Que14}\nA:${Ans14}\nQ:${Que15}\nA:${Ans15}\n Give Advice`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const advice = response.text();
    console.log("1.", advice);

    return removeStar(advice);
}


app.listen(8000, () => {
    console.log("port connected");
})

