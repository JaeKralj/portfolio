import { useContext } from 'react'

import { formCtx } from '../../contexts/form-ctx'

export default function TextInput({ label, type, name }) {
  const { vals, handleTextChange } = useContext(formCtx)
  return (
    <label
      htmlFor={name}
      className='text-xs text-base font-medium flex flex-col'
    >
      {label}
      <input
        type={type ? type : 'text'}
        name={name}
        id={name}
        className='shadow-lg border-green border-2 p-2 rounded-lg mt-1 p-2'
        onChange={handleTextChange(name)}
        value={vals[name]}
      />
    </label>
  )
}
