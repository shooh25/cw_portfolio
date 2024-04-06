import React from 'react'
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <>
        <section className='px-5 md:px-[60px]'>
          <div className='py-[60px] md:py-[80px] h-[100vh] relative'>
            <div className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full text-center'>
              <h1 className='text01 mb-6'>404 Not Found</h1>
              <p className='text05 mb-11'>
                ご指定のページが見つかりませんでした。<br />
                アクセスしたページは削除、変更されたか、現在利用できない可能性があります。<br />
              </p>
              <Button asChild>
                <Link to={'/'}>戻る</Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    </PageTransition>
  )
}

export default NotFound