const express = require("express")
const fetch = require("node-fetch")

const router = express.Router()

async function getRandomPhoto(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    console.log(response)
    const data = await response.json()
    const photo = data.message
    console.log(photo)
    return photo
  }

router.get("/" ,async (req,res) =>{
   let photo = await getRandomPhoto()
   res.status(200).json({photo})   
   }
)


module.exports = router