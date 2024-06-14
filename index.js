const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON
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


























// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const connectDB = require("./db/connect");

// app.use(express.json());

// // const authRoutes = require('./routes/authRoutes');
// // app.use('/api/user', authRoutes);

// const userRoutes = require('./Routes/userRouter');
// app.use('/userRouter', userRoutes);

// const surveyRoutes = require('./Routes/surveyRouter');
// app.use('/surveyRouter', surveyRoutes);

// const questionTypeRouter = require("./Routes/questionTypeRouter");
// app.use('/questionTypesRouter', questionTypeRouter);




// // const questionRoutes = require('./routes/questionRoutes');
// // app.use('/api/question', questionRoutes);




// app.use(express.json());

// // Start server
// const start = async () => {
//     try {
//       // console.log("Trying to")
//       await connectDB(`mongodb://localhost:27017/DB_OnlineSurveyTool`);
//       // console.log("Connected to DB");
//       // app.listen(port, console.log(`Server is listening on port ${port}`));
//       app.listen(3000, "0.0.0.0", () => {
//         console.log(`Server is listening on port 3000`);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   start();
