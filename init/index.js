const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");
const Booking = require("../models/booking.js");
const Chat = require("../models/chat.js");
const User = require("../models/users.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Event";

main().then(() => {
    console.log("connected to DB");
})
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Booking.deleteMany({});
     await Chat.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "68767a8d945bd15e96e1286f" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

// Create an admin user (example)
// const adminUser = new User({
//     username: "Yuvi",
//     email: "yuvraj123@gmail.com",
//     isAdmin: true
// });
// User.register(adminUser, "7841").then(() => {
//     console.log("Admin user created");
// });

initDB();