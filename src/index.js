import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import UserCtxProvider from './contexts/user-ctx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserCtxProvider>
      <App />
    </UserCtxProvider>
  </React.StrictMode>
)
