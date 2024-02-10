import CharacterCard from "./CharacterCard";
import "../../scss/App.scss";
import { Link } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function CharacterList({ characters }) {
  const renderUserList = characters.map((character) => {
    return (
      <li key={character.id} className="cardLi">
        <Link className="cardLi_link" to={`/detail/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });

  return (
    <>
      <section>
        <ul className="cardUl">{renderUserList}</ul>
      </section>
    </>
  );
}

export default CharacterList;
