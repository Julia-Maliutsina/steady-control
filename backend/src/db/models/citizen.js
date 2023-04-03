import { Schema, model } from 'mongoose';

const groupSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const citizenSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city_id: {
    type: Number,
    required: true,
  },
  groups: [groupSchema],
});

const Citizen = model('Citizen', citizenSchema);

export default Citizen;
