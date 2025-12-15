if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/users.js");
const ejsMate = require("ejs-mate");
const Listing = require("./models/listings.js");
const Chat = require('./models/chat.js');
const methodOverride = require("method-override");
const http = require('http').createServer(app);
const io = require('socket.io')(http);


const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const ExpressError = require("./utils/ExpressError");




const sessionOption = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingRouter = require("./routes/booking.js");
const chatRouter = require('./routes/chat.js');
const inboxRoutes = require('./routes/inbox');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MONGO_URL = process.env.MONGODB;

main().then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});


app.use(chatRouter);
app.use('/inbox', inboxRoutes);
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
app.use("/booking", bookingRouter);


app.get("/", (req, res) => {
    res.render("listings/landingPage");
});

io.on('connection', (socket) => {
  socket.on('joinRoom', ({ listingId, userId, hostId }) => {
    socket.join(listingId);
  });

  socket.on('chatMessage', async ({ listingId, userId, hostId, message }) => {
    // Save to DB
    const chatMsg = await Chat.create({
      listingId,
      hostId,
      userId,
      senderId: userId,
      message,
      read: false,
      createdAt: new Date()
    });
    // Emit to all in room
    io.to(listingId).emit('chatMessage', {
      senderId: userId,
      message,
      createdAt: chatMsg.createdAt
    });
  });
});

// working on  "express": "^4.18.2"

 app.all("*", (req , res , next) => {
    next(new ExpressError(404 , "Page Not Found!"));
 });

// Error Handling
app.use(( err , req , res , next ) => {
    console.error("Error caught in middleware:");
    const { statusCode = 500 , message = "Something Went Wrong!" } = err;
    res.status(statusCode).render("error.ejs" , {message});
   
});

http.listen(8080, () => {
    console.log("server is listening on port 8080");
});