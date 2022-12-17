import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Line } from '../../assets/line.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import useWindowsDimensions from '../../hooks/useWindowDimensions'

export default function Navbar() {
  // navitems state
  const [navCollapsed, setNavCollapsed] = useState(true)
  // get width
  const { width } = useWindowsDimensions()
  return (
    <nav className='flex justify-between flex-wrap'>
      {/* logo */}
      <a href='#'>
        <span className='font-bold lg:text-4xl text-base text-black-200 dark:text-white'>
          JaeKralj
        </span>
        {width > 768 && <Line className='stroke-black-200 dark:stroke-white' />}
      </a>
      {/* toggler */}
      {width < 640 && (
        <MenuIcon
          onClick={() => {
            setNavCollapsed(prev => !prev)
          }}
        />
      )}
      {/* nav items */}
      <div
        className={`${
          navCollapsed ? 'hidden' : 'block basis-full grow'
        } md:block`}
      >
        <ul
          className={`flex flex-col gap-3 md:flex-row lg:gap-7 w-full mt-7 md:mt-0`}
        >
          <Link to='/'>
            <li className='p-2 lg:text-[1.125rem] text-base font-semibold lg:font-normal hover:border-b hover:border-b-green text-black-200 dark:text-white'>
              Home
            </li>
          </Link>
          <Link to='/'>
            <li className='p-2 lg:text-[1.125rem] text-base font-semibold lg:font-normal hover:border-b hover:border-b-green text-black-200 dark:text-white'>
              Contact
            </li>
          </Link>
          <Link to='/'>
            <li className='p-2 lg:text-[1.125rem] text-base font-semibold lg:font-normal hover:border-b hover:border-b-green text-black-200 dark:text-white'>
              Project
            </li>
          </Link>
          <Link to='/'>
            <li className='p-2 lg:text-[1.125rem] text-base font-semibold lg:font-normal text-white dark:text-black-200 bg-green w-20 mr-auto'>
              Resume
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}