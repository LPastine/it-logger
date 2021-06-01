const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const Tech = require('../models/Tech');

// @route   POST api/techs
// @desc    Register a technician
// @access  Public
router.post(
    '/',
    [
        check('firstName', 'First name is required')
            .not()
            .isEmpty(),
        check('lastName', 'Last name is required')
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstName, lastName } = req.body;

        try {
            tech = new Tech({
                firstName,
                lastName
            });
        
            await tech.save();
    
            res.send('Tech saved');
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

// @route   GET api/techs
// @desc    Get techs from server
// @access  Public
router.get('/', (req, res) => {
    res.send('Get technicians from server');
});

module.exports = router;

// @route   DELETE api/techs/:id
// @desc    Delete tech from server
// @access  Public
router.delete('/:id', (req, res) => {
    res.send('Delete technician from server');
});

module.exports = router;