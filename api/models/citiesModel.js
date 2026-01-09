import mongoose from "mongoose"

const citySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    cityName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    emoji: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    notes: {
        type: String,
    },
    position: {
        lat: { type: String, required: true },
        lng: { type: String, required: true },
    },
})

const City = mongoose.model("City", citySchema);

export default City