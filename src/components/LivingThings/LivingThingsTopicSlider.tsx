import '../styles/global.css'
import { TopicSliderComp } from '../TopicSliderComp'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import { containerStyle } from '../styles/topic/topicSlider.css';
const LivingThingsTopicSlider = () => {
  return (
    <div className={containerStyle}>
      <Swiper
        centeredSlides={false}
        grabCursor={true}
        spaceBetween={50}
        loop={false}
        freeMode={true}
        modules={[FreeMode]}
        slidesPerView={1.5}

        breakpoints={{
          800: {
            slidesPerView: 2.5,
          },
        }}
      >
        <SwiperSlide>
          <TopicSliderComp title='Oryx'
            text="Oryx's pelage is pale with contrasting dark markings in the face and on the legs."
            imgSource='/images/livingThings/each/oryx.jpg' link="/livingThings/each/oryx" />
        </SwiperSlide>

        <SwiperSlide>
          <TopicSliderComp title='African Elephant'
            text='African elephants are the largest land animals on Earth.'
            imgSource='/images/livingThings/each/elephant.jpg' link="/livingThings/each/africanElephant" />
        </SwiperSlide>

        <SwiperSlide>
          <TopicSliderComp title='Squirrel'
            text='The squirrel family includes tree squirrels, ground squirrels, and flying squirrels.'
            imgSource='/images/livingThings/each/squirrels.jpg' link="/livingThings/each/squirrels" />
        </SwiperSlide>
        <SwiperSlide>
          <TopicSliderComp title='Tiger'
            text='Tiger is the largest wild cat in the world. Its coat is reddish-orange
            with dark stripes'
            imgSource='/images/livingThings/each/tiger.jpg' link="/livingThings/each/tiger" />
        </SwiperSlide>
      </Swiper >
    </div>
  )
}

export default LivingThingsTopicSlider