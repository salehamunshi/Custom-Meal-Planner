const User = require('../models/User');

const registerUser = async (req, res) => {
    const { name, email, password, dietaryPreference, calorieIntake, mealsPerDay } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            dietaryPreference,
            calorieIntake,
            mealsPerDay
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                dietaryPreference: user.dietaryPreference
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUser }