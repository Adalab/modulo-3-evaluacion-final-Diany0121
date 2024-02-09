import CharacterCard from "./CharacterCard"
import "../../scss/App.scss"


function CharacterList({characters}) {

  const renderUserList = characters.map((character) =>{
    return (
      <li key={character.id} className="cardLi">
        <CharacterCard character={character} />
      </li>
    )
  })
  
  return (
    <section>
      <ul className="cardUl">{renderUserList}</ul>
    </section>
  )
}

export default CharacterList