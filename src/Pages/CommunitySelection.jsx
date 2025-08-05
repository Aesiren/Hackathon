import { useState, useEffect, useContext } from 'react'
import { CharacterContext } from "../Context/CharacterContext";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NewContext } from "../Context/NewContext";
import Loading from './Loading'

function CommunitySelection() {
  const [community, setCommunity] = useState([]);
  const [selected, setSelected] = useState({});
  const { newChar, setNewChar } = useContext(NewContext);


  useEffect(() => {
    fetch('http://localhost:3001/community')
      .then(res => res.json())
      .then(data => setCommunity(data.community))


  }, [])

  const onSelect = (item) => {
    setSelected(item);
  }

  function SaveSelection(selected) {
    setNewChar({ ...newChar, community: selected });
  }

  if (community.length < 1) {
    return (<div className="mainpage"><Loading /></div>)
  }
  else {
    return (
      <>
        <div className="mainPage">
          <div className="title">
            <h1>Community Selection</h1>
            Current Selection: {selected.name}<br />
            <button onClick={() => { SaveSelection(selected) }}>Save</button>
            <Link to="/new"><button>Back</button></Link>
          </div>
          {community.map((comm) => {
            return <CommunityCard community={comm} handleClick={onSelect} />
          })}

        </div>

      </>
    )
  }
}

function CommunityCard({ community, handleClick }) {

  return (
    <div className="card" onClick={() => { handleClick(community) }}>
      <h2>{community.name}</h2>
      <h2>{community.description}</h2>
      <h2>{community.feature}</h2>

    </div>
  )

}

export default CommunitySelection