import { useParams } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import "../../scss/App.scss"


function CharacterDetail({character}) {

  const { idUser } = useParams();

  const cardDetail = character.find((character) => character.id === idUser) ;


  return (
    <section>
      <CharacterCard character={cardDetail} />
      
    </section>
  )
}

export default CharacterDetail

