

function FilersGenere({filterGenere, handleFilterGenere}) {
  return (
    <fieldset>
    <label className="labelName">Género</label>
    <input type="radio" 
    id="female"
    value="female"
    checked={filterGenere === 'female'}
    onChange={(ev) =>
      handleFilterGenere(ev.target.value)
    }
    />
    <label htmlFor="female">Mujer</label>

    <input type="radio" 
    id="male"
    value="male"
    checked={filterGenere === 'male'}
    onChange={(ev) =>
    handleFilterGenere(ev.target.value)
    }
    />
    <label htmlFor="male">Hombre</label>




    </fieldset>
  )
}

export default FilersGenere