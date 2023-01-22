import { createContext, useState } from 'react'

export const globalCtx = createContext()

export default function GlobalContextProvider({ children }) {
  const [projects, setProjects] = useState([])
 
  return (
    <globalCtx.Provider value={{ projects, setProjects }}>
      {children}
    </globalCtx.Provider>
  )
}
