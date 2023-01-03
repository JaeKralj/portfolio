import { useContext } from 'react'

import { formCtx } from '../../contexts/form-ctx'

export default function TextArea({ label, name }) {
  const { vals, handleTextChange } = useContext(formCtx)
  return (
    <label
      htmlFor={name}
      className='text-xs text-base font-medium flex flex-col'
    >
      {label}
      <textarea
        name={name}
        id={name}
        className='w-full border-green border-2 rounded-md h-32 p-3'
        onChange={handleTextChange(name)}
        value={vals[name]}
      ></textarea>
    </label>
  )
}
