import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { cityRouter, citizenRouter } from './src/routes/index.js';
import City from './src/db/models/city.js';
import Citizen from './src/db/models/citizen.js';
import { CITIZENS } from './src/constants/citizens.js';
import { CITIES } from './src/constants/cities.js';

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

const seedDatabase = async () => {
  await City.deleteMany();
  await Citizen.deleteMany();
  await City.insertMany(CITIES);
  await Citizen.insertMany(CITIZENS);
};

app.listen(PORT, () => {
  connectToDatabase()
    .then(() => seedDatabase())
    .then(() => console.log(`Server started on port: ${PORT}`));
});
