import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem(props) {

    const listStyle = {
        display: "flex",
        flexDirection: "row",
        width: 500,
        height: 400,
        border: "solid 1px black"
    }

    const imageStyle = {
        width: 200,
        height: 300
    };

    return (
        <Link to={`/character/${props.id}`}>
            <div style={listStyle}>
                <div>
                    <img style={imageStyle} alt="" src={props.image} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", }}>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </div>
            </div>
        </Link>

    )
}
