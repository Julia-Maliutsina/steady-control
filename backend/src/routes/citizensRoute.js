import { Router } from 'express';

import { citizensController } from '../controllers/index.js';

const router = Router();

router.get('/citizens', citizensController.getAllCitizens);

router.get('/citizens/:id', citizensController.getCitizen);

export default router;
