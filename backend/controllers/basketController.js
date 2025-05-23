import BasketModel from "../models/basketModel.js";


const getBasket = async (req, res) => {
    const basket = await BasketModel.find()
    res.json(basket)
}

const findIt = async (it) => {
    const item = await BasketModel.findOne({it: it})
    return item
}

const postBasket = async (req, res) => {
    const exist = await findIt(req.body.it)

    if(exist) {
        if(Number(exist.count) >= 1 && Number(req.body.count) === 1) {
            const data = {
                it: req.body.it,
                name: req.body.name,
                image: req.body.image,
                price: req.body.price,
                count: String(Number(exist.count) + Number(req.body.count))
            }
            const basket = await BasketModel.findOneAndUpdate(
                {_id: exist.id},
                data,
                { new: true }
            )
            res.json(basket)
        }
        if(Number(exist.count) > 1 && Number(req.body.count) === -1) {
            const data = {
                it: req.body.it,
                name: req.body.name,
                image: req.body.image,
                price: req.body.price,
                count: String(Number(exist.count) + Number(req.body.count))
            }
            const basket = await BasketModel.findOneAndUpdate(
                {_id: exist.id},
                data,
                { new: true }
            )
            res.json(basket)
        }
    } else {
        const data = {
            it: req.body.it,
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            count: "1"
        }
        const basket = await BasketModel.create(data)
        res.json(basket)
    }
}

const deleteBasket = async (req, res) => {
    const basket = await BasketModel.findByIdAndDelete(req.params.id)
    res.json(basket)
}

export {getBasket, postBasket, deleteBasket}