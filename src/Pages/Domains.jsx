import "../App.css"
import { useState, useEffect } from 'react'
import { CharacterContext } from "../Context/CharacterContext";
import { NewContext } from "../Context/NewContext";
import arcana from "../assets/arcana.png"
import blade from "../assets/blade.png"
import bone from "../assets/bone.png"
import codex from "../assets/codex.png"
import grace from "../assets/grace.png"
import midnight from "../assets/midnight.png"
import sage from "../assets/sage.png"
import splendor from "../assets/splendor.png"
import valor from "../assets/valor.png"
import Loading from './Loading'

function Domains() {

  const [domains, setDomains] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/domain')
      .then(res => res.json())
      .then(data => setDomains(data.domains))

  }, [])


  if (domains.length < 1) {
    return (<div className="mainpage"><Loading /></div>)
  }
  else {
    return (
      <div className="mainpage">
        <h1 className="title">Domains</h1>
        {domains.map((dom) => {
          return <DomainCard domain={dom} />
        })}
      </div>
    )
  }
}


function DomainCard({ domain }) {
  console.log(domain)

  const [image, setImage] = useState();

  useEffect(() => {
    setImage(getImage(domain.name));

  })
  function getImage(name) {
    switch (name) {
      case 'Arcana':
        return arcana;
        break;
      case 'Blade':
        return blade;
        break;
      case 'Bone':
        return bone;
        break;
      case 'Codex':
        return codex;
        break;
      case 'Grace':
        return grace;
        break;
      case 'Midnight':
        return midnight;
        break;
      case 'Sage':
        return sage;
        break;
      case 'Splendor':
        return splendor;
        break;
      case 'Valor':
        return valor;
        break
    }
  }
  return (
    <div className="card">
      <img src={image} className="image" />
      <h3>{domain.name}</h3>
      <h4>{domain.description}</h4>
    </div>
  )
}

export default Domains