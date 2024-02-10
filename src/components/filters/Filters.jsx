import FiltersHouse from "./FiltersHouse"
import FiltersName from "./FiltersName"
import FiltersGenere from "./FiltersGenere"



function Filters({filterName, handleFilterName, handleFilterHouse, filterGenere, handleFilterGenere}) {
  return (
    <form>
      <FiltersName filterName={filterName} handleFilterName={handleFilterName}/>
      <FiltersHouse handleFilterHouse={handleFilterHouse}/>
      <FiltersGenere filterGenere={filterGenere} handleFilterGenere={handleFilterGenere}/>
    </form>
  )
}

export default Filters