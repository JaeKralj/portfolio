import { Formik } from 'formik'
import * as Yup from 'yup'

import TextInput from '../../components/UI/TextInput'

export default function AuthForm({ children, handleSubmit }) {
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
      {formik => (
        <form
          className='w-5/12 mx-auto shadow-lg bg-white rounded-md p-3 my-10'
          onSubmit={formik.handleSubmit}
        >
          <TextInput label={'Email'} id='email' type={'email'} />
          <TextInput label={'Password'} id='password' type={'password'} />
          {children}
        </form>
      )}
    </Formik>
  )
}
