import express from 'express'
import dotenv from "dotenv"
import connectionDb from './config/db.js';
import colors from 'colors'
import cors from "cors"
import citiesRoutes from './routes/citiesRoutes.js';

dotenv.config();
const app = express();
connectionDb();

const port = process.env.PORT || 5000;

app.use(cors({ origin: "https://world-wise-4jrx.vercel.app/" }));

app.use("/api/cities", citiesRoutes)

app.listen(port, () => {
    console.log(`Server is runing in ${process.env.NODE_ENV} mode on port: ${port}`.yellow.bold)
})