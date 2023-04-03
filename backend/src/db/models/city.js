import { Schema, model } from 'mongoose';

const citySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const City = model('City', citySchema);

export default City;
