import { Router } from 'express';
import { convertUnits } from '../controllers/converterController.js';

const router = Router();

router.post('/convert', convertUnits);

export default router;   