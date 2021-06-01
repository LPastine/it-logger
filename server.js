const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Welcome to the IT Logger API...'}));

// Define Routes
app.use('/api/logs', require('./routes/logs'));
app.use('/api/techs', require('./routes/techs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));