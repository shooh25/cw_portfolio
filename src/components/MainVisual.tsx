import React from 'react'

type Props = {
  title: string;
  span: string;
}

const MainVisual: React.FC<Props> = ({title, span}) => {
  return (
    <div className='px-5 md:px-[60px] py-20 md:pt-28 md:pb-20 '>
      <div className='border-r border-black pr-20 inline-block'>
        <p className='text02 mb-3'>{span}</p>
        <h1 className='text01'>{title}</h1>
      </div>
    </div>
  )
}

export default MainVisual