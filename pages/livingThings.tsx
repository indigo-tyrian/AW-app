import 'src/components/styles/global.css'
import { Footer, BottomNav, Countries, LivingThingsFirstSlider, LivingThingsVideoWindow, LivingThingsImgWindow, LivingThingsTopic } from 'src/components/index'
import LivingThingsImgWindow2 from 'src/components/LivingThings/LivingThingsImgWindow2'

function LivingThings() {
  return (
    <div className='index'>
      <LivingThingsFirstSlider />
      <LivingThingsTopic />
      <LivingThingsVideoWindow />
      <LivingThingsImgWindow2 />
      <LivingThingsImgWindow />
      <Countries />
      <Footer />
      <BottomNav />
    </div>
  )
}

export default LivingThings

