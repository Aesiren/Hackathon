import "../App.css"
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


  return (
    <div className="mainpage">


      <h1>Character Display</h1>
      <Link to='/review'>Current Character</Link>
      <Link to='/new'>New Character</Link>


    </div>
  )
}

export default CharacterDisplay