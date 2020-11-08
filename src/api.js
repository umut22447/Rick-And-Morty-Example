export const getCharacters = () => {
    return fetch(`https://rickandmortyapi.com/api/character/`)
        .then(response => response.json()).then(res => res.results);
}

export const getCharacterById = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json()).then(res => res);
}