import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { globalCtx } from '../contexts/global-ctx'

export default function Project() {
  const { projects } = useContext(globalCtx)

  const paramId = useParams().projectId

  const matchedProject = projects.find(({ id }) => id === paramId)
  const { desc } = matchedProject
  return (
    <section className=' p-5 lg:px-20 lg:pt-7'>
      <p>{desc}</p>
    </section>
  )
}
