import { useState, useEffect, useContext } from 'react'
import { CharacterContext } from "../Context/CharacterContext";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NewContext } from "../Context/NewContext";
import Loading from './Loading'

function HeritageSelection() {
  const [heritage, setHeritage] = useState([]);
  const [selected, setSelected] = useState({});
  const { newChar, setNewChar } = useContext(NewContext);

  useEffect(() => {
    fetch('http://localhost:3001/ancestry')
      .then(res => res.json())
      .then(data => setHeritage(data.ancestry))


  }, [])

  const onSelect = (item) => {
    setSelected(item);
  }

  function SaveSelection(selected) {
    setNewChar({ ...newChar, ancestry: selected });
  }

  if (heritage.length < 1) {
    return (<div className="mainpage"><Loading /></div>)
  }
  else {
    return (
      <>
        <div className="mainpage">
          <div className="title">
            <h1>Ancestry Selection</h1>
            Current Selection: {selected.name}<br />
            <button onClick={() => { SaveSelection(selected) }}>Save</button>
            <Link to="/new"><button>Back</button></Link>
          </div>

          {heritage.map((hert) => {
            return <HeritageCard heritage={hert} handleClick={onSelect} />
          })}

        </div>

      </>
    )
  }
}

function HeritageCard({ heritage, handleClick }) {

  return (
    <div className="card" onClick={() => { handleClick(heritage) }}>
      <h2>{heritage.name}</h2>
      <h2>{heritage.description}</h2>
      <h2><b>{heritage.features[0].name}</b></h2>
      <h2><b>{heritage.features[1].name}</b></h2>

    </div>
  )

}

export default HeritageSelection