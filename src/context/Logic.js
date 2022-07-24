import React from 'react';
import MyContext from './MyContext'

function Logic({ children }) {
  

  const obj = {

  }

  return (
    <MyContext.Provider value = { obj }>
      { children }
    </MyContext.Provider>
  )
}

export default Logic;
