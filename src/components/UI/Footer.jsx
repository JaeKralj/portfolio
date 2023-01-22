import Frag from './Frag'

export default function Footer() {
  return (
    <footer className='bg-black text-white-100 mt-8'>
      <Frag>
        <div className='flex justify-between flex-wrap'>
          <div className='order-1 md:order-none'>
            <h3 className='lg:text-2xl text-white text-xl font-bold my-3'>
              Socials
            </h3>
            <ul className='lg:text-xl text-base font-medium'>
              <li className='mb-2'>Github</li>
              <li className='mb-2'>Twitter</li>
              <li className='mb-2'>LinkedIn</li>
              <li className='mb-2'>Whatsapp</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3 className='lg:text-2xl text-white text-xl font-bold my-3'>
              Contact Me
            </h3>
            <a
              href='mailto:gideonakinduro38@gmail.com'
              className='lg:text-xl text-base font-medium mb-2'
            >
              gideonakinduro38@gmail.com
            </a>
            <a
              href='tel:+2348145092994'
              className='lg:text-xl text-base font-medium mb-2'
            >
              +2348145092994
            </a>
          </div>
          <div className='order-2 md:order-none mx-auto md:mx-0'>
            <small className='my-3 mx-3'>&copy; Akinduro Gideon 2022</small>
          </div>
        </div>
      </Frag>
    </footer>
  )
}
