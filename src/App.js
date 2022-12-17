import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Navbar from './components/UI/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className='min-h-screen p-5 lg:px-20 lg:py-7 dark:bg-black-200'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
