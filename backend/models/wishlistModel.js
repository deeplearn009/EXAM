import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
    it: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
}, {timestamps: true})

const WishlistModel = mongoose.model('Wishlist', wishlistSchema)

export default WishlistModel