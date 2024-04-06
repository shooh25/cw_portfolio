import MainVisual from '../components/MainVisual'
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import { useContactForm } from '../hooks/useContactForm';
import { Navigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const { register, handleSubmit, sendEmail, isSubmitted, formState: { errors } } = useContactForm();

  if (isSubmitted) return (<Navigate to="/submit-success" />)

  return (
    <PageTransition>
      <>
        <MainVisual title='お問い合わせ' span='- CONTACT' />
        <section className='px-5 md:px-[60px]'>
          <div className='py-[60px] md:py-[80px]'>
            <p className='text05 text-center'>無料相談を承っております。お気軽にご連絡ください。<br />
              下記フォームにご入力いただき、内容をご確認後、送信してください
            </p>
            <div className='max-w-[900px] m-auto mt-11'>
              <form
                onSubmit={handleSubmit(sendEmail)}
                className='flex flex-col gap-8 items-center'
              >
                <div className='flex flex-col gap-3 text05 w-full'>
                  <label>お名前</label>
                  <input
                    type="text"
                    className='border border-black p-4'
                    {...register('personalName', {
                      required: 'お名前を入力してください'
                    })}
                  />
                  {errors.personalName?.message && (
                    <p className="">{errors.personalName?.message}</p>
                  )}
                </div>
                <div className='flex flex-col gap-3 text05 w-full'>
                  <label>会社名</label>
                  <input
                    type="text"
                    className='border border-black p-4'
                    {...register('companyName')}
                  />
                  {errors.companyName?.message && (
                    <p className="error-message">{errors.companyName?.message}</p>
                  )}
                </div>
                <div className='flex flex-col gap-3 text05 w-full'>
                  <label>メール</label>
                  <input
                    type="text"
                    className='border border-black p-4'
                    {...register('email', {
                      required: 'メールアドレスを入力してください'
                    })}
                  />
                  {errors.email?.message && (
                    <p className="error-message">{errors.email?.message}</p>
                  )}
                </div>
                <div className='flex flex-col gap-3 text05 w-full'>
                  <label>お問い合わせ内容</label>
                  <textarea
                    className='border border-black p-4 h-40'
                    {...register('message')}
                  />
                </div>
                <div className='flex flex-col gap-3 text05'>
                  <Button type='submit'>この内容で送信</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    </PageTransition>
  )
}

export default Contact