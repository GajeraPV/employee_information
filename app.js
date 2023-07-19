const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoDB = "mongodb://127.0.0.1/employee_info";
mongoose.connect(mongoDB);

require('./routes')(app)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

module.exports = app