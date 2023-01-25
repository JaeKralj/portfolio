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
        <nav className='flex flex-wrap justify-between p-3'>
          {/* logo */}
          <Link to={'/'} className='hover:animate-bounce-slow'>
            <span className='text-base font-bold text-black-200 dark:text-white lg:text-4xl'>
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
              navCollapsed ? 'hidden' : 'block grow basis-full pb-3  shadow'
            } md:block`}
          >
            <ul
              className={`mt-7 flex w-full flex-col gap-3 md:mt-0 md:flex-row lg:gap-7`}
            >
              <NavLink
                to='/'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className='hover:animate-bounce-slow'
              >
                <li className='text-base font-semibold text-black-200  dark:text-white lg:p-2 lg:text-[1.125rem] lg:font-normal'>
                  Home
                </li>
              </NavLink>
              <NavLink
                to='/contact'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className='hover:animate-bounce-slow'
              >
                <li className='text-base font-semibold text-black-200   dark:text-white lg:p-2 lg:text-[1.125rem] lg:font-normal'>
                  Contact
                </li>
              </NavLink>
              <NavLink
                to='projects'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className='hover:animate-bounce-slow'
              >
                <li className='text-base font-semibold text-black-200   dark:text-white lg:p-2 lg:text-[1.125rem] lg:font-normal'>
                  Project
                </li>
              </NavLink>
              <a
                href='https://jaekralj.github.io/resume'
                target='_blank'
                rel='noreferrer'
                className='hover:animate-bounce-slow'
              >
                <li className='mr-auto w-20 bg-green p-2 text-base font-semibold text-white dark:text-black-200 lg:text-[1.125rem] lg:font-normal'>
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
