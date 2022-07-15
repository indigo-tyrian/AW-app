import 'src/components/styles/global.css'
import { Style, ctaTitleStyle, slideBgImgStyle, slideBgStyle, slideContainerStyle, slideCardBase, slideCardStyle, slideTextStyle, slideImgStyle } from "src/components/styles/firstSlider.css";

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
import { nextImageAdjustment } from '../styles/nextImage.css';
import Link from 'next/link'

const AtrsFirstSlider = () => {
  return (
    <>
      <div className={Style}>
        <div className={`${ctaTitleStyle} ${tabAreaBase}`}>
          <div>
            Arts <br /> Encyclopedia
          </div>
        </div>
        <Logo class={logoStyle.absolute} />
        <Input class2={`${containerStyle.slider}`} class1={`${inputSearchBoxStyle.slider}`} />
        <div className={slideContainerStyle.others}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
          // autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <FirstSliderComp title1='The Birth of' title2='Venus' imgSource='/images/arts/firstSlide/La_nascita_di_Venere.jpg'
                link="arts/each/la-nascita-di-venere" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.arts} nextImageAdjustment={nextImageAdjustment.landscape} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='Mona Lisa' imgSource='/images/arts/firstSlide/Mona_Lisa.jpg'
                link="arts/each/mona-lisa" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.arts} nextImageAdjustment={nextImageAdjustment.landscape} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='The Lords of' title2='Montfoort' imgSource='/images/arts/firstSlide/The_Lords_of_Montfoort.jpg'
                link="arts/each/the-lords-of-montfoort" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.arts} nextImageAdjustment={nextImageAdjustment.landscape} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='The Night Watch' imgSource='/images/arts/firstSlide/The_Night_Watch.jpg'
                link="arts/each/the-night-watch" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.center} slideTextStyle={slideTextStyle.arts} nextImageAdjustment={nextImageAdjustment.landscape} />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className={slideBgStyle}>
          <div className={gradientStyle.arts}></div>
        </div> */}
      </div>
    </>
  )
}
export default AtrsFirstSlider;