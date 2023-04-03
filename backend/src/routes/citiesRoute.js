import { Router } from 'express';

import City from '../db/models/city.js';

const router = Router();

router.get('/cities', async (req, res) => {
  try {
    const cities = await City.find();
    res.json({ cities });
  } catch (e) {
    console.log(e);
  }
});

router.get('/cities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findById(id);
    res.json({ city });
  } catch (e) {
    console.log(e);
  }
});

export { router };
