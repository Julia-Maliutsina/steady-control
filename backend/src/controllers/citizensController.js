import Citizen from '../db/models/citizen.js';
import citizensService from '../services/citizens.service.js';

const getAllCitizens = async (req, res) => {
  try {
    const response = await citizensService.getCitizens({});
    res.status(200).json({ citizens: response.result });
  } catch (e) {
    console.log(e);
  }
};

const getCitizen = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await citizensService.getCitizen({ id });
    res.status(200).json({ citizen: response.citizen });
  } catch (e) {
    console.log(e);
  }
};

export const citizensController = { getAllCitizens, getCitizen };
