import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../../components/UI/Button'
import FormLoader from '../../components/UI/FormLoader'
import { userCtx } from '../../contexts/user-ctx'
import { app } from '../../firebase.config'
import AuthForm from './AuthForm'

export default function SignIn() {
  // form submission loading
  const [loading, setLoading] = useState(false)
  // user context
  const { setCurrentUser, setLoggedIn } = useContext(userCtx)
  // navigate
  const navigate = useNavigate()
  async function handleSignIn(values) {
    setLoading(true)
    try {
      const auth = getAuth(app)
      // sign in user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      // get user
      const user = userCredential.user
      
      // update user profile
      setCurrentUser(user)
      localStorage.setItem('user', JSON.stringify(auth.currentUser))
      setLoggedIn(true)

      // update form submission loading state
      setLoading(false)
      // redirect
      navigate('/admin')
    } catch (error) {}
  }
  return (
    <>
      {loading ? (
        <FormLoader />
      ) : (
        <AuthForm handleSubmit={handleSignIn}>
          <div className='flex justify-end gap-3'>
            <Button type={'submit'}>Sign In</Button>
            <Link
              to={'/admin/signup'}
              className='p-2 text-center hover:bg-white-100 flex items-center transition-colors duration-100'
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </AuthForm>
      )}
    </>
  )
}
