import 'src/components/styles/global.css'
import { TopicSliderComp } from 'src/components/TopicSliderComp'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import { containerStyle } from 'src/components/styles/topic/topicSlider.css';
const LivingThingsTopicSlider = () => {
  return (
    <div className={containerStyle}>
      <Swiper
        centeredSlides={false}
        grabCursor={true}
        spaceBetween={2}
        loop={false}
        freeMode={true}
        modules={[FreeMode]}
        slidesPerView={1.5}
        breakpoints={{
          480: {
            slidesPerView: 2.5,
            spaceBetween: 3
          },
          800: {
            slidesPerView: 2.5,
            spaceBetween: 5

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
            imgSource='/images/livingThings/each/elephant.jpg' link="/livingThings/each/african-elephant" />
        </SwiperSlide>

        <SwiperSlide>
          <TopicSliderComp title='Squirrel'
            text='The squirrel family includes tree squirrels, ground squirrels, and flying squirrels.'
            imgSource='/images/livingThings/each/squirrel.jpg' link="/livingThings/each/squirrel" />
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