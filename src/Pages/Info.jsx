import { CharacterContext } from "../Context/CharacterContext";
import { NewContext } from "../Context/NewContext";
import { useState, useEffect, useContext } from 'react'
import Loading from './Loading'

function Info() {
  const { newChar, setNewChar } = useContext(NewContext);
  const [background, setBackground] = useState(newChar.class.background);
  const [connections, setConnections] = useState(newChar.class.connections);
  //console.log(background);
  return (
    <div className="mainpage">
      <div className="title">
        <h1>Information</h1>

      </div>






      <form>
        <label>Name:</label>
        <label>Pronouns:</label>
        <label>Description:</label>

        {background.map((back) => {
          return <label>{back}</label>
        })}

        {connections.map((conn) => {
          return <label>{conn}</label>
        })}



      </form>


    </div>
  )
}



export default Info