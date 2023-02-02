import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../components/UI/Button'
import Frag from '../components/UI/Frag'
import { globalCtx } from '../contexts/global-ctx'

export default function Project() {
  const { projects } = useContext(globalCtx)

  const paramId = useParams().projectId

  const matchedProject = projects.find(({ id }) => id === paramId)
  const {
    desc,
    pic,
    id,
    features,
    challenges,
    milestones,
    title,
    github,
    live,
  } = matchedProject
  console.log(matchedProject)
  return (
    <section id={`project${id}`} className='flex-1'>
      <Frag className='text-black-200 dark:text-white-100'>
        <img src={pic} className='w-full' />
        <div className='my-5'>
          <div>
            <h1 className='font-cormorant md:text-5xl text-2xl'>{title}</h1>
            <p className='text-sm md:text-xl my-2'>
              Tools: <span>tools</span>
            </p>
            <div>
              <h4 className='font-cormorant md:text-4xl text-xl'>Links</h4>
              <a href={github} className='mr-4'>
                <Button>Github</Button>
              </a>
              <a href={live}>
                <Button>Live</Button>
              </a>
            </div>
          </div>
          <h2 className='font-cormorant md:text-5xl text-2xl'>
            Project Description
          </h2>
          <p className='text-sm md:text-xl my-2'>{desc}</p>
        </div>
        <div className='my-5'>
          <h2 className='font-cormorant md:text-4xl text-xl'>Features</h2>
          <ul>
            {features.map(feature => (
              <li className='text-xs md:text-base'>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='font-cormorant md:text-4xl text-xl'>Challenges</h2>
          <p className='text-sm md:text-xl my-2'>{challenges}</p>
        </div>
        <div className='my-5'>
          <h2 className='font-cormorant md:text-4xl text-xl'>Milestones</h2>
          <p className='text-sm md:text-xl my-2'>{milestones}</p>
        </div>
      </Frag>
    </section>
  )
}
