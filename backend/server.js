import express from 'express'
import dotenv from "dotenv"
import connectionDb from './config/db.js';
import colors from 'colors'
import cors from "cors"
import citiesRoutes from './routes/citiesRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
connectionDb();
app.options('*', cors())
const port = process.env.PORT || 5000;

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://world-wise-4jrx.vercel.app", "https://worldwise-90.netlify.app");

//     next();
// })

app.use("/api/cities", citiesRoutes)

app.listen(port, () => {
    console.log(`Server is runing in ${process.env.NODE_ENV} mode on port: ${port}`.yellow.bold)
})