import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterById } from '../api'

export default function CharacterDetailsPage() {

    const { id } = useParams();
    const [characterDetails, setCharacterDetails] = useState({});

    useEffect(() => {
        getCharacterById(id).then(setCharacterDetails);
    }, [id]);

    return (
        <div>
            <img src={characterDetails.image} alt=""/>
            <br />
            ID = {characterDetails.id} , NAME = {characterDetails.name} , STATUS = {characterDetails.status} , GENDER = {characterDetails.gender}
        </div>
    )
}
