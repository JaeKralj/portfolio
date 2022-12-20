import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'

import Button from '../../components/UI/Button'
import { app } from '../../firebase.config'
import AuthForm from './AuthForm'

export default function SignUp() {
  async function handleSignUp(values) {
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
      console.log(user)
      // update user profile

      // redirect
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <AuthForm handleSubmit={handleSignUp}>
        <div className='flex justify-end gap-3'>
          <Button type={'submit'}>Sign Up</Button>
          <Link
            to={'/admin/signin'}
            className='p-2 text-center hover:bg-white-100 flex items-center transition-colors duration-100'
          >
            <span>Sign In</span>
          </Link>
        </div>
      </AuthForm>
    </>
  )
}
