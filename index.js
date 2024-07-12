const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

// Database connection
const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
      console.log('MongoDB connected');
  } catch (error) {
      console.error('MongoDB connection failed:', error.message);
      process.exit(1);
  }
};

// Import routes
const userRoutes = require('./Routes/userRouter');
const surveyRoutes = require('./Routes/surveyRouter');
const answerRoutes = require('./Routes/answerRouter');
const questionRoutes = require('./Routes/questionRouter');
const questionTypeRoutes = require('./Routes/questionTypeRouter');
const businessRoutes = require('./Routes/businessRouter');
const respondentRoutes = require('./Routes/respondentRouter');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/surveys', surveyRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/questionTypes', questionTypeRoutes);
app.use('/api/businesses', businessRoutes);
app.use('/api/respondents', respondentRoutes);

// Start server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

