import { CharacterContext } from "../Context/CharacterContext";
import { NewContext } from "../Context/NewContext";
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loading from './Loading'

function ClassSelection() {
  const [selected, setSelected] = useState({});
  const { newChar, setNewChar } = useContext(NewContext);
  const [subClasses, setSubClasses] = useState(newChar.class.subclass);

  // useEffect(() => {
  //   fetch('http://localhost:3001/classes')
  //     .then(res => res.json())
  //     .then(data => setClasses(data.classes))
  // }, [])

  const onSelect = (item) => {
    setSelected(item);
  }

  function SaveSelection(selected) {
    setNewChar({ ...newChar, subclass: selected });
  }

  if (subClasses.length < 1) {
    return (<div className="mainpage"><Loading /></div>)
  }
  else {
    return (
      <div className="mainpage">
        <div className="title">
          <h1>SubClass Selection</h1>
          Current Selection: {selected.subclassName}<br />
          <button onClick={() => { SaveSelection(selected) }}>Save</button>
          <Link to="/new"><button>Back</button></Link>
        </div>

        {subClasses.map((sub) => {
          return <ClassDisplay subClass={sub} handleClick={onSelect} />
        })}

      </div>
    )
  }
}

function ClassDisplay({ subClass, handleClick }) {

  return (
    <div className="card" onClick={() => { handleClick(subClass) }}>
      <h2>Name: {subClass.subclassName}</h2>
      <h3>Description: {subClass.subclassDescription}</h3>
      <h3>Spellcast: {subClass.spellcast}</h3>
      <h3>Foundation: {subClass.foundation.map((found) => {
        { found.name } { found.description }
      })} </h3>
      <h3>Specialization: {subClass.specialization.map((spec) => {
        { spec.name } { spec.description }
      })}</h3>
      <h3>Mastery: {subClass.mastery.map((mast) => {
        { mast.name } { mast.description }
      })}</h3>
    </div>
  )
}

export default ClassSelection