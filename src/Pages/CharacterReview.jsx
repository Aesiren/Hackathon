import "../App.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateCharacter from './CreateCharacter';
import ClassSelection from './ClassSelection';
import HeritageSelection from './HeritageSelection';
import AssignTraits from './AssignTraits';
import Info from './Info';
import { CharacterContext } from "../Context/CharacterContext";
import { NewContext } from "../Context/NewContext";
import { useState, useEffect, useContext } from 'react'
import Loading from './Loading'

function CharacterReview() {
  const { newChar } = useContext(NewContext);
  return (
    <div className="mainpage">



      <h1>Character Display</h1>
      Name: {newChar.name} <br />
      Pronouns: {newChar.pronouns} <br />
      Ancestry: {newChar.ancestry.name} <br />
      Community: {newChar.community.name} <br />
      Class: {newChar.class.name} <br />
      Sub-Class: {newChar.subclass.subclassName} <br />

      Level: {newChar.level} <br />
      Evasion: {newChar.evasion}
      Armor: {newChar.armor}
      Agility: {newChar.agility}
      Strength: {newChar.strength}
      Finesse: {newChar.finesse}
      Instinct: {newChar.instinct}
      Presence: {newChar.presence}
      Knowledge: {newChar.knowledge}

      Background: {newChar.background.map((back) => {
        return { back }
      })}


    </div>
  )
}

export default CharacterReview