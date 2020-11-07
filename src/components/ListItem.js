import React from 'react'

export default function ListItem(props) {

    const listStyle = {
        display: "flex",
        "flex-direction": "row",
        width: 500,
        height: 400,
        border: "solid 1px black"
    }
    
    const imageStyle = {
        width: 200, 
        height: 300
    };

    return (
        <div style={listStyle}>
            <div>
                <img style={imageStyle} alt="" src={props.image} />
            </div>
            <div style={{display: "flex", flexDirection: "column",}}>
                <div>{props.name}</div>
                <div>{props.status}</div>
            </div>
        </div>
    )
}
