import { collection, getDocs } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'

import { globalCtx } from '../contexts/global-ctx'
import { db } from '../firebase.config'

export default function useProjects() {
  const { projects, setProjects } = useContext(globalCtx)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  // fetch PROJECTS
  async function fecthProjects() {
    if (projects.length > 0) return
    setLoading(true)
    try {
      const querySnapshots = await getDocs(collection(db, 'projects'))
      setLoading(false)
      if (querySnapshots.size <= 0) {
        throw new Error('There was a problem fetching projects')
      }
      querySnapshots.forEach(doc => {
        setProjects(prev => [...prev, { ...doc.data(), id: doc.id }])
      })
    } catch (error) {
      setErr(error.message)
      setLoading(false)
      console.log(loading)
    }
  }
  useEffect(() => {
    fecthProjects()
  }, [])

  return {
    projects,
    err,
    loading,
    fecthProjects,
  }
}
