import React, { useState } from 'react';
import TheamContext from './TheamContext';

export default function TheamContextProvider({children}) {

    const [theam,setTheam]=useState(false);

  return (
    <TheamContext.Provider value={{theam,setTheam}}>
         {children}
    </TheamContext.Provider>
  )
}
