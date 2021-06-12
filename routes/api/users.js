const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const {
    check,
    validationResult
} = require('express-validator');

// Get the User model
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/',
    [
        check('name', 'Name is required')
        .not()
        .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            name,
            email,
            password
        } = req.body;

        try {
            // See if user exists
            // email.email = email
            let user = await User.findOne({
                email
            })

            if (user) {
                res.status(400).json({
                    error: [{
                        msg: 'User already exists'
                    }]
                });
            }

            // Get users gravatar

            // Encrypt password 

            // Return jsonwebtoken

            res.send('User route')
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;