import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Home/Header/Header'
import Projects from '../components/Home/Projects/Projects'

export default function Home() {
  const navigate = useNavigate()

  const directToProjects = () => {
    navigate('projects')
  }
  return (
    <div className=' p-5  mb-10 flex-1'>
      <Header btnText={'View My Projects'} btnClick={directToProjects} />
      <Projects />
    </div>
  )
}
