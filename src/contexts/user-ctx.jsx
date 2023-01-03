import { createContext, useState } from 'react'

export const userCtx = createContext()

export default function UserCtxProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <userCtx.Provider
      value={{
        currentUser,
        loggedIn,
        setLoggedIn,
        setCurrentUser,
      }}
    >
      {children}
    </userCtx.Provider>
  )
}
