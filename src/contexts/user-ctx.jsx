import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'

import { app } from '../firebase.config'

export const userCtx = createContext()

export default function UserCtxProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const auth = getAuth(app)
    onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user)
      }
    })
  }, [])
  return (
    <userCtx.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </userCtx.Provider>
  )
}
