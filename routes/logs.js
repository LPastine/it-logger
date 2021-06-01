const express = require('express');
const router = express.Router();

// @route   POST api/logs
// @desc    Register a log
// @access  Public
router.post('/', (req, res) => {
    res.send('Adds new log');
});

module.exports = router;

// @route   GET api/logs
// @desc    Get logs from server
// @access  Public
router.get('/', (req, res) => {
    res.send('Get logs from server');
});

module.exports = router;

// @route   DELETE api/logs/:id
// @desc    Delete log from server
// @access  Public
router.delete('/:id', (req, res) => {
    res.send('Delete log from server');
});

module.exports = router;

// @route   PUT api/logs/:id
// @desc    Update log from server
// @access  Public
router.put('/:id', (req, res) => {
    res.send('Update log from server');
});

module.exports = router;

