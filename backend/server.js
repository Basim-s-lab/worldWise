import express from 'express'
import dotenv from "dotenv"
import cities from "./data/cities.json" with { type: 'json'}
import connectionDb from './config/db.js';

dotenv.config();
const app = express();
connectionDb();

const port = process.env.PORT || 5000;

app.get("/api/cities", (req, res) => {
    console.log(cities.cities)
    res.json(cities)
})

app.get("/api/cities/:id", (req, res) => {
    let id = Number(req.params.id)
    const city = cities.cities.find((c) => c.id === id)
    res.json(city)
})

app.listen(port, () => {
    console.log(`Server is runing in ${process.env.NODE_ENV} mode on port: ${port}`)
})