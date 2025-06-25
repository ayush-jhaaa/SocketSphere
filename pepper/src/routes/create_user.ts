import express from 'express';
import createUser from '../routing_components/auth/auth';
import generateJWT from '../routing_components/jwt_handler/jwt_assign';

const router = express.Router();

router.post("/register",createUser);
router.post("/login",generateJWT);

export default router;