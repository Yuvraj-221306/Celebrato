const User = require("../models/users.js");
const Listing = require("../models/listings.js");

module.exports.renderSignupForm =(req, res) => {
    res.render("user/signup.ejs");
}

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Celebrato");
            res.redirect("/listings");

        });
    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("user/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to Celebrato!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return (next);
        }
        req.flash("success", "you are logged out");
        res.redirect("/listings");
    })
};


module.exports.profile = async (req, res) => {
    const listings = await Listing.find({ owner: req.user._id });
    res.render('user/profile', { user: req.user, listings });
};

module.exports.renderEditForm = async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        req.flash("error", "Profile you requested does not exist!");
        return res.redirect("/profile");
    }

    let originalImageUrl = user.image?.url;
    if (originalImageUrl) {
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_300");
    }

    res.render("user/profileEdit", { user, originalImageUrl });
};

module.exports.updateUser = async (req, res) => {
    try {
        const userId = req.user._id;
        const { username, email } = req.body.user;

        const user = await User.findById(userId);
        if (!user) {
            req.flash("error", "User not found.");
            return res.redirect("/profile");
        }

        user.username = username;
        user.email = email;

        if (req.file) {
            const { path: url, filename } = req.file;
            user.image = { url, filename };
        }

        await user.save();

        req.flash("success", "Profile updated successfully!");
        res.redirect("/profile");
    } catch (err) {
        console.error("Error updating user:", err);
        req.flash("error", "Something went wrong while updating your profile.");
        res.redirect("/profile");
    }
};

module.exports.showWishlist = async (req, res) => {
  const user = await User.findById(req.user._id).populate('wishlist');
  res.render("user/wishlist.ejs", { wishlist: user.wishlist });
};

module.exports.saveListings = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { $addToSet: { wishlist: req.params.id } });
  res.json({ success: true, action: "added" });
}

module.exports.deleteSaveListings =  async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { $pull: { wishlist: req.params.id } });
  res.json({ success: true, action: "removed" });
};