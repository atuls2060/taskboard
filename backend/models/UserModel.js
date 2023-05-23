const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})

const UserModel = mongoose.model("Users", UserSchema)


module.exports = {
    UserModel
}