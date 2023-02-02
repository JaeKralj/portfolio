import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FormLoader from '../../components/UI/FormLoader'
import { app, db } from '../../firebase.config'
import AuthForm from './AuthForm'

export default function SignUp() {
  // form submission loading
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSignUp(values) {
    setLoading(true)
    try {
      const auth = getAuth(app)
      // sign up user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      // get user
      const user = userCredential.user

      setLoading(auth.currentUser && true)
      // add user to db
      try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          email: values.email,
          timeStamp: serverTimestamp(),
        })
      } catch (error) {
        console.log(error)
      }
      // redirect
      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section id='sign-up' className='flex-1 grid place-items-center'>
      {loading ? (
        <FormLoader />
      ) : (
        <AuthForm
          handleSubmit={handleSignUp}
          redirectPathName='/admin/signin'
          redirectText={'Sign In'}
          btnText='Sign Up'
        />
      )}
    </section>
  )
}
