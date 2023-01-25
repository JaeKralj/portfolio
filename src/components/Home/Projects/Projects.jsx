import useProjects from '../../../hooks/useProjects'
import AnimatedWrap from '../../UI/AnimatedWrap'
import Button from '../../UI/Button'
import Project from './Project'
import Skeleton from './Skeleton'

export default function Projects() {
  // get projects
  const { err, loading, projects, fecthProjects } = useProjects()

  return (
    <section className=' my-7 p-5 lg:my-9' id='projects'>
      <AnimatedWrap
        scrollVariant={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.75,
              ease: 'linear',
              type: 'spring',
              bounce: 0.3,
              stiffness: '70',
            },
          },
        }}
      >
        <h2 className='text-center font-cormorant text-[2rem] font-bold text-black dark:text-white lg:text-[4rem]'>
          Projects Overview
        </h2>
        {loading
          ? [0, 1, 2, 3].map(i => <Skeleton key={i} />)
          : projects.map(project => (
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
              >
                <Project
                  key={project?.id}
                  title={project?.title}
                  description={project?.desc}
                  imgUrl={project?.pic}
                  id={project?.id}
                />
              </AnimatedWrap>
            ))}
        {err && !loading && projects.length <= 0 && (
          <div className='flex flex-col items-center justify-center'>
            <p className='text-black-200 dark:text-white'>{err}</p>
            <Button handleOnclick={fecthProjects}>Try again</Button>
          </div>
        )}
      </AnimatedWrap>
    </section>
  )
}
