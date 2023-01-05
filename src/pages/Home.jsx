import React from 'react'

import Header from '../components/Home/Header/Header'
import Projects from '../components/Home/Projects/Projects'

export default function Home() {
  return (
    <div className=' p-5 lg:px-20 lg:pt-7 mb-10 static z-10'>
      <Header btnText={'View My Projects'} />
      <Projects />
    </div>
  )
}
