const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/pda")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })

const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    q1: {
        type: String,

    },
    q2: {
        type: String,

    },
    q3: {
        type: String,

    },
    q4: {
        type: String,

    },
    q5: {
        type: String,

    },
    q6: {
        type: String,

    },
    q7: {
        type: String,

    },
    q8: {
        type: String,

    },
    q9: {
        type: String,

    },
    q10: {
        type: String,

    },
    q11: {
        type: String,

    },
    q12: {
        type: String,

    },
    q13: {
        type: String,

    },
    q14: {
        type: String,

    },
    q15: {
        type: String,

    },
    advice:{
        type: String
    }

})

const user = mongoose.model("user", newSchema)

module.exports = user
