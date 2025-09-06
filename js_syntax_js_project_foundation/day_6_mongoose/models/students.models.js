const mongoose = require('mongoose');

// Define a schema for the student
var user = new mongoose.Schema({
    name: String,
    age: Number,
});

// Create and export the model
module.exports = mongoose.model("students", user);
