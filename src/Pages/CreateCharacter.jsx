import "../App.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClassSelection from './ClassSelection';
import HeritageSelection from './HeritageSelection';
import AssignTraits from './AssignTraits';
import CommunitySelection from './CommunitySelection';
import Info from './Info';
import Loading from './Loading'

import { CharacterContext } from "../Context/CharacterContext";
import { NewContext } from "../Context/NewContext";

function CreateCharacter() {

  return (
    <>

      <div className="mainpage">
        <div className="title">
          <h1>New Character</h1>
        </div>


        <ol>
          <li><Link to='/class'>Choose Class</Link></li>
          <li><Link to='/subclass'>Choose Subclass</Link></li>
          <li><Link to='/heritage'>Choose Ancestry</Link></li>
          <li><Link to='/community'>Choose Community</Link></li>
          <li><Link to='/traits'>Choose Traits</Link></li>
          <li><Link to='/info'>Basic Info</Link></li>
          <li><Link to='/review'>Review</Link></li>

        </ol>


      </div>


    </>

  )
}

export default CreateCharacter