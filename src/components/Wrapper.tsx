import React, { ReactElement } from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: ReactElement
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className='bg-white border-solid border border-black'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Wrapper