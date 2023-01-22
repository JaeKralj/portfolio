import React from 'react'

import Header from '../components/Home/Header/Header'
import Projects from '../components/Home/Projects/Projects'

export default function Home() {
  return (
    <div className=' p-5  mb-10 flex-1'>
      <Header btnText={'View My Projects'} />
      <Projects />
    </div>
  )
}
