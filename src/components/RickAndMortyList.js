import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'
import {getCharacters} from '../api'

export default function RickAndMortyList() {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        getCharacters().then(setCharacterList);
    }, [characterList])

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {characterList.map( character => {
                return <ListItem name={character.name} image={character.image} status={character.status} />
            })}
        </div>
    )
}