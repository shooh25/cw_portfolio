import React from 'react'
import MainVisual from '../components/MainVisual'
import WorksImage from '../images/works.png'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import HeadBlock from "../components/HeadBlock"

const About: React.FC = () => {
  return (
    <>
      <HeadBlock title='私について' />
      <PageTransition>
        <>
          <MainVisual title="私について" span="- ABOUT" />
          <section className='px-5 md:px-[60px]'>
            <div className='py-[60px] md:py-[80px] max-w-[900px] m-auto'>
              <h2 className='text03 mb-[30px]'>デザインの力で最大限の価値を与える。</h2>
              <p className='text05'>
                はじめまして、Kubosyohと申します。<br />
                フリーランスのデザイナー/エンジニアとして活動しています。<br />
                中小企業様、個人事業主様を中心に、ウェブ制作/開発を行っております。<br />
                <br />
                フリーランスとしてを活動を始めて以来、「デザインの力で最大限の価値を与える」という目標を掲げております。<br />
                これからも、クライアント様の成功とともに、デザインを通じて社会に必要なモノを生み出していきたいと考えております。<br />
                <br />
                また、多くのクライアント様から選ばれ、高い評価をいただいております。<br />
                お声の一部を紹介させていただきます。<br />
              </p>
            </div>
          </section>

          <section className='px-5 md:px-[60px]'>
            <div className='h-60 bg-zinc-100 mb-[60px]'>
              <img src={WorksImage} alt="works" className='object-cover h-full w-full' />
            </div>
            <div className='sm:grid sm:grid-cols-3 pb-[60px] md:pb-[80px] border-b border-black font-semibold'>
              <div className='border-l border-black px-[26px] lg:px-8 2xl:px-10 pb-[10px]'>
                <p className='text05'>
                  “ 率直にレベルが高いと思います。 仕様書一つで想像を広げ、完成度の高いデザインを仕上げてくれました。”
                </p>
              </div>
              <div className='border-l border-black px-[26px] lg:px-8 2xl:px-10 pb-[10px]'>
                <p className='text05'>
                  “ デザインはセンスが必要という言葉の通り、状況や商品を感覚的に理解され、素晴らしいデザインに仕上げてもらえました。 非常に優秀な方とお会いでき感謝いたします。”
                </p>
              </div>
              <div className='border-l border-black px-[26px] lg:px-8 2xl:px-10 pb-[10px]'>
                <p className='text05'>
                  “ 細かくていねいに、よりよいものになるよう、意見を交えて進めることができました。 おかげで理想的なデザインまで追求できたと思います。”
                </p>
              </div>
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

export default About