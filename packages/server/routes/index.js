const express = require("express")
const superheroRouter = require("./superhero")
const spaceRouter = require("./space")
const catsRouter = require("./cats")
const dogsRouter = require("./dogs")
const wildlifeRouter = require("./wildlife")
const bugsRouter = require("./bugs")

const router = express.Router()

router.use("/superhero", superheroRouter)
router.use("/space", spaceRouter)
router.use("/cats", catsRouter)
router.use("/dogs", dogsRouter)
router.use("/wildlife", wildlifeRouter)
router.use("/bugs", bugsRouter)



module.exports=router


