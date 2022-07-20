const mongoose = requrie('mongoose')

const roomSchema = new mongoose.Schema({
    name: {type: String, required: true},
    private: {type: Boolean, default: false},
    password: {type: String, default: null},
    users: [{type: String}]
})

module.exports = roomSchema