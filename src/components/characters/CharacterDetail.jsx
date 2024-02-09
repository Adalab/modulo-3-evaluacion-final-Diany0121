import { useParams } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import "../../scss/App.scss"


function CharacterDetail({character}) {

  const { urlId } = useParams();

  const cardDetail = character.find((character) => character.id === urlId);

  return (
    <section>
      <CharacterCard character={cardDetail}/>
    </section>
  )
}

export default CharacterDetail

