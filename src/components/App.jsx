import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// hoja de estilos
import "../scss/App.scss";
// compomentes
import Header from "./Header";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import Footer from "./Footer";
// api
import getDataApi from "../services/api";
import CharacterDetail from "./characters/CharacterDetail";

function App() {
  const [characters, setCharacter] = useState([]); // variable de estado para la api
  const [filterName, setFilterName] = useState(""); // variable de estado para filtrar por nombre
  const [filterGenere, setFilterGenere] = useState(""); // variable de estado para filtrar genero
  const [filterHouse, setFilterHouse] = useState("Gryffindor"); // variable de estado para filtrar por casa
  const [filterSpecies, setFilterSpecies] = useState ("human"); // variable de estado para filtrar por especies

  useEffect(() => {
    getDataApi().then((characters) => {
      setCharacter(characters);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterName(value);
  };

  const handleFilterHouse = (value) => {
    setFilterHouse(value);
  };

  const handleFilterGenere = (value) => {
    setFilterGenere(value);
  };

  const handleFilterSpecies = (value) =>{
    setFilterSpecies(value);
  }

  const handleReset = (ev) => {
    ev.preventDefault();
    setFilterName('');
    setFilterHouse("Gryffindor");
    setFilterGenere('');
    setFilterSpecies("human");

  }

  const filterUser = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLocaleLowerCase()))
    .filter((character) => character.house === filterHouse)
    .filter((character) => {
      if (filterGenere === "female") {
        return character.gender === "female";
      } else if (filterGenere === "male") {
        return character.gender === "male";
      } else {
        return true;
      }
    })
    .filter((character) => character.species === filterSpecies)

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                filterName={filterName}
                handleFilterName={handleFilterName}
                handleFilterHouse={handleFilterHouse}
                handleFilterGenere={handleFilterGenere}
                filterGenere={filterGenere}
                handleFilterSpecies={handleFilterSpecies}
                filterSpecies={filterSpecies}
                handleReset={handleReset}
              />
              <CharacterList characters={filterUser} filterName={filterName}/>
            </>
          }
        />

        <Route
          path="/detail/:idUser"
          element={<CharacterDetail character={characters} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
