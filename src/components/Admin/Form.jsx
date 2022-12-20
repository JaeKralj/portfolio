import { useContext } from 'react'

import { formCtx } from '../../contexts/form-ctx'
import Button from '../UI/Button'

export default function Form() {
  const {
    vals,
    handleTextChange,
    handleFileUpload,
    handleFeatures,
    handleSubmit,
  } = useContext(formCtx)
  return (
    <form className=' w-4/5 mx-auto shadow-md p-5 flex flex-col gap-[.625rem] bg-white rounded-md'>
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
      <label
        htmlFor='title'
        className='text-xs text-base font-medium flex flex-col'
      >
        Project title{' '}
        <input
          type='text'
          name='title'
          id='title'
          className='shadow-lg border-green border-2 p-2 rounded-lg mt-1 p-2'
          onChange={handleTextChange('title')}
          value={vals.title}
        />
      </label>
      <label
        htmlFor='desc'
        className='text-xs text-base font-medium flex flex-col'
      >
        Description{' '}
        <textarea
          name='desc'
          id='desc'
          className='w-full border-green border-2 rounded-md h-32 p-3'
          onChange={handleTextChange('desc')}
          value={vals.desc}
        ></textarea>
      </label>
      <div>
        <label
          htmlFor='features'
          className='text-xs text-base font-medium flex flex-col'
        >
          Features
          <input
            type='feature'
            name='feature'
            id='feature'
            className='shadow-lg border-green border-2 p-2 rounded-lg mt-1 mb-3 p-2'
            onChange={handleTextChange('feature')}
            value={vals.feature}
          />
        </label>
        <Button
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
      <label
        htmlFor='challenges'
        className='text-xs text-base font-medium flex flex-col'
      >
        Challenges{' '}
        <textarea
          name='challenges'
          id='challenges'
          className='w-full border-green border-2 rounded-md h-32 p-3'
          onChange={handleTextChange('challenges')}
          value={vals.challenges}
        ></textarea>
      </label>
      <label
        htmlFor='milestones'
        className='text-xs text-base font-medium flex flex-col'
      >
        Milestones{' '}
        <textarea
          name='milestones'
          id='milestones'
          className='w-full border-green border-2 rounded-md h-32 p-3'
          onChange={handleTextChange('milestones')}
          value={vals.milestones}
        ></textarea>
      </label>
      <label
        htmlFor='github'
        className='text-xs text-base font-medium flex flex-col'
      >
        Github Link{' '}
        <input
          type='text'
          name='github'
          id='github'
          className='shadow-lg border-green border-2 p-2 rounded-lg mt-1 p-2'
          onChange={handleTextChange('github')}
          value={vals.github}
        />
      </label>
      <label
        htmlFor='live'
        className='text-xs text-base font-medium flex flex-col'
      >
        Live Link{' '}
        <input
          type='text'
          name='live'
          id='live'
          className='shadow-lg border-green border-2 p-2 rounded-lg mt-1 p-2'
          onChange={handleTextChange('live')}
          value={vals.live}
        />
      </label>
      <div className='flex justify-end'>
        <Button
          type='submit'
          handleOnclick={e => {
            handleSubmit(vals, e)
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
