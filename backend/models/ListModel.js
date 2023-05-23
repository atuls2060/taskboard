const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User id is required']
    }
})

const ListModel = mongoose.model("list", ListSchema)


module.exports = {
    ListModel
}