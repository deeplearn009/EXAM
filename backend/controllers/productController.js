import ProductModel from "../models/productModel.js";

const getProduct = async (req, res) => {
    const product = await ProductModel.find()
    res.json(product)
}

const postProduct = async (req, res) => {
    const product = await ProductModel.create(req.body)
    res.json(product)
}

const deleteProduct = async (req, res) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id)
    res.json(product)
}

export {getProduct, postProduct, deleteProduct}