const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser');
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
    } catch (error) {
        res.json('error');
    }
});

app.listen(8000, () => {
    console.log("port connected");
})

