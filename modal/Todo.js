const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean
    }
}, { timestamps: true })


module.exports = mongoose.models.todo || mongoose.model("todo", todoSchema)