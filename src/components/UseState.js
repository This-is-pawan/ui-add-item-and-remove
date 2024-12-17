import React from "react";
import { useState } from "react";
import Data from "./Data";
const UseState = () => {

  const [state, setstate] = useState(Data)
  const remove=(id)=>{
console.log(id);
 const newPerson=state.filter((person)=> person.id!==id)
setstate(newPerson)
console.log(newPerson);

  }
  
  return (
    <div>
      {state.map((item) => {
        const { id, Name } = item;
        return (
          <div className="cont" key={id}>
            <span>{Name}</span>
            <button type="button" onClick={()=>{remove(id)}} className="btn btn-dark">remove</button>
          </div>
        );
      })}
      <br/>
      <button className="btn btn-danger   mx-3" onClick={()=>{
        setstate([])
       
      }} >ClearAll</button>
      <button className="btn btn-light   mx-3" onClick={()=>{
        setstate(Data)
      }} >Refesh</button>
    </div>
  );
};

export default UseState;
