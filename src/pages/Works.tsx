import React from 'react'
import MainVisual from '../components/MainVisual'
import Tag from '../components/Tag'
import { useWorkQuery } from '../hooks/useWorkList'
import { Link } from 'react-router-dom'

const Works: React.FC = () => {
  const { isLoading, data } = useWorkQuery({ asList: true, limit: 10 })
  const works: WorkObj[] = data?.contents

  return (
    <>
      <MainVisual title="実績紹介" span="- WORKS" />
      <section className='px-5 md:px-[60px]'>
        <div className='border-black border-b py-[60px] md:py-[80px]'>
          {isLoading ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
              <div>
                <div className='w-full aspect-video bg-zinc-100' />
                <div className='h-16 bg-zinc-100 mt-6' />
              </div>
              <div>
                <div className='w-full aspect-video bg-zinc-100' />
                <div className='h-16 bg-zinc-100 mt-6' />
              </div>
              <div>
                <div className='w-full aspect-video bg-zinc-100' />
                <div className='h-16 bg-zinc-100 mt-6' />
              </div>
            </div>
          ) : (
            works.map((work, i) => (
              <li className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10' key={i}>
                <Link className='w-full' to="/">
                  <img className='w-full aspect-video bg-zinc-100 object-cover border-black border' src={work.image[0].url} alt={work.title} />
                  <div className='mt-6'>
                    <h2 className='text03'>{work.title}</h2>
                    <div className='mt-3 flex flex-wrap gap-1.5'>
                      {work.scope.map((tag) => (
                        <Tag name={tag} />
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            ))
          )}
        </div>
      </section>

      <section className='px-5 md:px-[60px]'>
        <div className='py-[60px] md:py-[80px] flex flex-col items-center'>
          <p className='text02 mb-3'>CONTACT</p>
          <h2 className='text01'>お問い合わせ</h2>
          <p className='text-center text05 mt-8'>
            多くのクライアント様から選ばれ、高い評価を頂いております。<br />
            お気軽に
            <Link to="/contact" className='border-b border-black'>お問い合わせ</Link>ください。
          </p>
        </div>
      </section>
    </>
  )
}

export default Works