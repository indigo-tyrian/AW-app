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

const FoodsFirstSlider = () => {
  return (
    <>
      <div className={Style}>
        <div className={`${ctaTitleStyle} ${tabAreaBase}`}>
          <div>
            Foods <br /> Encyclopedia
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
              <FirstSliderComp title1='Delicious' title2='Desserts' imgSource='/images/foods/firstSlide/cakes.jpg'
                link="foods/each/theBirthOfVenus" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.foods} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='In the' title2='Restaurants' imgSource='/images/foods/firstSlide/serve.jpg'
                link="foods/each/monaLisa" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.foods} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='With' title2='Friends' imgSource='/images/foods/firstSlide/table.jpg'
                link="foods/each/theLordsOfMontfoort" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.foods} />
            </SwiperSlide>

            <SwiperSlide>
              <FirstSliderComp title1='Delicious' title2='Food' imgSource='/images/foods/firstSlide/vegetable-skewer.jpg'
                link="foods/each/theNightWatch" slideImgStyle={slideImgStyle.others} slideStyle={slideCardStyle.top} slideTextStyle={slideTextStyle.foods} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default FoodsFirstSlider;