import { Footer, BottomNav, Countries, ArtsFirstSlider, ArtsImgWindow1, ArtsImgWindow2, ArtsTopic, ArtsImgWindow3 } from 'src/components/index'

function Arts() {
  return (
    <div className='index'>
      <ArtsFirstSlider />
      <ArtsTopic />
      <ArtsImgWindow1 />
      <ArtsImgWindow2 />
      <ArtsImgWindow3 />
      <Countries />
      <Footer />
      <BottomNav />
    </div>
  )
}

export default Arts