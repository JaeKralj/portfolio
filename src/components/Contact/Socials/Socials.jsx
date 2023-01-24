import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

import SocialsSvg from '../../UI/svg/SocialsSvg'

export default function Socials() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center lg:mt-28 py-3'>
      <SocialsSvg />
      <div className='flex md:flex-col -mt-12 md:mt-0 gap-4'>
        <div>
          <a
            href='https://twitter.com/JaeKralj'
            target='_blank'
            rel='noopener noreferrer'
            className='group'
          >
            <span className='flex items-center gap-4 text-xl md:text-[3.5rem] font-medium mb-4 text-black dark:text-white group-hover:text-green'>
              {' '}
              <FaTwitter /> <span>Twitter</span>
            </span>
          </a>
          <a href='https://wa.me/+2348145092994' className='group'>
            <span className='flex items-center gap-4 text-xl md:text-[3.5rem] font-medium mb-4 text-black dark:text-white group-hover:text-green'>
              {' '}
              <FaWhatsapp /> <span>Whatsapp</span>
            </span>
          </a>
        </div>
        <div>
          <a href='https://github.com/JaeKralj' className='group'>
            <span className='flex items-center gap-4 text-xl md:text-[3.5rem] font-medium mb-4 text-black dark:text-white group-hover:text-green'>
              {' '}
              <FaGithub /> <span>Github</span>
            </span>
          </a>
          <a
            href='https://www.linkedin.com/in/gideon-akinduro-747511242/'
            className='group'
          >
            <span className='flex items-center gap-4 text-xl md:text-[3.5rem] font-medium mb-4 text-black dark:text-white group-hover:text-green'>
              {' '}
              <FaLinkedin /> <span>LinkedIn</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
