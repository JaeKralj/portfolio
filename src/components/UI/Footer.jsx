import Frag from './Frag'

export default function Footer() {
  const dateYear = new Date().getFullYear()
  return (
    <footer className='bg-black text-white-100 mt-8'>
      <Frag>
        <div className='flex justify-between flex-wrap'>
          <div className='order-1 md:order-none'>
            <h3 className='lg:text-2xl text-white text-xl font-bold my-3'>
              Socials
            </h3>
            <ul className='lg:text-xl text-base font-medium'>
              <a
                href='https://github.com/JaeKralj'
                className='hover:text-green'
              >
                <li className='mb-2'>Github</li>
              </a>
              <a
                href='https://twitter.com/JaeKralj'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-green'
              >
                <li className='mb-2'>Twitter</li>
              </a>
              <a
                href='https://www.linkedin.com/in/gideon-akinduro-747511242/'
                className='hover:text-green'
              >
                <li className='mb-2'>LinkedIn</li>
              </a>
              <a
                href='https://wa.me/+2348145092994'
                className='hover:text-green'
              >
                <li className='mb-2'>Whatsapp</li>
              </a>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3 className='lg:text-2xl text-white text-xl font-bold my-3'>
              Contact Me
            </h3>
            <a
              href='mailto:gideonakinduro38@gmail.com'
              className='lg:text-xl text-base font-medium mb-2 hover:text-green'
            >
              gideonakinduro38@gmail.com
            </a>
            <a
              href='tel:+2348145092994'
              className='lg:text-xl text-base font-medium mb-2 hover:text-green'
            >
              +2348145092994
            </a>
          </div>
          <div className='order-2 md:order-none mx-auto md:mx-0'>
            <small className='my-3 mx-3'>
              Designed by{' '}
              <a
                href='https://twitter.com/VictoryUXer?s=20&t=GNQE79Xq_l47tze7cQFiKA'
                className='text-green'
              >
                Victory Chuckwuma
              </a>{' '}
              Built with Reactjs by
              <a
                href='https://twitter.com/JaeKralj'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green'
              >
                {' '}
                Akinduro Gideon{' '}
              </a>
              &copy; {dateYear}
            </small>
          </div>
        </div>
      </Frag>
    </footer>
  )
}
