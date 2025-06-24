import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import User from './models/User';
import { Request,Response } from 'express';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (_req, res) => {
  res.send('Chat API Running');
});


// connect DB
connectDB();


app.post("/test", async (req:Request,res:Response):Promise<void> => {
  try {
    const { name} = req.body as {name:string};

    if (!name) {
      console.log(res.status(400).json({ message: "Name is required" }));
    }

    const newUser = new User({ name });
    const savedUser = await newUser.save();
    res.json({ message: "✅ User saved", user: savedUser });
  } catch (err) {
    res.status(500).json({ message: "❌ Error saving user", error: err });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});