


function FiltersName({filterName, handleFilterName}) {


  return (
    <>
      <label className="inputName">Buscar por nombre:</label>
      <input type="text" name="name" id="name" placeholder="Ej: Harry "
      value={filterName} onChange={(ev) => handleFilterName(ev.target.value)}
      />
    </>
  );
}

export default FiltersName;
