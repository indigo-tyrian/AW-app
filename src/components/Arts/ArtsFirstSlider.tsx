import '../styles/global.css'
import { Style, ctaTitleStyle, slideBgImgStyle, slideBgStyle, slideContainerStyle, slideCardBase, slideCardStyle, slideTextStyle, slideImgStyle } from "../styles/firstSlider.css";

import { FirstSliderComp } from '../FirstSliderComp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Input from '../Input';
import Logo from '../Logo';
import { inputSearchBoxStyle, containerStyle } from '../styles/Input.css';
import { logoStyle } from '../styles/logo.css';
import 'swiper/css';
import "swiper/css/effect-fade";
import { tabAreaBase } from '../styles/global.css';

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
        <Input class2={`${containerStyle.slider}`} class={`${inputSearchBoxStyle.slider}`} />
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
                link="arts/each/theBirthOfVenus" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.arts} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='Mona Lisa' imgSource='/images/arts/firstSlide/Mona_Lisa.jpg'
                link="arts/each/monaLisa" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.arts} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='The Lords of' title2='Montfoort' imgSource='/images/arts/firstSlide/The_Lords_of_Montfoort.jpg'
                link="arts/each/theLordsOfMontfoort" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.arts} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='The Night Watch' imgSource='/images/arts/firstSlide/The_Night_Watch.jpg'
                link="arts/each/theNightWatch" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.center} slideTextStyle={slideTextStyle.arts} />
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