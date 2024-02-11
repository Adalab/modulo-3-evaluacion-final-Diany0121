function FilersGenere({ filterGenere, handleFilterGenere }) {
  const handleRadio = (ev) => {
    handleFilterGenere(ev.target.value);
  };

  return (
    <>
   
      <label className="labelGenere">Género</label>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={handleRadio}
          checked={filterGenere === "female"}
        />
        <label className="labelGenere_input" htmlFor="female">
          Mujer
        </label>

        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={handleRadio}
          checked={filterGenere === "male"}
        />
        <label className="labelGenere_input" htmlFor="male">
          Hombre
        </label>
      </div>
      </>
  );
}

export default FilersGenere;
