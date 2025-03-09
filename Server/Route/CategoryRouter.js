const { createRecord, getAllRecord, getSingleRecord, updateRecord, deleteRecord } = require("../Controllar/CategoryControllar")
const { verifyAdmin } = require("../Middelware/authMiddleware")
const upload = require("../Middelware/Multer")

const categoryRouter = require("express").Router()

categoryRouter.post("/category", verifyAdmin, upload.single("categoryImage"), createRecord)
categoryRouter.put("/category/:_id", verifyAdmin, upload.single("categoryImage"), updateRecord)
categoryRouter.get("/category",  getAllRecord)
categoryRouter.get("/category/:_id",  getSingleRecord)
categoryRouter.delete("/category/:_id", verifyAdmin, deleteRecord)

module.exports = categoryRouter