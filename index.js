const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require("./db/connect");

app.use(express.json());

// const authRoutes = require('./routes/authRoutes');
// app.use('/api/user', authRoutes);

const userRoutes = require('./Routes/userRouter');
app.use('/userRouter', userRoutes);

const surveyRoutes = require('./Routes/surveyRouter');
app.use('/surveyRouter', surveyRoutes);

const questionTypeRouter = require("./Routes/questionTypeRouter");
app.use('/questionTypesRouter', questionTypeRouter);




// const questionRoutes = require('./routes/questionRoutes');
// app.use('/api/question', questionRoutes);




app.use(express.json());

// Start server
const start = async () => {
    try {
      // console.log("Trying to")
      await connectDB(`mongodb://localhost:27017/DB_OnlineSurveyTool`);
      // console.log("Connected to DB");
      // app.listen(port, console.log(`Server is listening on port ${port}`));
      app.listen(3000, "0.0.0.0", () => {
        console.log(`Server is listening on port 3000`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();