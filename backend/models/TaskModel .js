const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    isCompleted: {
        type: Boolean,
        required: [true, 'isCompleted is required'],
        default: false
    },
    listId: {
        type: String,
        required: [true, 'List id is required']
    },
    userId: {
        type: String,
        required: [true, 'User id is required']
    }
})

const TaskModel = mongoose.model("task", TaskSchema)


module.exports = {
    TaskModel
}