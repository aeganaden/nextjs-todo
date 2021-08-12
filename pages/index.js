import { Navigation } from '../components/Navigation'
import Image from 'next/image'
import style from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>
      <Navigation />
      <section className='flex items-start'>
        <div className='flex w-3/6 justify-center mt-10 text-secondary'>
          <div className='flex flex-col'>
            <p className={style.bannerType}>
              Summer
              <br />
              Colletion
              <br />
              2021
            </p>
            <h1 className='text-6xl my-5 font-display'>Summer Vibes</h1>
            <p className={style.description}>
              Casual line, Short design, 100% cotton fabric.
            </p>
            <p className={`${style.description}`}>Hand picked designs.</p>
            <button className='mt-10'>View Collections</button>
          </div>
        </div>
        <div className='flex items-baseline'>
          <Image
            className='rounded'
            src='/images/banner-girl.jpg'
            alt='banner image'
            height='630'
            width='400'
          />
          <Image
            className='rounded'
            src='/images/banner-yellow.jpg'
            alt='banner image'
            height='560'
            width='350'
          />
        </div>
      </section>
    </div>
  )
}
