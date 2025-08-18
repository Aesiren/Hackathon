import "../App.css"
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateCharacter from './CreateCharacter';
import ClassSelection from './ClassSelection';
import HeritageSelection from './HeritageSelection';
import AssignTraits from './AssignTraits';
import Info from './Info';
import Loading from './Loading'
import { CharacterContext } from "../Context/CharacterContext";
import { NewContext } from "../Context/NewContext";

function CharacterDisplay() {
  // const [charList, setCharList] = useState([]);

  // useEffect(() => {
  //   //replace hard-coded user ID later
  //   fetch('http://localhost:3001/characters/1')
  //     .then(res => res.json())
  //     .then(data => setCharList(data.characters))

  // }, [])


  return (
    <div className="mainpage">


      <h1>Character Display</h1>
      <Link to='/review'>Current Character</Link>
      <Link to='/new'>New Character</Link>

    </div>
  )
}

export default CharacterDisplay