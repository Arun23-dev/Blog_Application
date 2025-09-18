const mongoose = require('mongoose');

async function main() {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECT_KEY);
    console.log('✅ MongoDB Connected to Blog database');
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  }
}

module.exports = main;