import { createContext, useContext, useState } from "react";


const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  const [color, setColor] = useState('lightTheme')

 
  return(
    <DarkContext.Provider value={{color, setColor}}>
      {children}
    </DarkContext.Provider>
  )
}

const useDarkContext = () => useContext(DarkContext)

export {DarkProvider, useDarkContext}