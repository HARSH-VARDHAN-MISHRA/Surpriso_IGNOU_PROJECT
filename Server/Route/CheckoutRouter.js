const { placeOrder, getUserRecord, getRecord, getSingleOrder, updateOrderRecord, paymentVerification } = require("../Controllar/CheckoutControllar")
const { verifyBuyer } = require("../Middelware/authMiddleware")


const checkoutrouter = require("express").Router()

checkoutrouter.post("/checkout", verifyBuyer, placeOrder)
checkoutrouter.post("/Payment-Verification", verifyBuyer, paymentVerification)
checkoutrouter.get("/checkout/:userid", verifyBuyer, getUserRecord)
checkoutrouter.get("/checkout", verifyBuyer, getRecord)
checkoutrouter.get("/checkout/admin/:_id", verifyBuyer, getSingleOrder)
checkoutrouter.put("/checkout/admin/:_id", verifyBuyer, updateOrderRecord)

module.exports = checkoutrouter