import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import router from './routes/create_user';
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


app.use("/",router);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});