import React, { ReactElement } from 'react'

interface Props {
  children: ReactElement
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className='bg-white border-solid border border-black relative'>
      {children}
    </div>
  )
}

export default Wrapper