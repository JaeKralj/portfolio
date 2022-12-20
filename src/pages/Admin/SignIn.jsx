import { Link } from 'react-router-dom'

import Button from '../../components/UI/Button'
import AuthForm from './AuthForm'

export default function SignIn() {
  return (
    <div>
      <AuthForm>
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
    </div>
  )
}
