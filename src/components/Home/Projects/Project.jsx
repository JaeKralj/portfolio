import { Link } from 'react-router-dom'
import AnimatedWrap from '../../UI/AnimatedWrap'

import Button from '../../UI/Button'

export default function Project({ imgUrl, description, title, id }) {
  return (
    <AnimatedWrap
      scrollVariant={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'linear',
            type: 'spring',
            bounce: 0.3,
            stiffness: '70',
          },
        },
      }}
      className='flex odd:flex-row-reverse justify-between items-center py-5 flex-wrap text-black dark:text-white my-5'
    >
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
    </AnimatedWrap>
  )
}
