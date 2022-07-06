import 'src/components/styles/global.css'
import { Style, ctaTitleStyle, slideBgImgStyle, slideBgStyle, slideImgStyle, slideContainerStyle, slideTextStyle, slideCardStyle, slideEarthStyle, slideEarthImgStyle } from "src/components/styles/firstSlider.css";

import { FirstSliderComp } from 'src/components/FirstSliderComp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Input from 'src/components/Input';
import Logo from 'src/components/Logo';
import { inputSearchBoxStyle, containerStyle } from 'src/components/styles/Input.css';
import { logoStyle } from 'src/components/styles/logo.css';
import 'swiper/css';
import "swiper/css/effect-fade";
import { tabAreaBase } from 'src/components/styles/global.css';
import Image from 'next/image'

const LivingThingsFirstSlider = () => {
  return (
    <div className={Style}>
      <div className={`${ctaTitleStyle} ${tabAreaBase}`}>
        <div>
          Living Things <br /> Encyclopedia
        </div>
      </div>
      <Logo class={logoStyle.absolute} />
      <Input class2={`${containerStyle.slider}`} class1={`${inputSearchBoxStyle.slider}`} />
      <div className={slideContainerStyle.livingTings}>
        <Swiper
          // modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <FirstSliderComp title1='Peacock' imgSource='/images/livingThings/firstSlides/peacock.png' link="livingThings/each/peacock" slideImgStyle={slideImgStyle.livingThings} slideStyle={slideCardStyle.livingThings} slideTextStyle={slideTextStyle.livingThings} />
          </SwiperSlide>

          <SwiperSlide>
            <FirstSliderComp title1='Blue-and-yellow' title2='Macaw' imgSource='/images/livingThings/firstSlides/parrot.png' link="livingThings/each/blueAndYellowMacaw" slideImgStyle={slideImgStyle.livingThings} slideStyle={slideCardStyle.livingThings} slideTextStyle={slideTextStyle.livingThings}></FirstSliderComp>
          </SwiperSlide>

          <SwiperSlide>
            <FirstSliderComp title1='Red-Eyed' title2='Tree Frog' imgSource='/images/livingThings/firstSlides/frog.png' link="livingThings/each/redEyedTreeFrog" slideImgStyle={slideImgStyle.livingThings} slideStyle={slideCardStyle.livingThings} slideTextStyle={slideTextStyle.livingThings} />
          </SwiperSlide>

          <SwiperSlide>
            <FirstSliderComp title1='Wolf' imgSource='/images/livingThings/firstSlides/wolf2.png' link="livingThings/each/wolf" slideImgStyle={slideImgStyle.livingThings} slideStyle={slideCardStyle.livingThings} slideTextStyle={slideTextStyle.livingThings} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={slideBgStyle}>
        {/* <div className={`${gradientStyle.arts} ${tabAreaBase}`}></div> */}
        <Image className={slideBgImgStyle} src='/images/livingThings/firstSlides/livingThingsSlideBG.jpg' alt="" layout='fill' />
      </div>
      {/* <div className={slideEarthStyle}>
        <Image className={slideEarthImgStyle} src="/images/common/earth-png-25612.png" alt="" />
      </div> */}
    </div >
  )
}
export default LivingThingsFirstSlider;