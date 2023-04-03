import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { cityRouter, citizenRouter } from './src/routes/index.js';

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cityRouter);
app.use(citizenRouter);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');
  } catch (e) {
    console.log(e);
  }
};

app.listen(PORT, () => {
  connectToDatabase().then(() => console.log(`Server started on port: ${PORT}`));
});
