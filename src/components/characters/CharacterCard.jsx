import "../../scss/App.scss"

function CharacterCard({character}) {
  return (
    <article className="card" id={character.id}>
      <img src={character.image !== ''
            ? character.image
            : 'https://images.alphacoders.com/556/556471.jpg'} alt="Foto" className="card_image"/>
      <h4 className="card_text">{character.name}</h4>
      <p className="card_text">{character.species}</p>
    </article>
  )
}

export default CharacterCard