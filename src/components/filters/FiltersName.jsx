


function FiltersName({filterName, handleFilterName}) {

  const handleIntro = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  };


  return (
    <>
      <label className="labelName">Buscar por nombre:</label>
      <input className="labelName_input" type="text" name="name" id="name" placeholder="Ej: Harry "
      value={filterName} onChange={(ev) => handleFilterName(ev.target.value) }
      onKeyDown={handleIntro}
      />
    </>
  );
}

export default FiltersName;
