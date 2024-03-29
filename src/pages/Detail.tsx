import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useWorkQuery } from '../hooks/useWorkQuery';
import Tag from '../components/Tag';


const Detail: React.FC = () => {
  const { contentId } = useParams();
  const navigate = useNavigate();

  if (contentId) {
    const work = useWorkQuery({ contentId: contentId });

    return (
      <>
        <section className='px-5 md:px-[60px]'>
          <div className='border-b border-black py-20 md:pt-28 md:pb-20'>
            <div className='flex flex-col items-center text-center'>
              <p className='text02 mb-3'>WORKS / DETAIL</p>
              {work && !Array.isArray(work) ? (
                <h1 className='text01'>{work.title}</h1>
              ) : (
                <div className='h-10 w-full max-w-[500px] animate-pulse bg-zinc-100' />
              )}
            </div>
          </div>
        </section>

        <section className='px-5 md:px-[60px]'>
          <div className='border-black border-b py-[60px] md:py-[80px]'>
            {work && !Array.isArray(work) ? (
              <div>
                <div className='w-full flex flex-col items-center gap-10'>
                  {work.images.map((image, i) => (
                    <img src={image.url} alt={work.title} className='w-full max-w-[900px] border border-black bg-zinc-100' key={i} />
                  ))}
                </div>
                <div className='w-full mt-[60px] border-l border-black pl-[30px] flex flex-col gap-[30px]'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
                    <div className='w-48'>
                      <h3 className='text02'>CLIENT</h3>
                    </div>
                    <div className='flex-1'>
                      <p className='text05'>{work.client}</p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
                    <div className='w-48'>
                      <h3 className='text02'>DETAIL</h3>
                    </div>
                    <div className='flex-1'>
                      <p className='text05'>{work.detail}</p>
                      {work.link && (<a href={work.link} className='text05 mt-2 inline-block border-b border-black' target='_blank' >{work.link}</a>)}
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
                    <div className='w-48'>
                      <h3 className='text02'>TERM</h3>
                    </div>
                    <div className='flex-1'>
                      <p className='text05'>{work.term}</p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
                    <div className='w-48'>
                      <h3 className='text02'>SCOPE</h3>
                    </div>
                    <div className='flex gap-1.5'>
                      {work.scope.map((tag, i) => (
                        <Tag name={tag} key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='w-full flex flex-col items-center'>
                <div className='w-full max-w-[900px] aspect-video animate-pulse bg-zinc-100' />
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
    )

  } else {
    navigate('/')
  }
}

export default Detail