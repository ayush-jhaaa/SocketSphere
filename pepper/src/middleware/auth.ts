import { Request,Response,NextFunction } from "express";
import { validateToken } from "../utils/jwt";

export const verifyJWT = async (req:Request,res:Response,next:NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        console.log(res.status(400).json({message:"invaild"}));
        return;
    }

    const token = authHeader?.split(' ')[1];

    const payload = validateToken(token);
    if(!payload)
        console.log(res.status(400).json({message:'unauthorized access'}));

    (req as any).user = payload?.userId;

    next();


}