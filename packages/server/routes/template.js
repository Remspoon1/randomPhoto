const express = require("express")
const fetch = require("node-fetch")

const router = express.Router()

async function getRandomPhoto(){
    const response = await fetch("URL of API to SEARCH")
    console.log(response)
    const data = await response.json()
    const photo = "process required to extract image"
    console.log(photo)
    return photo
  }

function randomNum(){
   return Math.floor(Math.random() * 99 ) //99 = max random number
}

router.get("/" ,async (req,res) =>{
   let photo = await getRandomPhoto()
   res.status(200).json({photo})   
   }
)


module.exports = router