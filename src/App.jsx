import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import PrivateRoute from './components/Auth/PrivateRoute'
import Footer from './components/UI/Footer'
import Navbar from './components/UI/Navbar'
import Admin from './pages/Admin/Admin'
import SignIn from './pages/Admin/SignIn'
import SignUp from './pages/Admin/SignUp'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-white-100 dark:bg-black-200 relative'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route
            path='/admin'
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />

          <Route path='admin/signup' element={<SignUp />} />
          <Route path='admin/signin' element={<SignIn />} />
          <Route path='/projects/:projectId' element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
