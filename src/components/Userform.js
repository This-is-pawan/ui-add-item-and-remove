import React, { useState } from "react";
import Data from "../components/Data";

const Userform = () => {
  const [User, setUser] = useState(Data); 
  const [newUser, setNewUser] = useState(''); 


 
  const remove = (id) => {
    setUser(User.filter((person) => person.id !== id));
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!newUser) return; 

    const fakeId = Date.now();
  
    
    const newUserObject = { id: fakeId, Name: newUser };

    setUser([...User, newUserObject]); 
    setNewUser(""); 
  };

  return (
    <>
      <h1>User Form</h1>

      <div className="main">
        <form onSubmit={addUser}>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>

      <div className="align">
        {User.map((item) => {
          const { id, Name } = item;
          return (
            <div key={id}>
              <h6 style={{ textAlign: "center", paddingTop: "1rem" }}>{Name}</h6>
              <div
                className="btn btn-primary p-1"
                onClick={() => remove(id)}
              >
                Remove
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Userform;
