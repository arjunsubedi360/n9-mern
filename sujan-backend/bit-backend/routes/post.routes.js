import {Router} from 'express';
import {getPost} from '../controllers/index.js';

const router = Router();

router.get("/", getPost);

export default router;