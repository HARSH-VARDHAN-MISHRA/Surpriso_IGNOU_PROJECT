const { addItemToCart, getCart, removeItemFromCart, updateCartItemQuantity } = require("../Controllar/CartControlar")
const { verifyBuyer } = require("../Middelware/authMiddleware")


const cartRouter = require("express").Router()

cartRouter.post("/cart", verifyBuyer, addItemToCart)
cartRouter.get("/cart/:userid", verifyBuyer, getCart)
cartRouter.delete("/cart/:_id", verifyBuyer, removeItemFromCart)
cartRouter.put("/cart/:_id", verifyBuyer, updateCartItemQuantity)

module.exports = cartRouter