export default function Footer() {
  return (
    <div className='bg-black text-white-100 lg:p-7 p-5 absolute bottom-0 w-full mt-8'>
      <div className='flex justify-evenly flex-wrap'>
        <div>
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
        <small className='my-3'>&copy; Akinduro Gideon 2022</small>
      </div>
    </div>
  )
}
