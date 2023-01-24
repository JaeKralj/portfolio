import Socials from '../components/Contact/Socials/Socials'
import Header from '../components/Home/Header/Header'
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
        <Socials />
        <div className='flex flex-col-reverse lg:flex-row items-center md:justify-between md:gap-3'>
          <div className='flex flex-col text-center font-medium text-black-200 dark:text-white'>
            <a
              href='mailto:gideonakinduro38@gmail.com'
              className='text-xl md:text-4xl hover:text-green'
            >
              gideonakinduro38@gmail.com
            </a>
            <a
              href='tel:+2348145092994'
              className='text-xl md:text-4xl my-7 hover:text-green'
            >
              +2348145092994
            </a>
          </div>
          <div>
            <Globe />
          </div>
        </div>
      </Frag>
    </section>
  )
}
