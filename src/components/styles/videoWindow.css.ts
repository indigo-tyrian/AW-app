import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'
import { allImgStyle } from "./image.css"

export const viewStyle = style({
  "@media": {
    "screen and (max-width: 480px)": { width: "100vw" }
  }
})

export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  "@media": {
    "screen and (max-width: 800px)": {
      gridTemplateColumns: "repeat(2, 1fr)"
    },
    "screen and (max-width: 480px)": {
      gap: "5px",
    }
  },
})



const boxBasic = style({
  background: "linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42))",
  borderRadius: vars.borderRadius.pc,
  position: "relative",
  transition: "all 0.1s linear",
  boxShadow: "black 0 2vw 2vw -1vw",
  height: "13vw",
  "@media": {
    "screen and (max-width: 800px)": {
      height: vars.height.tabBox
    },
    "screen and (max-width: 480px)": {
      background: "none",
      borderRadius: vars.borderRadius.phone,
      border: "none",
      transition: "none",
      boxShadow: "none",
      width: "55vw",
      height: "55vw"
    }
  },
})

export const boxStyle = styleVariants({
  bigger: [boxBasic,
    {
      border: 'white solid 0.3vw',
      transform: 'scale(1.1)'
    }
  ],
  small:
    [boxBasic,
      {
        border: "gray solid 0.3vw",
        transform: 'scale(1)'
      }]
})



const videoBasic = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  top: "0px",
  transition: "all 0.4s linear",
  borderRadius: vars.borderRadius.pc,
  zIndex: 1,
  "@media": {
    "screen and (max-width: 480px)": {
      opacity: 100,
      borderRadius: vars.borderRadius.phone
    }
  }
})


export const videoStyle = styleVariants({
  appears: [videoBasic,
    {
      opacity: 100
    }
  ],
  disappears:
    [videoBasic,
      {
        opacity: 0
      }]
})



export const imgStyle = style([
  allImgStyle, {
    zIndex: 0,
    "@media": {
      "screen and (max-width: 480px)": {
        borderRadius: vars.borderRadius.phone
      }
    }
  }])





