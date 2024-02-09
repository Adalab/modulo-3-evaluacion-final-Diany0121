import FiltersHouse from "./FiltersHouse"
import FiltersName from "./FiltersName"


function Filters({filterName, handleFilterName, handleFilterHouse}) {
  return (
    <form>
      <FiltersName filterName={filterName} handleFilterName={handleFilterName}/>
      <FiltersHouse handleFilterHouse={handleFilterHouse}/>
    </form>
  )
}

export default Filters