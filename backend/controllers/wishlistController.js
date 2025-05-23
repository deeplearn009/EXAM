import WishlistModel from "../models/wishlistModel.js";
import BasketModel from "../models/basketModel.js";


const getWishlist = async (req, res) => {
    const wishlist = await WishlistModel.find()
    res.json(wishlist)
}

const findIt = async (it) => {
    const item = await WishlistModel.findOne({it: it})
    return item
}

const postWishlist = async (req, res) => {
    const exist = await findIt(req.body.it)

    if(!exist) {
        await WishlistModel.create(req.body)
        res.json("Added")
    } else {
        res.json("Already added")
    }
}

const deleteWishlist = async (req, res) => {
    const wishlist  = await WishlistModel.findByIdAndDelete(req.params.id)
    res.json(wishlist)
}

export {getWishlist, postWishlist, deleteWishlist}