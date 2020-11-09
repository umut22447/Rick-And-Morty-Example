import React from 'react'
import ListItem from './ListItem'
import {useList} from '../contexts/ListContext'

export default function RickAndMortyList() {

    const {characterList} = useList();

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {characterList.map( (character, index) => {
                return <ListItem name={character.name} image={character.image} status={character.status} id={character.id} index={index} />
            })}
        </div>
    )
}