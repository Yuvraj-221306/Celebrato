const Listing = require("../models/listings.js");
const User = require("../models/users.js");


module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.myListings = async (req, res, next) => {
  const allListings = await Listing.find({});
    res.render("listings/myListings.ejs", { allListings });
}

//search 
module.exports.search = async (req, res) => {
    let { location = "", title = "", categories = "" } = req.query;

    let filter = {};
        if (categories) {
        const categoriesArray = categories.split(',');
        filter.categories = { $in: categoriesArray };
        location = "";
        title = "";
    } 
     else if (location) {
    filter.$or = [
        { location: { $regex: location, $options: "i" } },
        { title: { $regex: location, $options: "i" } }
    ];
    title = "";
    categories = "";
}

    const allListings = await Listing.find(filter);
    res.render("listings/search.ejs", { allListings, location, categories });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res, next) => {
    // let { title , description , image , price , country , location} = req.body;
    let url = req.file.path;
    let filename = req.file.filename;

    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.images = [{ url, filename }];
    await newlisting.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");

}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.images[0].url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_300");
    res.render("listings/edit.ejs", { listing , originalImageUrl });
}

module.exports.updateListing = async (req, res) => {

    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {

        let url = req.file.path;
        let filename = req.file.filename;
        listing.images[0] = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}

module.exports.showPhotos = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash('error', 'Listing not found');
    return res.redirect('/listings');
  }
  res.render('listings/allPhotos', { listing });
}

module.exports.uploadPhotos = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash('error', 'Listing not found');
    return res.redirect('/listings');
  }

  // Add uploaded images to listing.images
  const newImages = req.files.map(file => ({
    url: file.path,
    filename: file.filename
  }));
  listing.images.push(...newImages);

  await listing.save();
  req.flash('success', 'Photo(s) uploaded successfully!');
  res.redirect(`/listings/${listing._id}/allphotos`);
};