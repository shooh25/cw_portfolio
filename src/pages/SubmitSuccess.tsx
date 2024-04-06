import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import HeadBlock from "../components/HeadBlock"

const SubmitSuccess: React.FC = () => {

  return (
    <>
      <HeadBlock title='送信完了' />
      <PageTransition>
        <>
          <section className='px-5 md:px-[60px]'>
            <div className='py-[60px] md:py-[80px] h-[100vh] relative'>
              <div className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-full'>
                <h1 className='text01 mb-6'>送信完了</h1>
                <p className='text05  mb-11'>
                  お問い合わせいただき、ありがとうございます。<br />
                  近日中にあらためてご連絡いたします。
                </p>
                <Button asChild>
                  <Link to={'/'}>戻る</Link>
                </Button>
              </div>
            </div>
          </section>
        </>
      </PageTransition>
    </>
  )
}

export default SubmitSuccess