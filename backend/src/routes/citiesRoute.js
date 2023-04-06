import { Router } from 'express';

import { citiesController } from '../controllers/index.js';

const router = Router();

router.get('/cities', citiesController.getAllCities);

router.get('/cities/:id', citiesController.getCity);

export default router;
