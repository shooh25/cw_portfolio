import { Link } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div className='border-b border-black sm:px-14 px-4 flex justify-end'>
      <nav className='hidden md:block'>
        <ul className='flex'>
          <li className='group'>
            <Link to='/' className='inline-block px-4 py-6 group-hover:bg-black'>
              <p className='text04 group-hover:text-white'>TOP</p>
            </Link>
          </li>
          <li className='group'>
            <Link to='/works' className='inline-block px-4 py-6 group-hover:bg-black'>
              <p className='text04 group-hover:text-white'>WORKS</p>
            </Link>
          </li>
          <li className='group'>
            <Link to='/about' className='inline-block px-4 py-6 group-hover:bg-black'>
              <p className='text04 group-hover:text-white'>ABOUT</p>
            </Link>
          </li>
          <li className='group'>
            <AnchorLink href='#service' className='inline-block px-4 py-6 group-hover:bg-black'>
              <p className='text04 group-hover:text-white'>SERVICE</p>
            </AnchorLink>
          </li>
          <li className='group'>
            <Link to='/contact' className='inline-block px-4 py-6 group-hover:bg-black'>
              <p className='text04 group-hover:text-white'>CONTACT</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header