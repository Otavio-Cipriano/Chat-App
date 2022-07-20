const mongoose = require('mongoose')

const { DB_URI } = process.env;

const connect = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Succesfully Connected to Database")
    })
    .catch((err) =>{
        console.log('Database connection failed')
        console.log(err)
        process.exit(1)
    })
}

module.exports = {connect}