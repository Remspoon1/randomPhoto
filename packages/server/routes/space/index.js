
const express = require("express")
const fetch = require("node-fetch")

const router = express.Router()

async function getRandomPhoto(){
    const response = await fetch("https://images-api.nasa.gov/search?q=hubble")
    console.log(response)
    const data = await response.json()
    const photo = data.collection.items[randomNum()].links[0].href
    console.log(photo)
    return photo
  }

function randomNum(){
   return Math.floor(Math.random() * 99)
}

router.get("/" ,async (req,res) =>{
   let photo = await getRandomPhoto()
   res.status(200).json({photo})   
   }
)


module.exports = router
    
    