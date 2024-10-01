const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// const MONGO_URL = "mongodb+srv://pujashaw7450:8tzELsTc6VND2yJy@cluster0.gqyjm.mongodb.net/wanderlust?retryWrites=true&w=majority&appName=Cluster0" // dekhiye wanderlust name se ej database create ho jayega run kriye aap save bhi krna hota hai
main() 
    .then((res) => {
        console.log(res)
        console.log("Connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: '66d59152d88909edbdc47ecf' }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();