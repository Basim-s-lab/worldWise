import express from "express"
import City from "../models/citiesModel.js"
import asyncHandler from "express-async-handler"


const router = express.Router()

router.get("/", asyncHandler(async (req, res) => {

    const cities = await City.find({})
    res.json(cities)
}))

router.get("/:id", asyncHandler(async (req, res) => {
    const city = await City.findById(req.params.id)
    if (city) { res.json(city) } else { res.status(404).json({ message: "City not found" }) }
}))

export default router