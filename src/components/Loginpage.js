import React, { useState } from "react";

const Loginpage = () => {
  const [login, setlogin] = useState(false);
 const [classes,setclasses]=useState('')

  const Login = () => {
    setlogin(!login);
setclasses('show-model')
  };
  return (
    <>
{login ? (

 
<div className="btn btn-dark" onClick={Login}>
          logout
        </div>
      
       
      ) : (
      
        <div className="btn btn-dark" onClick={Login}>
          login
        </div>
      
      )}
      
{/*  */}
{login ?   
<div className={`modal ${login ? classes :''} `}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Hi ! user</h5>
        <button type="button" className={`btn-close`} data-bs-dismiss="modal" aria-label="Close" ></button >
      </div>
      <div className="modal-body">
        <p> Are you login with me ? </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
         Login()
        }}>Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>{
         Login()
        }}>Agree</button>
      </div>
    </div>
  </div>
</div>
 :''}
{/*  */}
      
    </>


  );
};

export default Loginpage;
