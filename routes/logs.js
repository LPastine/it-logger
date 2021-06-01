const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const Log = require('../models/Log');
const Tech = require('../models/Tech');

// @route   POST api/logs
// @desc    Register a log
// @access  Public
router.post(
    '/',
    [
        check('message', 'Message is required')
            .not()
            .isEmpty(),
        check('attention', 'Specify if attention is needed')
            .not()
            .isEmpty(),
        check('tech', 'Please add a technician')
        .not()
        .isEmpty(),
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { message, attention, tech } = req.body;

        try {
            // let technician = await Tech.findOne({ tech });

            // if(!technician) {
            //     return res.status(400).json({ msg: 'That technician does not exist' });
            // }

            log = new Log({
                message,
                attention,
                tech
            });
    
            await log.save();
    
            res.send('Log saved');
            
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

// @route   GET api/logs
// @desc    Get logs from server
// @access  Public
router.get('/', async (req, res) => {
    const data = await res.json();
    res.send(data)
});

// @route   DELETE api/logs/:id
// @desc    Delete log from server
// @access  Public
router.delete('/:id', (req, res) => {
    res.send('Delete log from server');
});

// @route   PUT api/logs/:id
// @desc    Update log from server
// @access  Public
router.put('/:id', (req, res) => {
    res.send('Update log from server');
});

module.exports = router;

