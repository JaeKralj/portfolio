import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

import SocialsSvg from '../../UI/svg/SocialsSvg'

export default function Socials() {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:mt-28 py-3'>
      <SocialsSvg />
      <div className='flex lg:flex-col -mt-12 lg:mt-0 gap-4'>
        <div>
          <span className='flex items-center gap-4 text-xl lg:text-[3.5rem] font-medium mb-4 text-black dark:text-white'>
            {' '}
            <FaTwitter /> <span>Twitter</span>
          </span>
          <span className='flex items-center gap-4 text-xl lg:text-[3.5rem] font-medium mb-4 text-black dark:text-white'>
            {' '}
            <FaWhatsapp /> <span>Whatsapp</span>
          </span>
        </div>
        <div>
          <span className='flex items-center gap-4 text-xl lg:text-[3.5rem] font-medium mb-4 text-black dark:text-white'>
            {' '}
            <FaGithub /> <span>Github</span>
          </span>
          <span className='flex items-center gap-4 text-xl lg:text-[3.5rem] font-medium mb-4 text-black dark:text-white'>
            {' '}
            <FaLinkedin /> <span>LinkedIn</span>
          </span>
        </div>
      </div>
    </div>
  )
}
