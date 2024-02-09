import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// hoja de estilos
import "../scss/App.scss";
// compomentes
import Header from "./Header";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
// api
import getDataApi from "../services/api";


function App() {
  const [characters, setCharacter] = useState([]); // variable de estado para la api
  const [filterName, setFilterName] = useState(""); // variable de estado para filtar por nombre
  const [filterHouse, setFilterHouse] = useState ('Gryffindor');

  useEffect(() => {
    getDataApi().then((characters) => {
      setCharacter(characters);
    });
  }, []);

  const handleFilterName = (value) =>{
    setFilterName(value)
  }

  const handleFilterHouse = (value) => {
    setFilterHouse(value)
  }


  const filterUser = characters.filter((character)=> character.name.toLowerCase().includes(filterName))
  .filter((character) => character.house === filterHouse)

  

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters filterName={filterName} handleFilterName={handleFilterName} handleFilterHouse={handleFilterHouse}/>
              <CharacterList  characters={filterUser}/>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
