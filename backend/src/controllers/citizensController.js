import Citizen from '../db/models/citizen.js';

const getAllCitizens = async (req, res) => {
  try {
    const citizens = await Citizen.find();
    res.json({ citizens });
  } catch (e) {
    console.log(e);
  }
};

const getCitizen = async (req, res) => {
  try {
    const { id } = req.params;
    const citizen = await Citizen.findById(id);
    res.json({ citizen });
  } catch (e) {
    console.log(e);
  }
};

export const citizensController = { getAllCitizens, getCitizen };
