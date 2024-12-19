import React, { useState } from "react";

const Toggleusestate = () => {
  // const [Value, setValue] = useState(false);
  const [Value, setValue] = useState(false);

  // const ChangeState = () => {
  //   if (Value) {
  //     setValue(true);
  //     console.log(Value);
  //   }
    // setValue(true);  THIS BLOCK lOGIC IS NOT WORK 
  // };
  const ChangeState = () => {
   
     setValue(!Value);  
   };
  const Login=()=>{

   console.log('login');
  }
  
  
   
  return (
   <>
    <div>
      {/* <button className="btn-primary" onClick={()=>{setValue(!Value)
       console.log(!Value);
       
      }}> */}
      <button className=" btn btn-primary" onClick={ChangeState}>
        Toggle
      </button>
      {Value && <Toggle />}
    </div>
    <button className=" btn btn-primary my-3" onClick={Login}>
    Login
  </button>
  </>
  );
};
const Toggle = () => {
  return (
    <>
     <div className="sideBar   ">
      <div className="sidebarAlign ">
       <span>Galllery</span>
       <span>Grogery</span>
       <span>Blog</span>
      </div>
     </div>
    </>
  );
};

export default Toggleusestate;
