import Socials from '../components/Contact/Socials/Socials'
import Header from '../components/Home/Header/Header'
import AnimatedWrap from '../components/UI/AnimatedWrap'
import Frag from '../components/UI/Frag'
import Globe from '../components/UI/svg/Globe'

export default function Contact() {
  const directToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/gideon-akinduro-747511242/')
  }
  return (
    <section id='contact'>
      <Frag>
        <Header btnText={'Contact Me'} btnClick={directToLinkedIn} />
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
          <Socials />
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
          <div className='flex flex-col-reverse items-center md:justify-between md:gap-3 lg:flex-row'>
            <div className='flex flex-col text-center font-medium text-black-200 dark:text-white'>
              <a
                href='mailto:gideonakinduro38@gmail.com'
                className='text-xl hover:text-green md:text-4xl'
              >
                gideonakinduro38@gmail.com
              </a>
              <a
                href='tel:+2348145092994'
                className='my-7 text-xl hover:text-green md:text-4xl'
              >
                +2348145092994
              </a>
            </div>
            <div>
              <Globe />
            </div>
          </div>
        </AnimatedWrap>
      </Frag>
    </section>
  )
}
