import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FormLoader from '../../components/UI/FormLoader'
import { app } from '../../firebase.config'
import AuthForm from './AuthForm'

export default function SignIn() {
  // form submission loading
  const [loading, setLoading] = useState(false)
  // navigate
  const navigate = useNavigate()
  async function handleSignIn(values) {
    setLoading(true)
    try {
      const auth = getAuth(app)
      setPersistence(auth, browserLocalPersistence)
      // sign in user
      await signInWithEmailAndPassword(auth, values.email, values.password)

      setLoading(false)
      // redirect
      navigate('/admin')
    } catch (error) {
      alert(error)
      setLoading(false)
    }
  }
  return (
    <section id='sign-in' className='flex-1 grid place-items-center'>
      {loading ? (
        <FormLoader />
      ) : (
        <AuthForm
          handleSubmit={handleSignIn}
          redirectPathName='/admin/signup'
          redirectText={'Sign Up'}
          btnText='Sign In'
        />
      )}
    </section>
  )
}
