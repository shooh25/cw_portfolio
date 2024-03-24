import profile from '../images/profile.png'
import design from "../images/service_design.png"
import coding from "../images/service_coding.png"
import frontend from "../images/service_frontend.png"
import Button from '../components/Button'
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { useWorkQuery } from '../hooks/useWorkQuery'

const Top = () => {

  // 実績一覧
  const { data } = useWorkQuery({ asList: true, limit: 4 })
  const works: WorkObj[] = data?.contents

  return (
    <>
      <section className='overflow-hidden'>
        <h1 className='font-rajdhani text-[30vw] md:text-[280px] leading-none tracking-[-.04em] font-semibold whitespace-nowrap mt-[-10px]'>WEB DESIGN PORTFOLIO</h1>
      </section>

      {/* Greeting */}
      <section className='px-5 md:px-[60px]'>
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
        <div className='border-black border-b py-[60px] md:py-[80px] md:text-center'>
          <p className='text05 max-w-[1000px] m-auto'>
            Web / UI / UXデザイナー・エンジニアのKubosyohと申します。<br />
            高クオリティなWebサイト、アプリケーションを1から制作いたします。<br />
            「使いやすく、見やすいデザイン」を常に意識し、1つ1つ丁寧に制作しております。<br />
            クライアント様の様々なご要望にお答えしておりますので、まずはお気軽にご相談くださいませ。
          </p>
        </div>
      </section>

      {/* Works */}
      <section className='px-5 md:px-[60px]'>
        <div className='border-black border-b py-[60px] md:py-[80px]'>
          <div className='grid md:grid-cols-3 '>
            <div className='flex flex-col md:col-span-1'>
              <div className='flex flex-col content-between'>
                <p className='text02 mb-3'>- WORKS</p>
                <h2 className='text01  mb-8'>実績紹介</h2>
                <p className='text05 mb-8'>
                  企業のランディングページから<br />
                  SaaSサービスのUIデザインまで、<br />
                  幅広く手掛けております。
                </p>
              </div>
              <div>
                <Button asChild>
                  <Link to="/works">VIEW MORE</Link>
                </Button>
              </div>
            </div>
            <div className='mt-11 md:mt-0 md:col-span-2'>
              <ul className='grid sm:grid-cols-2 gap-8'>
                {works && works.map((work, i) => (
                  <li key={i}>
                    <Link to='' className='border border-black block' >
                      <img src={work.images[0].url} alt={work.title} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Service */}
      <section id='service' className='px-5 md:px-[60px]'>
        <div className='border-black border-b py-[60px] md:py-[80px]'>
          <div className='text-center'>
            <p className='text02 mb-3'>SERVICE</p>
            <h2 className='text01'>サービス内容</h2>
          </div>
          <ul className='mt-8 sm:grid sm:grid-cols-3'>
            <li className='flex flex-col items-center'>
              <img src={design} alt="design" className='block w-[70%]' />
              <div className='mt-10 px-[26px] lg:px-8 2xl:px-10 border-l border-black h-auto lg:h-48 xl:h-44'>
                <h3 className='text03 mb-4'>Web/UI/UXデザイン</h3>
                <p className='text05'>「ご希望のデザインイメージ」×「見やすく使いやすい」を掛け合わせたデザインを制作いたします。サイトのリニューアルについてもお気軽にご相談ください。</p>
              </div>
            </li>
            <li className='flex flex-col items-center'>
              <img src={coding} alt="coding" className='block w-[70%]' />
              <div className='mt-10 px-[26px] lg:px-8 2xl:px-10 border-l border-black h-auto lg:h-48 xl:h-44'>
                <h3 className='text03 mb-4'>コーディング</h3>
                <p className='text05'>デザインカンプともとに、HTML/CSSを用いてコーディングを行います。ピクセルパーフェクトを意識して、忠実にデザイン再現を行います。</p>
              </div>
            </li>
            <li className='flex flex-col items-center'>
              <img src={frontend} alt="frontend" className='block w-[70%]' />
              <div className='mt-10 px-[26px] lg:px-8 2xl:px-10 border-l border-black h-auto lg:h-48 xl:h-44'>
                <h3 className='text03 mb-4'>フロントエンド開発</h3>
                <p className='text05'>JavaScript / TypeScriptを用いたフロントエンド開発を行います。フロントエンド領域だけではなく、バックエンドの知見も持っておりますのでご安心ください。</p>
              </div>
            </li>
          </ul>
          <div className='w-full pt-[50px] flex justify-center'>
            <div className='border border-black max-w-[920px] text-center py-6 flex justify-center'>
              <p className='text05 w-[85%]'>
                スキル / HTML, CSS(SASS, Tailwind CSS),  JavaScript(React, jQuery), TypeScript, WordPress
                ツール / Figma, AdobeXD, Photoshop, Illustrator
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className='px-5 md:px-[60px]'>
        <div className='border-black border-b py-[60px] md:py-[80px]'>
          <div className='grid md:grid-cols-3'>
            <div className='md:col-span-1'>
              <p className='text02 mb-3'>- ABOUT</p>
              <h2 className='text01'>私について</h2>
            </div>
            <div className='md:col-span-2 border-l border-black pl-[26px] lg:pl-[60px] mt-8 md:mt-0'>
              <h3 className='text03 mb-4'>デザインで最大限の価値を与える。</h3>
              <p className='text05 mb-[50px]'>
                フリーランスのデザイナー/エンジニアとして活動しています。<br />
                中小企業様、個人事業主様を中心に、ウェブ制作/開発を行っております。
              </p>
              <div>
                <Button asChild>
                  <Link to="/about">VIEW MORE</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
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

export default Top