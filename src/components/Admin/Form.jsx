import { useContext } from 'react'

import { formCtx } from '../../contexts/form-ctx'
import TextArea from '../Form/TextArea'
import TextInput from '../Form/TextInput'
import Button from '../UI/Button'
import Frag from '../UI/Frag'

export default function Form() {
  const { vals, handleFileUpload, handleFeatures, handleSubmit } =
    useContext(formCtx)

  return (
    <form>
      <Frag>
        <div className='shadow-md flex flex-col gap-[.625rem] bg-white rounded-md p-5'>
          <label
            htmlFor='pic'
            className='text-xs text-base font-medium flex flex-col'
          >
            Project Picture{' '}
            <input
              type='file'
              name='pic'
              id='pic'
              accept='image/*'
              className='mt-1'
              onChange={handleFileUpload('pic')}
            />
          </label>
          <TextInput label='Project Title' name={'title'} />
          <TextArea label='Description' name='desc' />
          <div>
            <TextInput label='Features' name='feature' />
            <Button
              className='my-2'
              handleOnclick={() => {
                handleFeatures(vals.feature)
              }}
            >
              Add A Feature
            </Button>
            <ul className='shadow-md rounded-sm my-1'>
              {vals.features.map((item, index) => (
                <li
                  key={index}
                  className='odd:bg-white even:bg-green even:text-white dark:even:text-black p-2'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <TextArea label='Challenges' name='challenges' />
          <TextArea label='Milestones' name='milestones' />
          <TextInput name='github' label='Github' />
          <TextInput name='live' label='Live Link' />
          <div className='flex justify-end'>
            <Button type='submit' handleOnclick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Frag>
    </form>
  )
}
