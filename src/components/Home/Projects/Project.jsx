import { Link } from 'react-router-dom'

import Button from '../../UI/Button'

export default function Project({ imgUrl, description, title, id }) {
  return (
    <div className='flex odd:flex-row-reverse justify-evenly items-center py-5 flex-wrap'>
      <div className='lg:basis-2/5'>
        <img src={imgUrl} alt={title} className='w-full' loading='lazy' />
      </div>
      <div className='lg:basis-2/5'>
        <div className='font-cormorant font-bold mt-4'>
          <h3 className='lg:text-[2.5rem] text-2xl my-2'>{title}</h3>
          <p className='lg:text-2xl text-base'>
            Tools: <span></span>
          </p>
        </div>
        <p className='lg:text-base text-sm my-5'>{description}</p>
        <Link to={`/projects/${id}`}>
          <Button className='font-bold lg:text-lg text-base'>
            View Details
          </Button>
        </Link>
      </div>
    </div>
  )
}
