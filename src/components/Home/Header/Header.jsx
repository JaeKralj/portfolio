import profilePic from '../../../assets/akinduro_gideon_frontend_developer-nobg.png'
import AnimatedWrap from '../../UI/AnimatedWrap'
import Button from '../../UI/Button'
import Frag from '../../UI/Frag'

export default function Header({ btnText, btnClick }) {
  return (
    <Frag>
      <section className='mt-7 flex flex-col items-center justify-between pt-5 lg:flex-row'>
        <div className='basis-1/2'>
          <AnimatedWrap
            scrollVariant={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.76,
                  ease: 'easeIn',
                  type: 'spring',
                  bounce: 0.7,
                  stiffness: '60',
                },
              },
            }}
          >
            <img
              src={profilePic}
              alt='Akinduro Gideon Jaekralj frontent developer'
              className='scale-75 rounded-full lg:scale-100'
            />
          </AnimatedWrap>
        </div>
        <div className='basis-2/5 text-center lg:text-left'>
          <AnimatedWrap
            scrollVariant={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.65,
                  ease: 'linear',
                  type: 'spring',
                  bounce: 0.3,
                  stiffness: '70',
                },
              },
            }}
          >
            <h1 className='font-cormorant text-[2.5rem] font-bold text-black dark:text-white lg:text-[4rem]'>
              Hello, I'm Oluwajuwon
            </h1>
          </AnimatedWrap>
          <AnimatedWrap
            scrollVariant={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.65,
                  ease: 'linear',
                  type: 'spring',
                  bounce: 0.3,
                  stiffness: '70',
                },
              },
            }}
          >
            <p className='mt-4 mb-6 text-justify text-black-100 dark:text-white-100 lg:mt-8 lg:mb-9'>
              I'm a self-taught programmer and frontend developer. I am always
              eager to learn new things and test them out. During development, I
              write clean, re-usable, and well-optimized code to ensure
              interactivity and accessibilty for users and quality feedback from
              the team.
            </p>
          </AnimatedWrap>
          <AnimatedWrap
            scrollVariant={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.65,
                  ease: 'linear',
                  type: 'spring',
                  bounce: 0.3,
                  stiffness: '70',
                },
              },
            }}
          >
            <Button handleOnclick={btnClick}>{btnText}</Button>
          </AnimatedWrap>
        </div>
      </section>
    </Frag>
  )
}
