import React from 'react'
import { useState, createContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({children}) => {

  const [ user, setUser ] = useState([])

  const UserInfo = (datos) => {
    setUser(datos)
  }
  console.log(user)
  
  return (
    <UserContext.Provider value={{
      user,
      UserInfo
    }}>

      {children}

    </UserContext.Provider>
  )
}

export default UserContext