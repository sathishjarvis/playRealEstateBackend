const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db');
const app = express();
const  MongoClient = require('mongodb');

const router = require("./routers/router")


app.use(express.json());
app.use(cors());

connectDB();

// app.use(express.static(path.join(__dirname, '../frontend/build')));


// app.get('/', (req, res) => {
//     res.send('Directory API is running...');
//   });
  
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
//   });

  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

app.use('/directory',router);