import { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterDisplay from './Pages/CharacterDisplay';
import CreateCharacter from './Pages/CreateCharacter';
import ClassSelection from './Pages/ClassSelection';
import HeritageSelection from './Pages/HeritageSelection';
import AssignTraits from './Pages/AssignTraits';
import CommunitySelection from './Pages/CommunitySelection';
import SubClassSelection from './Pages/SubClassSelection';
import CharacterReview from './Pages/CharacterReview';
import Loading from './Pages/Loading'
import Info from './Pages/Info';
import Domains from './Pages/Domains';
import { CharacterContext } from "./Context/CharacterContext";
import { NewContext } from "./Context/NewContext";
//testing branch
function TitleBar() {

  return (
    <div className="titlebar">
      <Link to="/"><h1>DaggerHeart</h1></Link>
    </div>
  )
}

function SideBar() {

  return (
    <div className="sidebar">
      <Link to="/characters"><h2>Characters</h2></Link>
      <Link to="/domain"><h2>Domains</h2></Link>
    </div>
  )

}

function WelcomePage() {

  return (
    <div className="mainpage">
      <h1>Welcome</h1>
    </div>
  )

}

function App() {
  const [character, setCharacter] = useState([]);
  const [newChar, setNewChar] = useState({
    name: "",
    pronouns: "",
    ancestry: [],
    community: [],
    class: [],
    subclass: [],
    level: 1,
    evasion: 0,
    armor: 0,
    agility: 0,
    strength: 0,
    finesse: 0,
    instinct: 0,
    presence: 0,
    knowledge: 0,
    experience: [],
    background: [],
    connections: []
  })



  useEffect(() => {
    console.log(newChar)
  }, [newChar])

  return (
    <div className="app">
      <TitleBar />
      <SideBar />
      <CharacterContext.Provider value={{ character, setCharacter }}>
        <NewContext.Provider value={{ newChar, setNewChar }}>


          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/characters' element={<CharacterDisplay />} />
            <Route path='/review' element={<CharacterReview />} />
            <Route path='/domain' element={<Domains />} />
            <Route path='/new' element={<CreateCharacter />} />
            <Route path='/class' element={<ClassSelection />} />
            <Route path='/subclass' element={<SubClassSelection />} />
            <Route path='/heritage' element={<HeritageSelection />} />
            <Route path='/traits' element={<AssignTraits />} />
            <Route path='/community' element={<CommunitySelection />} />
            <Route path='/info' element={<Info />} />

          </Routes>

        </NewContext.Provider>
      </CharacterContext.Provider>
    </div>
  )
}

export default App
