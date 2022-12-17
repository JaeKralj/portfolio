import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Navbar from './components/UI/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className='min-h-screen p-5 lg:p-7 dark:bg-black-200'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  )
}

export default App
