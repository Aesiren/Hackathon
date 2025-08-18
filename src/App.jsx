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
import Login from './Pages/Login'
import Loading from './Pages/Loading'
import Info from './Pages/Info';
import Domains from './Pages/Domains';
import Users from './Pages/Users';

import { CharacterContext } from "./Context/CharacterContext";
import { NewContext } from "./Context/NewContext";
import { UserContext } from "./Context/UserContext";
import cookie from 'cookie';



//testing branch
function TitleBar() {

  return (
    <div className="titlebar">
      <Link to="/"><h1>DaggerHeart</h1></Link>
    </div>
  )
}

function SideBar() {
  document.cookie = `userName=${undefined}`;
  let [cookies, setCookies] = useState(`userName=""`);

  useEffect(() => {
    document.cookie = `userName=""`;
    setCookies(document.cookie);
  }, [])


  useEffect(() => {
    setCookies(document.cookie);
  }, [cookie])


  if (cookies.userName != undefined) {
    console.log("username: ", cookies);
    return (
      <div className="sidebar">
        <Link to="/characters"><h2>{cookies.userName}</h2></Link>
        <Link to="/characters"><h2>Characters</h2></Link>
        <Link to="/domain"><h2>Domains</h2></Link>
      </div>
    )
  } else {
    return (
      <div className="sidebar">
        <Link to="/login"><h2>Login</h2></Link>
        <Link to="/users"><h2>User List</h2></Link>
        <Link to="/characters"><h2>Characters</h2></Link>
        <Link to="/domain"><h2>Domains</h2></Link>
      </div>
    )
  }

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
  const [user, setUser] = useState("userName=''");
  const [newChar, setNewChar] = useState({
    user_id: 1,
    name: "Test",
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
    document.cookie = `userName=${user.userName}`;
  }, [user])

  useEffect(() => {
    console.log(newChar)
  }, [newChar])

  return (
    <div className="app">
      <TitleBar />
      <SideBar />
      <CharacterContext.Provider value={{ character, setCharacter }}>
        <NewContext.Provider value={{ newChar, setNewChar }}>
          <UserContext.Provider value={{ user, setUser }}>

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
              <Route path='/login' element={<Login />} />
              <Route path='/users' element={<Users />} />

            </Routes>
          </UserContext.Provider>
        </NewContext.Provider>
      </CharacterContext.Provider>
    </div>
  )
}

export default App
