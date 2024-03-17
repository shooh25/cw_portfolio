import Header from '../components/Header'
import Footer from '../components/Footer'
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import profile from '../images/profile.png'

const Top = () => {
  return (
    <>
      <section className=''>
        <Header />
      </section>

      <section className='overflow-hidden'>
        <h1 className='font-rajdhani text-[30vw] md:text-[290px] leading-none tracking-[-.04em] font-semibold whitespace-nowrap'>WEB DESIGN PORTFOLIO</h1>
      </section>

      {/* Greeting */}
      <section className='px-5 md:px-[50px]'>
        <div className='border-b border-black relative flex items-end justify-end md:justify-between pb-4'>
          <img
            src={profile} alt="kubosyoh"
            className='absolute w-[120px] md:w-[140px] left-0 top-[-30px] md:left-1/2 md:transform md:-translate-x-1/2' />
          <p className='hidden md:block text02'>- GREETING</p>
          <ul className='flex gap-3'>
            <li>
              <a href="https://crowdworks.jp/public/employees/4381064" target='_blank' className='bg-black relative h-11 w-11 rounded-[22px] flex justify-center items-center'>
                <p className='text-white font-rajdhani font-semibold tracking-[.07em]'>CW</p>
              </a>
            </li>
            <li>
              <a href="" target='_blank' className='bg-black relative h-11 w-11 rounded-[22px] flex justify-center items-center'>
                <FaTwitter color='#ffffff' className='w-5 h-5' />
              </a>
            </li>
            <li>
              <a href="mailto:kubosyoh@gmail.com?" className='bg-black relative h-11 w-11 rounded-[22px] flex justify-center items-center'>
                <MdEmail color='#ffffff' className='w-5 h-5' />
              </a>
            </li>
          </ul>
        </div>
        <div className='border-black border-b py-[60px] md:py-[80px]'>
          <p className='text05 max-w-[1000px] m-auto'>
            Web / UI / UXデザイナー・エンジニアのKubosyohと申します。<br />
            高クオリティなWebサイト、アプリケーションを1から制作いたします。<br />
            「使いやすく、見やすいデザイン」を常に意識し、1つ1つ丁寧に制作しております。<br />
            クライアント様の様々なご要望にお答えしておりますので、まずはお気軽にご相談くださいませ。
          </p>
        </div>
      </section>

      {/* Works */}
      <section className='px-5 md:px-[50px]'>
        <div className='border-black border-b py-[60px] md:py-[80px]'>
          <div className='md:flex'>
            <div className='flex flex-col'>
              <div>
                <p className='text02 mb-3'>- WORKS</p>
                <h2 className='text01  mb-8'>実績紹介</h2>
                <p className='text05'>
                  企業のランディングページから<br />
                  SaaSサービスのUIデザインまで、<br />
                  幅広く手掛けております。
                </p>
              </div>
            </div>
            <div></div>
          </div>

        </div>
      </section>

      {/* Service */}
      <section>
      </section>

      {/* Contact */}
      <section>
        <p className='text02'>CONTACT</p>
        <h2 className='text01'>お問い合わせ</h2>

      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Top