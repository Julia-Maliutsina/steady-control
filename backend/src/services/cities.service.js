import City from '../db/models/city.js';

const getCities = async ({}) => {
  const cities = await City.find();

  return { status: 'ok', cities };
};

const getCity = async ({ id }) => {
  const city = await City.findById(id);

  return { status: 'ok', city };
};

const citiesService = { getCities, getCity };

export default citiesService;
