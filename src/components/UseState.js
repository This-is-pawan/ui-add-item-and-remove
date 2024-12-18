import React, { useEffect, useState } from 'react'
import axios from 'axios';
const url = 'https://official-joke-api.appspot.com/random_joke';

const UseState = () => {
  const[value,setValue]=useState([url])
  useEffect(()=>{
    const fetchJoke = async () => {
      try {
        const response = await axios.get(value);
        setValue([response.data])
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchJoke();

  },[value])

  return (
    <div>
      <h5 style={{color:'blue',letterSpacing:'2px'}}>2) 
      This is a  function-based component  hook useEffect </h5>
{value.map((item)=>{
  const{setup,punchline}=item
return(
  <div className="jokes" key={2}>

    <p>{setup}</p>
    <h5>{punchline}</h5>
   
  </div>
)
})}
    </div>
  )
}

export default UseState