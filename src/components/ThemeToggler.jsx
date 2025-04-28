import React, { useContext } from 'react';
import TheamContext from '../context/TheamContext';

function ThemeToggler() {
    const {theam,setTheam}=useContext(TheamContext);

const HandelClick=()=>{
    setTheam(!theam);
}
  return (
    <>
        <button onClick={HandelClick}>{theam ? 'Light' :' Dark'}</button>
    </>
  )
}

export default ThemeToggler