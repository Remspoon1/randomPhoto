const express = require("express")
const superheroRouter = require("./superhero")
const spaceRouter = require("./space")
const catsRouter = require("./cats")

const router = express.Router()

router.use("/superhero", superheroRouter)
router.use("/space", spaceRouter)
router.use("/cats", catsRouter)



module.exports=router


