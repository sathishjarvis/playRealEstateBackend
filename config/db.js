const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.database_connection);
    console.log('MongoDB Connected...');
    
    // Display directory data in console
    const directories = await mongoose.connection.db.collection('persons').find().toArray();
    console.log('Directory Collection Data:', directories);
    
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;