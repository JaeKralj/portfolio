import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from '../../../firebase.config'
import Project from './Project'

export default function Projects() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    async function fecthProjects() {
      const querySnapshots = await getDocs(collection(db, 'projects'))
      querySnapshots.forEach(doc => {
        setProjects(prev => [...prev, { ...doc.data(), id: doc.id }])
      })
    }
    fecthProjects()
  }, [])
  const uniqueProjects = [new Map(projects.map(i => [i.id, ...i]))]
  console.log(uniqueProjects)
  return (
    <section className=' my-7 lg:my-9'>
      <h2 className='text-center font-cormorant font-bold lg:text-[4rem] text-[2rem] text-black dark:text-white'>
        Projects Overview
      </h2>
      {projects.map(({ title, desc, id, pic }) => (
        <Project title={title} description={desc} imgUrl={pic} id={id} />
      ))}
    </section>
  )
}
