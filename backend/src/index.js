import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// const connection;

app.listen(port, () => console.log(`Running on port ${port}`));
