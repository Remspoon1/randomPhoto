const express = require("express")
const fetch = require("node-fetch")

const router = express.Router()

async function getRandomPhoto(){
    const response = await fetch("https://api.thecatapi.com/v1/images/search?api_key=11927a71-951b-4337-9d00-b2eec1ea56b2")
    console.log(response)
    const data = await response.json()
    const photo = data[0].url
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