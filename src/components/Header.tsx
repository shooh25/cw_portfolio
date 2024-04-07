import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='border-b border-black md:px-14 px-0 flex justify-end'>
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

      <div className='md:hidden'>
        <div className='p-3 cursor-pointer' onClick={() => setIsOpen(true)}>
          <AiOutlineMenu size='28px' />
        </div>
      </div>

      {/* ハンバーガーメニュー */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: .2 } }}
          className='fixed w-[100%] h-[100vh] top-0 left-0 bg-black z-10 p-4 flex flex-col justify-between'
        >
          <div className='flex justify-end pt-[1px] pr-[1px]'>
            <div className='p-3 cursor-pointer ' onClick={() => setIsOpen(false)}>
              <AiOutlineClose size='28px' color='#ffffff' />
            </div>
          </div>
          <nav className='pb-10'>
            <ul className='flex flex-col'>
              <li className='group'>
                <Link to='/' className='inline-block p-5 group-hover:bg-black' onClick={() => setIsOpen(false)}>
                  <p className='text04 text-white'>TOP</p>
                </Link>
              </li>
              <li className='group'>
                <Link to='/works' className='inline-block p-5 group-hover:bg-black' onClick={() => setIsOpen(false)}>
                  <p className='text04 text-white'>WORKS</p>
                </Link>
              </li>
              <li className='group'>
                <Link to='/about' className='inline-block p-5 group-hover:bg-black' onClick={() => setIsOpen(false)}>
                  <p className='text04 text-white'>ABOUT</p>
                </Link>
              </li>
              <li className='group'>
                <AnchorLink href='#service' className='inline-block p-5 group-hover:bg-black' onClick={() => setIsOpen(false)}>
                  <p className='text04 text-white'>SERVICE</p>
                </AnchorLink>
              </li>
              <li className='group'>
                <Link to='/contact' className='inline-block p-5 group-hover:bg-black' onClick={() => setIsOpen(false)}>
                  <p className='text04 text-white'>CONTACT</p>
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </div>
  )
}

export default Header