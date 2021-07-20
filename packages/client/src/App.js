import { Button, Col, Image } from "react-bootstrap"
import React, { useState } from "react"


async function getRandomPhoto(){
  const response = await fetch("https://images-api.nasa.gov/search?q=hubble")
  const data = await response.json()
  const photo = data.collection.items[70].links[0].href
  console.log(photo)
  // console.log(data.X-RateLimit-Remaining)
  return photo
}

function App() {
    const [ pic , setPic] = useState("")

async function handlePhoto(){
      let newPic = await getRandomPhoto()
      setPic(newPic)
    }

  return (
    <div className="App">
      <p> Hello from Randomizer </p>
      <p>Want a random Space Photo</p>
      <Button onClick={handlePhoto}> Get Photo </Button>
      <Col>
      <Image src={pic} rounded />
      </Col>
    </div>
  );
}

export default App;
