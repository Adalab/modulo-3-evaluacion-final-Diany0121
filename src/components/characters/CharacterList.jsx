import CharacterCard from "./CharacterCard"
import "../../scss/App.scss"
import { Link } from 'react-router-dom';
import CharacterDetail from "./CharacterDetail";


function CharacterList({characters}) {

  const renderUserList = characters.map((character) =>{
    return (
      <li key={character.id} className="cardLi">
        <CharacterCard character={character} />
      </li>
    )
  })

  const renderUser = characters.map((character) =>{
    return (
      <li key={character.id}>
        <Link to={`/details/${character.id}`}>
          {' '}
          <CharacterDetail character={character} />
        </Link>
      </li>
    )
  })
  
  return (
    <>
    <section>
      <ul className="cardUl">{renderUserList}</ul>
    </section>
  </>
  )
}

export default CharacterList