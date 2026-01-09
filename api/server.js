import express from 'express'
import dotenv from "dotenv"
import connectionDb from './config/db.js';
import colors from 'colors/index.js'
import cors from "cors"
import citiesRoutes from './routes/citiesRoutes.js';

dotenv.config();
const app = express();
app.use(
    cors({
        origin: "https://world-wise-4jrx.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(express.json());
const port = process.env.PORT || 5000;
connectionDb();

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://world-wise-4jrx.vercel.app", "https://worldwise-90.netlify.app");

//     next();
// })

app.use("/api/cities", citiesRoutes)

// app.listen(port, () => {
//     console.log(`Server is runing in ${process.env.NODE_ENV} mode on port: ${port}`.yellow.bold)
// })

export default app;