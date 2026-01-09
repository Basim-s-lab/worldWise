import express from "express";
import asyncHandler from "express-async-handler";
import City from "../models/citiesModel.js";

const router = express.Router();

/**
 * GET all cities
 */
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const cities = await City.find({});
        res.status(200).json(cities);
    })
);

/**
 * GET single city by ID
 */
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const city = await City.findById(req.params.id);

        if (!city) {
            res.status(404).json({ message: "City not found" });
            return;
        }

        res.status(200).json(city);
    })
);

export default router;
