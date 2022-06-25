import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  height: {
    ctaSliderPc: "45vw",
    ctaSliderPhone: "100vw",
    topicSlider: "40vw",
    pcBox: "15vw",
    tabBox: "25vw",
    phoneSideScrollHeight: "25vw",
    sideMargin: "4vw",
    input: "40px"
  },
  width: {
    phoneSideScrollWidth: "45vw",
    betweenContentsMargin: "4vw"
  },
  borderRadius: {
    pc: "1vw",
    phone: "0.5vw",
    input: "5px"
  },
  color: {
    navyBlue: '#323248',
    white: 'white',
  },
  font: {
    font1: 'Kumbh Sans, sans-serif',
    font2: "Montserrat, sans-serif",
    font3: "Rubik, sans-serif"
  }
});