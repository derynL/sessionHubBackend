import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { router as addUser } from './routes/addUser.js';
import { login } from './routes/login.js';
import { profile } from './routes/getProfile.js';

const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const host = process.env.HOST;
const port = process.env.PORT;
const dburi = process.env.DBURI;

const main = async () => {
  console.log(`Connecting to database at ${dburi}`);
  await mongoose.connect(dburi);
};

main()
  .then(() => console.log(`Connected to DB`))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use('/register', addUser);
app.use(`/login`, login);
app.use(`/profile`, profile);

const server = app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

export default server;
