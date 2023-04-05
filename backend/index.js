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
    console.log(MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');
  } catch (e) {
    console.log(e);
  }
};

const seedDatabase = async () => {
  await City.deleteMany();
  await Citizen.deleteMany();
  const cities = await City.insertMany(CITIES);
  let citizens = [...CITIZENS];
  for (let c = 0; c < citizens.length; c++) {
    switch (citizens[c].city_id) {
      case 1:
        citizens[c].city_id = cities[0]._id;
        break;
      case 2:
        citizens[c].city_id = cities[1]._id;
        break;
      case 3:
        citizens[c].city_id = cities[2]._id;
        break;
    }
  }
  await Citizen.insertMany(citizens);
};

app.listen(PORT, () => {
  connectToDatabase()
    .then(() => seedDatabase())
    .then(() => console.log(`Server started on port: ${PORT}`));
});
