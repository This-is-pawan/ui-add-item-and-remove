import React from 'react'
import { useState } from 'react'
const FunctionComponent = () => {
 const [Amount, setAmount] = useState(0)
  const makeAmount=()=>{
setAmount(Amount+1)
  }
  const makeReset=()=>{
   setAmount(0)
  }
  return (
    <div>
     
     <p><b>2)</b>{` It has a Function-Based Component & Besides the Bootstrap`}</p>
     <h2>{`Amount: $${Amount}`}</h2>

<button type="button" className="btn btn-dark mx-2" onClick={makeAmount} >Amount</button>
   <button type="button" className="btn btn-dark mx-2" onClick={makeReset} > Reset </button>
    
    </div>
  )
}

export default FunctionComponent