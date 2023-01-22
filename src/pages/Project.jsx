import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import Frag from '../components/UI/Frag'
import { globalCtx } from '../contexts/global-ctx'

export default function Project() {
  const { projects } = useContext(globalCtx)

  const paramId = useParams().projectId

  const matchedProject = projects.find(({ id }) => id === paramId)
  const { desc, pic, id } = matchedProject
  return (
    <section id={`project${id}`}>
      <Frag></Frag>
      <img src={pic} />
      <p>{desc}</p>
    </section>
  )
}
