import express from 'express'
import dotenv from "dotenv"
import connectionDb from './config/db.js';
import cors from "cors"
import citiesRoutes from './routes/citiesRoutes.js';

dotenv.config();
const app = express();
app.use(
    cors({
        origin: ["https://world-wise-4jrx.vercel.app", "https://worldwise-90.netlify.app", "http://localhost:5173", "http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(express.json());
const port = process.env.PORT || 8000;
// Temp route to test cors
app.get("/api/test", (req, res) => {
    res.status(200).json({ message: "CORS & server working" });
});
connectionDb();

app.use("/api/cities", citiesRoutes)

app.listen(port, () => {
    console.log(`Server is runing in ${process.env.NODE_ENV} mode on port: ${port}`)
})

export default app;