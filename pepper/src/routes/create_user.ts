import express from 'express';
import createUser from '../routing_components/register/register';
import generateJWT from '../routing_components/jwt_assign/jwt_assign';
import { verifyJWT } from '../middleware/auth';


const router = express.Router();

router.get("/dashboard",verifyJWT,(req,res) => {
    res.json({ message: `Welcome user ${(req as any).user}` });
})

router.post("/register",createUser);
router.post("/login",generateJWT);

export default router;