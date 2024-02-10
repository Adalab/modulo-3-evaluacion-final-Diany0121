import React from "react";

function FiltersHouse({handleFilterHouse}) {
  return (
    <>
      <label className="labelHouse">Buscar por casa:</label>
      <select className="labelHouse_select" onChange={(ev) => {handleFilterHouse(ev.target.value)}}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuf</option>
      </select>
    </>
  );
}

export default FiltersHouse;
 