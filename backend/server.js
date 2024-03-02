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
        await collection.updateOne({username:username},{$set:{q1:q1,q2:q2,q3:q3,q4:q4,q5:q5,q6:q6,q7:q7,q8:q8,q9:q9,q10:q10,q11:q11,q12:q12,q13:q13,q14:q14,q15:q15}})
        res.json('done');
        run("What are your short-term and long-term goals?",q1,
        "What do you feel are your greatest strengths and weaknesses?",q2,
        "What aspects of your life do you feel most satisfied with right now?",q3,
        "What aspects of your life do you feel could use improvement?",q4,
        "Have you faced any obstacles or challenges recently that you're struggling to overcome?",q5)
        async function run(Que1,Ans1,Que2,Ans2,Que3,Ans3,Que4,Ans4,Que5,Ans5) {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro"});
          
            const prompt = `Q:${Que1}\nA:${Ans1}\nQ:
            ${Que2}\nA:${Ans2}\nQ:${Que3}\nA:${Ans3}\nQ:${Que4}\nA:${Ans4}\nQ:${Que5}\nA:${Ans5}\n Give Advice`
          
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            console.log("1.",text);

          }
          



    } catch (error) {
        res.json('error');
    }
});

app.listen(8000, () => {
    console.log("port connected");
})

