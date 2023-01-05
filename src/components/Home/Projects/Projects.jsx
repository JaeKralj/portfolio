import { collection, getDocs } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'

import { globalCtx } from '../../../contexts/global-ctx'
import { db } from '../../../firebase.config'
import Project from './Project'
import Skeleton from './Skeleton'

export default function Projects() {
  const { projects, setProjects } = useContext(globalCtx)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    async function fecthProjects() {
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
        alert(error)
        console.log(error)
        setLoading(false)
        console.log(loading)
      }
    }
    fecthProjects()
  }, [])
  // const uniqueProjects = [new Map(projects.map(i => [i.id, ...i]))]
  // console.log(uniqueProjects)
  return (
    <section className=' my-7 lg:my-9'>
      <h2 className='text-center font-cormorant font-bold lg:text-[4rem] text-[2rem] text-black dark:text-white'>
        Projects Overview
      </h2>
      {loading
        ? [0, 1, 2, 3].map(() => <Skeleton />)
        : projects.map(({ title, desc, id, pic }) => (
            <Project
              key={Math.random()}
              title={title}
              description={desc}
              imgUrl={pic}
              id={id}
            />
          ))}
    </section>
  )
}
