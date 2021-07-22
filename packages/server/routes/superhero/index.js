const express = require("express")
const {getPhoto} = require("./api")

const router = express.Router()

function randomNum(){
   return Math.floor(Math.random() * 729)
}

router.get("/" ,async (req,res) =>{
   let photo = await getPhoto(randomNum())
   res.status(200).json({photo})   
   }
)


module.exports = router