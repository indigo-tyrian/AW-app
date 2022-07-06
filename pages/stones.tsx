import { BottomNav, Footer } from 'src/components'
import 'src/components/styles/global.css'
// import { Footer, BottomNav, Countries, StoneFirstSlider, StoneVideoWindow, StoneImgWindow, StoneTopic } from 'src/components/index'

function Stone() {
  return (
    <div className='index'>
      {/* <StoneFirstSlider />
      <StoneTopic />
      <StoneVideoWindow />
      <StoneImgWindow />
      <Countries /> */}
      <Footer />
      <BottomNav />
    </div>
  )
}

export default Stone