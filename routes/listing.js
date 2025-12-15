const  express = require("express");
const router = express.Router();
const Listing = require("../models/listings.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { isLoggedIn , isOwner , validateListing  , ensureAdmin} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


router
.route("/")
.get( wrapAsync(listingController.index))
.post(  isLoggedIn  ,upload.single("listing[images]"), validateListing , wrapAsync(listingController.createListing)
);

 //search
router.get("/search", listingController.search);

router.get('/myListings', isLoggedIn, wrapAsync(listingController.myListings));
router.get('/wishlist', isLoggedIn, wrapAsync(listingController.wishlist));


//New Route
router.get("/new" , isLoggedIn , listingController.renderNewForm);


router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put( isLoggedIn , isOwner , upload.single("listing[images]")  , validateListing , wrapAsync(listingController.updateListing)
)
.delete( isLoggedIn , isOwner , wrapAsync(listingController.destroyListing)
);


//Edit Route
router.get("/:id/edit", isLoggedIn , isOwner , wrapAsync(listingController.renderEditForm)
);

router.get('/:id/allphotos', wrapAsync(listingController.showPhotos));

router.post('/:id/upload-photo',isLoggedIn, isOwner, upload.array('images'), wrapAsync(listingController.uploadPhotos));



module.exports = router;