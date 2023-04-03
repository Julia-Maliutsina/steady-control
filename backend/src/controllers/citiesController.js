import City from '../db/models/city.js';

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json({ cities });
  } catch (e) {
    console.log(e);
  }
};

const getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findById(id);
    res.json({ city });
  } catch (e) {
    console.log(e);
  }
};

export const citiesController = { getAllCities, getCity };
