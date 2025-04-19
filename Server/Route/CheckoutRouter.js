const { placeOrder, getUserRecord, getRecord, getSingleOrder, updateOrderRecord, paymentVerification } = require("../Controllar/CheckoutControllar")
const { verifyBuyer, verifyUser, verifyAdmin } = require("../Middelware/authMiddleware")


const checkoutrouter = require("express").Router()

checkoutrouter.post("/checkout", verifyBuyer, placeOrder)
checkoutrouter.post("/Payment-Verification",  paymentVerification)
checkoutrouter.get("/checkout/:userid", verifyBuyer, getUserRecord)
checkoutrouter.get("/checkout", verifyUser, getRecord)
checkoutrouter.get("/checkout/admin/:_id", verifyAdmin, getSingleOrder)
checkoutrouter.put("/checkout/admin/:_id", verifyAdmin, updateOrderRecord)

module.exports = checkoutrouter