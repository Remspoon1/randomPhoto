const express = require("express")
const fetch = require("node-fetch")

const router = express.Router()

function randomNum(){
  return Math.floor(Math.random() * 199)
}

async function getRandomPhoto(){
    const response = await fetch("https://pixabay.com/api/?key=22613327-5fcef47d99ddbe8342fbd2953&q=soldier&image_type=photo&per_page=200")
    console.log(response)
    const data = await response.json()
    console.log(data)
    const photo = data.hits[randomNum()].largeImageURL
    console.log(photo)
    return photo
  }

router.get("/" ,async (req,res) =>{
   let photo = await getRandomPhoto()
   res.status(200).json({photo})   
   }
)


module.exports = router