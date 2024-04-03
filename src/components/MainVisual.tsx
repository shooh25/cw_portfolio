import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  title: string;
  span: string;
}

const MainVisual: React.FC<Props> = ({ title, span }) => {

  const textMotion = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      }
    }
  }

  const whiteBox = {
    initial: {
      width: '100%',
    },
    animate: {
      width: 0,
      transition: {
        delay: .8,
        ease: [0.65, 0.05, 0.36, 1],
        duration: .4,
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
        delay: 1.2,
        ease: [0.65, 0.05, 0.36, 1],
        duration: .6,
      }
    },
  }
  return (
    <div className='px-5 md:px-[60px]'>
      <div className='border-b border-black py-20 md:pt-28 md:pb-20'>
        <div className='border-r border-black pr-20 inline-block'>
          <div className='relative'>
            <motion.div
              initial='initial'
              animate='animate'
              variants={textMotion}
            >
              <p className='text02 mb-3'>{span}</p>
              <h1 className='text01'>{title}</h1>
            </motion.div>
            <motion.div
              initial='initial'
              animate='animate'
              variants={blackBox}
              className='absolute top-0 right-0 bg-black h-[81px] z-9'
            />
            <motion.div
              initial='initial'
              animate='animate'
              exit='exit'
              variants={whiteBox}
              className='absolute top-0 right-0 bg-white h-[81px] z-9'
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default MainVisual