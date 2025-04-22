import React, { useState } from 'react'

const HideShowPassword = () => {
    const[show,setShow]=useState(false);

    const btnHandler=()=>{
      
      setShow(!show)
    }
  return (
    <>
    <input type={show ? "text":"password"} placeholder='Enter Password' required/>
 
    
    <button onClick={btnHandler}>{show?"Hide":"Show"}</button>
     </>
  )
}

export default HideShowPassword