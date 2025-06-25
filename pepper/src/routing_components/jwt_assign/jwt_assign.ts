import { Request, Response } from 'express';

import User from "../../models/User";
import {generateToken} from "../../utils/jwt"
import bcrypt from "bcryptjs"

const generateJWT  = async (req : Request,res : Response):Promise<void> => {
    try{
        const {
            email,
            password
        } = req.body as {
            email:string,
            password:string
        };
        console.log(email,password);

        // if user not exist
        const checkUser = await User.findOne({email})
        if(!checkUser){
            console.log(res.status(400).json({message:"invalid credentials"}));
            return;
        }

        // check password

        const isMatch = await bcrypt.compare(password,checkUser?.password);
        if(!isMatch)
            console.log(res.status(400).json({message:"galat password"}));
            
        // now generate jwt token
        const token = generateToken(checkUser._id.toString());
        console.log(res.status(200).json({message:`JWT suucessfully generated => ${token}`}));
         
    }
    catch(err){
        console.log(res.status(500).json({message:"server error"}));
    }
}
export default generateJWT;