const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/studentdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use('/api/students', studentRoutes);
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
