import React, { Children, useState, createContext } from 'react'


const AppProvider = createContext();

const ContextApi = ({ children }) => {
    const [nam,setNam]=useState("anara")

  return (
    <AppProvider.Provider value={{ nam, setNam }}>
      {children}
    </AppProvider.Provider>
  )
}

export default ContextApi

export {AppProvider};
