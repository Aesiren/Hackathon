import { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CharacterContext } from "../Context/CharacterContext";
import { NewContext } from "../Context/NewContext";
import Loading from './Loading'
import '../App.css'

function AssignTraits() {
  const [traits, setTraits] = useState([
    {
      name: "agility",
      modifier: 0
    },
    {
      name: "strength",
      modifier: 0
    },
    {
      name: "finesse",
      modifier: 0
    },
    {
      name: "instinct",
      modifier: 0
    },
    {
      name: "presence",
      modifier: 0
    },
    {
      name: "knowledge",
      modifier: 0
    }
  ]);
  const [traitDesc, setTraitDesc] = useState([]);
  const [selectedMod, setSelectedMod] = useState();
  const { newChar, setNewChar } = useContext(NewContext);


  useEffect(() => {
    fetch('http://localhost:3001/traits')
      .then(res => res.json())
      .then(data => setTraitDesc(data.trait))
  }, [])

  // const onSelect = (item) => {
  //   setSelected(item);
  // }

  // function SaveSelection(selected) {
  //   setNewChar({ ...newChar, class: selected });
  // }

  if (traitDesc.length < 1) {
    return (<div className="mainpage"><Loading /></div>)
  }
  else {
    return (
      <>
        <div className="mainpage">
          <div className="title">
            <h1>Assign Traits</h1>

            <button>Save</button>
            <Link to="/new"><button>Back</button></Link>
          </div>
          {traitDesc.map((trait) => {
            return <TraitCards trait={trait} />
          })}
        </div>
      </>
    )
  }
}

function TraitCards({ trait }) {

  return (
    <div className="card">
      <h2>{trait.name}</h2>
      <h2>{trait.use}</h2>
      <h3>{trait.description}</h3>

    </div>
  )

}

function Modifiers({ int, handleClick }) {

}

export default AssignTraits

// Current Selection: {selected.name}<br />