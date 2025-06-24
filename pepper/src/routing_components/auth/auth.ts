import { Request, Response } from 'express';
import User from '../../models/User';
import bcrypt from "bcryptjs"


const createUser = async (req:Request,res:Response):Promise<void> => {
  try {
    const {
        name,
        email,
        password
    } = req.body as {
        name : string,
        email : string,
        password : string
    };
// check validity
    if (!name || !email || !password) {
      console.log(res.status(400).json({ message: "sahi se bharo" }));
    }
// check if already exist
    const existingUser = await User.findOne({ email });
    if (existingUser)
        console.log(res.status(400).json({ message: "User already exists" }));

// hash the password then save it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({  name,
                                email,
                                password : hashedPassword });
    const savedUser = await newUser.save();
    res.json({ message: "User saved", user: savedUser });
  } 
  catch (err) {
    res.status(500).json({ message: "Error saving user", error: err });
  }
}

export default createUser