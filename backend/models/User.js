const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    dietaryPreference: {type: String, required: true},
    calorieIntake: {type: Number, required: true},
    mealsPerDay: {type: Number, required: true}
});

module.exports = mongoose.model('User', userSchema);