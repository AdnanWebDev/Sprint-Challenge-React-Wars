import React, { useState } from 'react';
import './App.css';
import DataPull from './components/data'
import CharacterCard from './components/CharacterCard'
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [peopleList, setPeopleList] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Cards = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <DataPull data={setPeopleList} />
      <Cards>
      {peopleList.map((item, index) => {
        return <CharacterCard
          key={index} 
          CharacterName={item.name}
          CharacterHeight={item.height}
          CharacterEyeColor={item.eye_color}
          CharacterGender={item.gender}
          />
      })}
      </Cards>
    </div>
  );
}

export default App;
