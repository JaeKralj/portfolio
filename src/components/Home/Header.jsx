import profilePic from '../../assets/akinduro_gideon_frontend_developer-nobg.png'
import Button from '../UI/Button'

export default function Header() {
  return (
    <header className='mt-7 pt-5 flex flex-col lg:flex-row items-center'>
      <div className='basis-1/2'>
        <img
          src={profilePic}
          alt='Akinduro Gideon Jaekralj frontent developer'
          className='rounded-full scale-75 lg:scale-100'
        />
      </div>
      <div className='basis-2/5 text-center lg:text-left'>
        <span className='font-bold lg:text-[4rem] text-[2.5rem] text-black dark:text-white font-cormorant'>
          Hello
        </span>
        <p className='text-justify text-black-100 dark:text-white-100 lg:mt-8 lg:mb-9 mt-4 mb-6'>
          I'm Gideon, a self-taught programmer and frontend developer. I am
          always eager to learn new things and test them out. During
          development, I write clean, re-usable, and well-optimized code to
          ensure interactivity and accessibilty for users and quality feedback
          from the team.
        </p>
        <Button>View My Projects</Button>
      </div>
    </header>
  )
}
