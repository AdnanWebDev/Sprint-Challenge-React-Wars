import React, { useEffect } from 'react';
import axios from 'axios';

export default function DataPull(props){
    useEffect(()=>{
        axios
        .get(`https://swapi.co/api/people/?format=json`)
        .then(response => {props.data(response.data.results)})
        .catch(error => console.log('Unexpected Error: ', error)) 
    },[])


    return(
        <div></div>
    )
}


