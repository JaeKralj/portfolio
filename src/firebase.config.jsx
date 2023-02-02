// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { createContext, useContext, useEffect, useState } from 'react'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpkKkT_irLc8DQRUuGxAHG3VOztSWKuhs',
  authDomain: 'portfolio-a5746.firebaseapp.com',
  projectId: 'portfolio-a5746',
  storageBucket: 'portfolio-a5746.appspot.com',
  messagingSenderId: '205621793863',
  appId: '1:205621793863:web:498dd86b35a67c0b424d62',
  measurementId: 'G-KPYRRRDTG7',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)

// AuthContext
export const AuthContext = createContext()

export const AuthContextProvider = props => {
  // user state
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  //track changes to auth state
  useEffect(() => {
    const unsubscribeFromAuthState = onAuthStateChanged(
      getAuth(app),
      setUser,
      setError
    )
    return () => unsubscribeFromAuthState()
  }, [])

  return <AuthContext.Provider value={{ user, error }} {...props} />
}

// auth state values as hook
export const useAuthState = () => {
  const { user: auth } = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth?.user !== null }
}
