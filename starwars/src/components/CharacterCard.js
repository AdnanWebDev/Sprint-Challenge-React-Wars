import React from 'react'
import styled from 'styled-components'

export default function CharacterCard(props) {
    const Card=styled.div`
    background:lightgrey;
    margin: 10px
    padding: 5px;
    border-radius: 10px;
    border: 2px black solid;
    `;


    return (

        <Card className="character-card">
            <p>{props.CharacterName}</p>
            <p>Height: {props.CharacterHeight}</p>
            <p>Eye Color: {props.CharacterEyeColor}</p>
            <p>Gender: {props.CharacterGender}</p>
        </Card>

    )
}