import React from 'react'
import MainVisual from '../components/MainVisual'
import Tag from '../components/Tag'
import { useWorkQuery } from '../hooks/useWorkQuery'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useQueryClient } from 'react-query';
import PageTransition from '../components/PageTransition'
import HeadBlock from "../components/HeadBlock"

const Works: React.FC = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.clear()
  }, [])

  const works = useWorkQuery({ asList: true, limit: 10 })

  return (
    <>
      <HeadBlock title='実績紹介' />
      <PageTransition>
        <>
          <MainVisual title="実績紹介" span="- WORKS" />
          <section className='px-5 md:px-[60px]'>
            <div className='border-black border-b py-[60px] md:py-[80px]'>
              {works && Array.isArray(works) ? (
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12 2xl:gap-14'>
                  {works.map((work, i) => (
                    <li key={i}>
                      <Link className='w-full bg-zinc-100' to={`/works/${work.id}`}>
                        <div className='w-full aspect-video border border-black relative'>
                          <img
                            className='w-full h-full object-cover object-top absolute border border-black box-content top-[-1px] left-[-1px] hover:top-[-12px] hover:left-[-12px] 2xl:hover:top-[-16px] 2xl:hover:left-[-16px] transition-all duration-200 ease-out'
                            src={work.images[0].url}
                            alt={work.title} />
                        </div>
                        <div className='mt-6'>
                          <h2 className='text03'>{work.title}</h2>
                          <div className='mt-3 flex flex-wrap gap-1.5'>
                            {work.scope.map((tag, i) => (
                              <Tag name={tag} key={i} />
                            ))}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12 2xl:gap-14'>
                  <div>
                    <div className='w-full aspect-video animate-pulse bg-zinc-100' />
                    <div className='h-16 animate-pulse bg-zinc-100 mt-6' />
                  </div>
                  <div>
                    <div className='w-full aspect-video animate-pulse bg-zinc-100' />
                    <div className='h-16 bg-zinc-100 animate-pulse mt-6' />
                  </div>
                  <div>
                    <div className='w-full aspect-video animate-pulse bg-zinc-100' />
                    <div className='h-16 bg-zinc-100 animate-pulse mt-6' />
                  </div>
                </div>
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
      </PageTransition>
    </>
  )
}

export default Works