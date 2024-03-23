import React from 'react'

type Props = {
  name: string
}

const Tag: React.FC<Props> = ({ name }) => {
  return (
    <div className='text05 border border-black px-3 inline-block'>{name}</div>
  )
}

export default Tag