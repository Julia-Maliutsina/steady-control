import citiesService from '../services/cities.service.js';

const getAllCities = async (req, res) => {
  try {
    const response = await citiesService.getCities({});
    res.status(200).json({ cities: response.cities });
  } catch (e) {
    console.log(e);
  }
};

const getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await citiesService.getCity({ id });
    res.status(200).json({ city: response.city });
  } catch (e) {
    console.log(e);
  }
};

export const citiesController = { getAllCities, getCity };
