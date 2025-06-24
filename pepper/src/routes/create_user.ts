import express from 'express';
import createUser from '../routing_components/auth/auth';

const router = express.Router();

router.post("/test",createUser);

export default router;