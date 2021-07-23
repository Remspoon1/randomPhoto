import { Button, Col, Image } from "react-bootstrap"
import React, { useState } from "react"


async function getNewPhoto(endpoint){
  const response = await fetch (`http://localhost:3001/${endpoint}`)
  const data = await response.json()
  const photo = data.photo
  return photo  
}

function App() {
    const [ pic , setPic] = useState("")

async function handlePhoto(endpoint){
      let newPic = await getNewPhoto(endpoint)
      setPic(newPic)
    }

  return (
    <div className="App">
      <p> Hello from Randomizer </p>
      <p>WHAT do you want a photo of...?</p>
      <Button onClick={(e) => {handlePhoto("space")}}> SPACE</Button>
      <Button onClick={(e) => {handlePhoto("superhero")}}> SUPERHERO</Button>
      <Button onClick={(e) => {handlePhoto("cats")}}> CATS</Button>
      <Button onClick={(e) => {handlePhoto("dogs")}}> DOGS</Button>
      <Button onClick={(e) => {handlePhoto("wildlife")}}> WILDLIFE</Button>
      <Button onClick={(e) => {handlePhoto("bugs")}}> BUGS</Button>
      <Col>
      <Image src={pic} width="500" height="500"/>
      </Col>
    </div>
  );
}

export default App;

// `http://localhost:3001/superhero/${randomNum()}
