const mongoose = require('mongoose');

// Email Schema
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});

let Email;
let isConnected = false;

// Connect to MongoDB
const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    Email = mongoose.models.Email || mongoose.model('Email', emailSchema);
    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const { email } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Email is required' }),
      };
    }

    // Save email to database
    const newEmail = new Email({ email });
    await newEmail.save();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Subscribed successfully' }),
    };
  } catch (err) {
    console.error('Error:', err);

    if (err.code === 11000) {
      return {
        statusCode: 409,
        headers,
        body: JSON.stringify({ message: 'Email already subscribed' }),
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Server error', error: err.message }),
    };
  }
};
