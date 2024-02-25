const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/pda")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("user", newSchema)

module.exports = user
