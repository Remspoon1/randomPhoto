const express = require("express")
const superheroRouter = require("./superhero")
const spaceRouter = require("./space")
const catsRouter = require("./cats")
const dogsRouter = require("./dogs")
const wildlifeRouter = require("./wildlife")
const bugsRouter = require("./bugs")
const carsRouter = require("./cars")
const modelsRouter = require("./models")
const soldierRouter = require("./soldier")
const livestockRouter = require("./livestock")
const lighthousesRouter = require("./lighthouses")
const piratesRouter = require("./pirates")

const router = express.Router()

router.use("/superhero", superheroRouter)
router.use("/space", spaceRouter)
router.use("/cats", catsRouter)
router.use("/dogs", dogsRouter)
router.use("/wildlife", wildlifeRouter)
router.use("/bugs", bugsRouter)
router.use("/cars", carsRouter)
router.use("/models", modelsRouter)
router.use("/soldier", soldierRouter)
router.use("/livestock", livestockRouter)
router.use("/lighthouses", lighthousesRouter)
router.use("/pirates", piratesRouter)



module.exports=router


