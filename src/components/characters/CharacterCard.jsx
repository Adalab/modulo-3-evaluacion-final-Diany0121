import "../../scss/App.scss"

function CharacterCard({character}) {
  return (
    <article className="card" id={character.id}>
      <img src={character.image !== ''
            ? character.image
            : 'https://2.bp.blogspot.com/-37Wnip-7rfs/WENaCVpciSI/AAAAAAAHdHc/QVVEZ_PGZegDHv_Pm8n_EiTKLVPCc-I6wCLcB/s1600/harry-potter-free-printable-invitations-050.jpg'} alt="Foto" className="card_image"/>
      <h4 className="card_text">{character.name}</h4>
      <p className="card_text">{character.species}</p>
    </article>
  )
}

export default CharacterCard