import mongoose from "mongoose";
import dotenv from "dotenv"
import connectionDb from "./config/db.js";
import colors from "colors"
import cities from "./data/cities.js"
import users from "./data/users.js"
import User from "./models/userModel.js";
import City from "./models/citiesModel.js";

dotenv.config();
connectionDb();

const importData = async () => {
    try {
        await City.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id
        const createdCities = cities.map(city => { return { ...city, user: adminUser } })
        await City.insertMany(createdCities)
        console.log(`Data Imported`.green.inverse)
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await City.deleteMany();
        await User.deleteMany();

        console.log(`Data Destroyed`.red.inverse)
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}