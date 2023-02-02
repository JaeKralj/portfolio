import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import GlobalContextProvider from './contexts/global-ctx'
import { AuthContextProvider } from './firebase.config'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GlobalContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </GlobalContextProvider>
)
