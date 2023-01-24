import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { ReactComponent as Line } from '../../assets/line.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import useWindowsDimensions from '../../hooks/useWindowDimensions'
import Frag from './Frag'

export default function Navbar() {
  // navitems state
  const [navCollapsed, setNavCollapsed] = useState(true)
  // get width
  const { width } = useWindowsDimensions()

  // activestyle
  let activeStyle = {
    border: '2px solid #4DA100',
  }
  return (
    <header>
      <Frag>
        <nav className='flex justify-between flex-wrap p-3'>
          {/* logo */}
          <Link to={'/'}>
            <span className='font-bold lg:text-4xl text-base text-black-200 dark:text-white'>
              JaeKralj
            </span>
            {width > 768 && (
              <Line className='stroke-black-200 dark:stroke-white' />
            )}
          </Link>
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
              navCollapsed ? 'hidden' : 'block basis-full grow shadow  pb-3'
            } md:block`}
          >
            <ul
              className={`flex flex-col gap-3 md:flex-row lg:gap-7 w-full mt-7 md:mt-0`}
            >
              <NavLink
                to='/'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className='lg:p-2 lg:text-[1.125rem] text-base font-semibold lg:font-normal hover:border-b hover:border-b-green text-black-200 dark:text-white'>
                  Home
                </li>
              </NavLink>
              <NavLink
                to='/contact'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className='lg:p-2 lg:text-[1.125rem] text-base font-semibold lg:font-normal hover:border-b hover:border-b-green text-black-200 dark:text-white'>
                  Contact
                </li>
              </NavLink>
              <NavLink
                to='projects'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className='lg:p-2 lg:text-[1.125rem] text-base font-semibold lg:font-normal hover:border-b hover:border-b-green text-black-200 dark:text-white'>
                  Project
                </li>
              </NavLink>
              <a
                href='https://jaekralj.github.io/resume'
                target='_blank'
                rel='noreferrer'
              >
                <li className='p-2 lg:text-[1.125rem] text-base font-semibold lg:font-normal text-white dark:text-black-200 bg-green w-20 mr-auto'>
                  Resume
                </li>
              </a>
            </ul>
          </div>
        </nav>
      </Frag>
    </header>
  )
}
