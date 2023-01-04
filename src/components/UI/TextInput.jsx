import { useField } from 'formik'

export default function TextInput({ id, type, label }) {
  const [field, meta] = useField(id)
  return (
    <div>
      <label
        htmlFor={type}
        className='text-xs text-base font-medium flex flex-col my-3'
      >
        {label}
        <input
          type={type}
          name={id}
          id={id}
          className='shadow-lg border-green border-2 p-2 rounded-lg mt-1 p-2'
          {...field}
        />
        {meta.error && meta.touched && <small>{meta.error}</small>}
      </label>
    </div>
  )
}
