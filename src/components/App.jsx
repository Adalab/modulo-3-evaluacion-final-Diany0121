import { Route, Routes } from "react-router-dom"
import "../scss/App.scss"
import Header from "./Header"
import CharacterList from './characters/CharacterList'
import { useEffect, useState } from "react"
import getDataApi from '../services/api'


function App() {


  const [characters, setCharacter] = useState([]);

  useEffect (() => {
    getDataApi().then((characters) => {
      setCharacter(characters);
    });
  }, []);

  return (
  <>
  <Header />

  <Routes>
    <Route path="/" element={<CharacterList characters={characters}/>} /> 


  </Routes>




  </>
  )

}

export default App
