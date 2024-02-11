function FiltersSpecies({ handleFilterSpecies, filterSpecies }) {

    const handleSpecies = (ev) => {
        handleFilterSpecies(ev.target.value)
    }
  return (
    <>
      <label className="labelSpecies">Buscar por especie:</label>
      <select className="labelSpecies_select" onChange={handleSpecies}>
        <option value="human">Human</option>
        <option value="half-giant">Half-Giant</option>
        <option value="werewolf">Werewolf</option>
        <option value="ghost">Ghost</option>
      </select>
    </>
  );
}

export default FiltersSpecies;
