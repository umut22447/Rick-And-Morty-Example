export const getCharacters = () => {
    return fetch(`https://rickandmortyapi.com/api/character/`)
        .then(response => response.json()).then(res => res.results);
}