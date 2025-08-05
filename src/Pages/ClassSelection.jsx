import { CharacterContext } from "../Context/CharacterContext";
import { NewContext } from "../Context/NewContext";
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loading from './Loading'

function ClassSelection() {
  const [classes, setClasses] = useState([]);
  const [selected, setSelected] = useState({});
  const { newChar, setNewChar } = useContext(NewContext);

  useEffect(() => {
    fetch('http://localhost:3001/classes')
      .then(res => res.json())
      .then(data => setClasses(data.classes))
  }, [])

  const onSelect = (item) => {
    setSelected(item);
  }

  function SaveSelection(selected) {
    setNewChar({ ...newChar, class: selected });
  }

  if (classes.length < 1) {
    return (<div className="mainpage"><Loading /></div>)
  }
  else {
    return (
      <div className="mainpage">
        <div className="title">
          <h1>Class Selection</h1>
          Current Selection: {selected.name}<br />
          <button onClick={() => { SaveSelection(selected) }}>Save</button>
          <Link to="/new"><button>Back</button></Link>
        </div>

        {classes.map((aclass) => {
          return <ClassDisplay aclass={aclass} handleClick={onSelect} />
        })}

      </div>
    )
  }
}

function ClassDisplay({ aclass, handleClick }) {

  return (
    <div className="card" onClick={() => { handleClick(aclass) }}>
      <h2>Name: {aclass.name}</h2>
      <h3>Domains: {aclass.domains}</h3>
      <h3>Evasion: {aclass.evasion}</h3>
      <h3>Hit Points: {aclass.hitPoints}</h3>
    </div>
  )
}

export default ClassSelection