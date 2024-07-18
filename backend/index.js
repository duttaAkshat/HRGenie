import express from 'express';
import mongoose from './utils/db.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import { adminRouter } from './Routes/AdminRoute.js';

const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use('/auth', adminRouter)

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
