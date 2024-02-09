const getDataApi = () => {
    return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then(response => response.json())
    .then((data)=> {
        //map para obtener los datos que hay en results de la API.
        const characters = data.map((eachCharacter) =>{
            return{
                id: eachCharacter.id,
                species: eachCharacter.species,
                image: eachCharacter.image,
                name: eachCharacter.name,
                house: eachCharacter.house,  
            }
        });
        return characters; //Este es mi nuevo objeto creado con los datos que me interesan. Lo tengo que retornar para que no se quede guardado en el fetch, de esta manera puedo utilizarlo ahora en App.

    });
};

export default getDataApi;