const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/users.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { isLoggedIn, saveRedirectUrl } = require("../middleware.js");

const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


const userController = require("../controllers/users.js");

router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));


router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local",
            {
                failureRedirect: "/login",
                failureFlash: true,
            }),
        userController.login
    )


router.get("/logout", userController.logout);

router
    .route("/profile")
    .get(isLoggedIn, userController.profile)
    .put(isLoggedIn, upload.single("image"), wrapAsync(userController.updateUser));


router.get("/profile/edit", isLoggedIn, wrapAsync(userController.renderEditForm));

router.get('/wishlist', isLoggedIn, userController.showWishlist);

router
    .route('/wishlist/:id')
    .post(isLoggedIn, wrapAsync(userController.saveListings))
    .delete(isLoggedIn, wrapAsync(userController.deleteSaveListings));

module.exports = router;