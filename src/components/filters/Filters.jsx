import FiltersHouse from "./FiltersHouse"
import FiltersName from "./FiltersName"
import FiltersGenere from "./FiltersGenere"
import FiltersSpecies from "./FiltersSpecies"



function Filters({filterName, handleFilterName, handleFilterHouse, filterGenere, handleFilterGenere, handleFilterSpecies, filterSpecies}) {
  return (
    <form className="form">
      <FiltersName filterName={filterName} handleFilterName={handleFilterName}/>
      <FiltersHouse handleFilterHouse={handleFilterHouse}/>
      <FiltersGenere filterGenere={filterGenere} handleFilterGenere={handleFilterGenere}/>
      <FiltersSpecies handleFilterSpecies={handleFilterSpecies} filterSpecies={filterSpecies}/>
    </form>
  )
}

export default Filters