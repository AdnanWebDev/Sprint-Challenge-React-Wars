import React from 'react'

export default function CharacterCard(props) {

    return (

        <div className="character-Cards">

            <div className="character-card">
                Character name is {props.CharacterName}
            </div>
            
        </div>
    )
}