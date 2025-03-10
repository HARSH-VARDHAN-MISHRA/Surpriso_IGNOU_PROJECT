const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const { connectDB } = require("./ConnectDb/ConnectDB")
const BannerRouter = require("./Route/BannerRouter")
const categoryRouter = require("./Route/CategoryRouter")
const ProductRouter = require("./Route/ProductRouter")
const cartRouter = require("./Route/CartRouter")
const checkoutrouter = require("./Route/CheckoutRouter")
const userRouter = require("./Route/UserRouter")
const NewsletterRouter = require("./Route/NewsletterRouter")
const ContactRouter = require("./Route/ContactRouter")


const app = express()
connectDB()
app.use(cors({ origin: "*" })); 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set(express.static("/Public"))
app.use("/api", BannerRouter)
app.use("/api", categoryRouter)
app.use("/api", ProductRouter)
app.use("/api", cartRouter)
app.use("/api", checkoutrouter)
app.use("/api", userRouter)
app.use("/api", NewsletterRouter)
app.use("/api", ContactRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT} port`)
})