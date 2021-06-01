const express = require('express');
const router = express.Router();

// @route   POST api/techs
// @desc    Register a technician
// @access  Public
router.post('/', (req, res) => {
    res.send('Add technician to server');
});

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