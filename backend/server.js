import express from 'express'
import cities from "./data/cities.json" with { type: 'json'}

const app = express();

const port = 5000;

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
    console.log(`Server is runing on port: ${port}`)
})