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
import CharacterDetail from "./characters/CharacterDetail";

function App() {
  const [characters, setCharacter] = useState([]); // variable de estado para la api
  const [filterName, setFilterName] = useState(""); // variable de estado para filtar por nombre
  const [filterGenere, setFilterGenere] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

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

  const filterUser = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLocaleLowerCase())
    )
    .filter((character) => character.house === filterHouse)
    .filter((character) => {
      if (filterGenere === "female") {
        return character.gender === "female";
      } else if (filterGenere === "male") {
        return character.gender === "male";
      } else {
        return true;
      }
    });

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
              />
              <CharacterList characters={filterUser} />
            </>
          }
        />

        <Route
          path="/detail/:idUser"
          element={<CharacterDetail character={characters} />}
        />
      </Routes>
    </>
  );
}

export default App;
