import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import Button from '../../components/UI/Button'
import TextInput from '../../components/UI/TextInput'

export default function AuthForm({
  redirectPathName,
  btnText,
  redirectText,
  handleSubmit,
}) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string()
          .required(
            'Password should be a min of 6 characters, which includes uppercase and symbol'
          )
          .min(
            6,
            'Password should be a min of 6 characters, which includes uppercase and symbol'
          )
          .matches(
            '[A-Z]',
            'Password should be a min of 6 characters, which includes uppercase and symbol'
          )
          .matches(
            '[-,$.@^\'?!#%*(_)+=/~`";:]',
            'Password should be a min of 6 characters, which includes uppercase and symbol'
          ),
      })}
      onSubmit={handleSubmit}
    >
      {formik => {
        return (
          <form
            className='w-5/12 mx-auto shadow-lg bg-white rounded-md p-3 my-10'
            onSubmit={formik.handleSubmit}
          >
            <TextInput label={'Email'} id='email' type={'email'} />
            <TextInput label={'Password'} id='password' type={'password'} />
            <div className='flex justify-end gap-3'>
              <Button type={'submit'} disabled={!formik.isValid}>
                {btnText}
              </Button>
              <Link
                to={redirectPathName}
                className='p-2 text-center hover:bg-white-100 flex items-center transition-colors duration-100'
              >
                <span>{redirectText}</span>
              </Link>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}
