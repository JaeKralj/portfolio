import { useContext, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Navbar from './components/UI/Navbar'
import { userCtx } from './contexts/user-ctx'
import Admin from './pages/Admin/Admin'
import SignIn from './pages/Admin/SignIn'
import SignUp from './pages/Admin/SignUp'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  const { setCurrentUser, loggedIn, setLoggedIn } = useContext(userCtx)
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setCurrentUser(JSON.parse(user))
      setLoggedIn(true)
    }
    // eslint-disable-next-line
  }, [loggedIn])
  return (
    <div className='min-h-screen p-5 lg:px-20 lg:py-7 dark:bg-black-200'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='admin' element={<Admin />} />
          <Route path='admin/signup' element={<SignUp />} />
          <Route path='admin/signin' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
