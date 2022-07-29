import { BottomNav, Footer } from 'src/components'
// import { Footer, BottomNav, Countries, CitiesFirstSlider, CitiesVideoWindow, CitiesImgWindow, CitiesTopic } from '../components/index'
import Head from 'next/head'
import { Style } from 'src/components/styles/about.css'

function About() {
  return (
    <>
      <div className={Style}>
        <div>Augmented world is world wide information site. Also blog </div>
        {/* <Footer />
        <BottomNav /> */}
      </div>
    </>
  )
}

export default About