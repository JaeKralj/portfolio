import Frag from '../components/UI/Frag'

export default function NotFound() {
  return (
    <Frag className='flex-1 grid place-items-center'>
      <h1 className='text-2xl font-cormorant text-black dark:text-white'>
        Oops, We Couldn't Find That Page, Check URL and try again
      </h1>
    </Frag>
  )
}
