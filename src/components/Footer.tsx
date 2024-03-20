import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full border-t border-black sm:px-14 px-4 py-[50px]">
      <div className="md:flex md:justify-between md:items-center">
        <p className="text04">© MADE BY KUBOSYOH 2024</p>
        <nav >
          <ul className='flex flex-wrap mt-4 md:mt-0'>
            <li className='group'>
              <Link to='/' className='inline-block px-4  group-hover:bg-black'>
                <p className='text04 group-hover:text-white'>TOP</p>
              </Link>
            </li>
            <li className='group'>
              <Link to='/' className='inline-block px-4  group-hover:bg-black'>
                <p className='text04 group-hover:text-white'>WORKS</p>
              </Link>
            </li>
            <li className='group'>
              <Link to='/' className='inline-block px-4  group-hover:bg-black'>
                <p className='text04 group-hover:text-white'>SERVICE</p>
              </Link>
            </li>
            <li className='group'>
              <Link to='/' className='inline-block px-4  group-hover:bg-black'>
                <p className='text04 group-hover:text-white'>ABOUT</p>
              </Link>
            </li>
            <li className='group'>
              <Link to='/' className='inline-block px-4  group-hover:bg-black'>
                <p className='text04 group-hover:text-white'>CONTACT</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer