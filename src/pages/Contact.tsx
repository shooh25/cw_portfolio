import MainVisual from '../components/MainVisual'
import Button from '../components/Button';
import { useContactForm } from '../hooks/useContactForm';

const Contact: React.FC = () => {
  const { form, emailStatusMessage, sendEmail, isDisplayPopup } = useContactForm();

  return (
    <>
      <MainVisual title='お問い合わせ' span='- CONTACT' />
      <section className='px-5 md:px-[60px]'>
        <div className='py-[60px] md:py-[80px]'>
          <div className='max-w-[900px] m-auto'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-8 items-center'>
              <div className='flex flex-col gap-3 text05 w-full'>
                <label>お名前 / 会社名</label>
                <input type="text" name="user_name" className='border border-black p-4' />
              </div>
              <div className='flex flex-col gap-3 text05 w-full'>
                <label>メール</label>
                <input type="email" name="user_email" className='border border-black p-4' />
              </div>
              <div className='flex flex-col gap-3 text05 w-full'>
                <label>お問い合わせ内容</label>
                <textarea name="message" className='border border-black p-4 h-36' />
              </div>
              <div className='flex flex-col gap-3 text05'>
                <Button type='submit'>この内容で送信</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {isDisplayPopup && (
        <div className='fixed bg-black bottom-8 left-1/2 transform -translate-x-1/2'>
          <div className='relative'>
            <p className='text05 text-white py-4 px-10'>{emailStatusMessage}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact