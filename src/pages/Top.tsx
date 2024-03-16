import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Top = () => {
  return (
    <>
      <section className=''>
        <Header />
      </section>

      <section className='overflow-hidden'>
        <h1 className='font-rajdhani text-[30vw] md:text-[230px] leading-none tracking-[-.04em] font-semibold whitespace-nowrap'>WEB DESIGN PORTFOLIO</h1>
      </section>

      {/* Greeting */}
      <section>
      </section>

      {/* Works */}
      <section>
        <div className='flex'>
          <div>
            <p className='text02'>- WORKS</p>
            <h2 className='text01'>実績紹介</h2>
          </div>
          <div></div>
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