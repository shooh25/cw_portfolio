import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactElement
}

const Transition: React.FC<Props> = ({ children }) => {

  const whiteBox = {
    initial: {
      width: '100%',
    },
    animate: {
      width: 0,
      transition: {
        ease: [0.65, 0.05, 0.36, 1],
        duration: .8,
      }
    },
  }

  const blackBox = {
    initial: {
      width: '100%',
    },
    animate: {
      width: 0,
      transition: {
        delay: .6,
        ease: [0.65, 0.05, 0.36, 1],
        duration: .8,
      }
    },
  }

  return (
    <div className='relative'>
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={blackBox}
        className='absolute top-0 right-0 bg-black h-full z-10'
      />
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={whiteBox}
        className='absolute top-0 right-0 bg-white h-full z-10'
      />
      {children}
    </div>
  )
}

export default Transition