import { BottomNav, Footer } from 'src/components'
// import { Footer, BottomNav, Countries, CitiesFirstSlider, CitiesVideoWindow, CitiesImgWindow, CitiesTopic } from '../components/index'
import Head from 'next/head'

function Cities() {
  return (
    <div className='index'>
      {/* <CitiesFirstSlider />
      <CitiesTopic />
      <CitiesVideoWindow />
      <CitiesImgWindow />
      <Countries /> */}
      <Footer />
      <BottomNav />
    </div>
  )
}

export default Cities