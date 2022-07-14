import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'

export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  "@media": {
    "screen and (max-width: 800px)": {
      gridTemplateColumns: "1fr 1fr"
    }, "screen and (max-width: 480px)": {
      gap: "10px"
    }
  }
}
)


export const boxStyle = style({
  position: "relative",
  height: vars.height.pcBox,
  borderRadius: vars.borderRadius.pc,
  overflow: "hidden",
  border: "solid white 0.2vw",
  boxShadow: "black 0 2vw 2vw -1vw",
  "@media": {
    "screen and (max-width: 800px)": {
      height: vars.height.tabBox
    }, "screen and (max-width: 480px)": {
      border: "none",
      boxShadow: "none",
      width: vars.width.phoneSideScrollWidth,
      height: vars.height.phoneSideScrollHeight,
      borderRadius: vars.borderRadius.phone
    },
  }
})


export const homeBoxStyle = styleVariants({
  home: [boxStyle,
    {
      border: "solid black 0.2vw",
    }
  ]
})


const overlayBasic = style({
  backgroundColor: "black",
  width: "100%",
  height: "100%",
  position: "absolute",
  bottom: "0",
  left: "0",
  transition: "all 0.3s linear",
  borderRadius: vars.borderRadius.pc,
  zIndex: 2,
  "@media": {
    "screen and (max-width: 480px)": {
      borderRadius: vars.borderRadius.phone
    }
  }
})

export const overlayStyle = styleVariants({
  grayOut: [overlayBasic,
    {
      opacity: "0.3"
    }
  ],
  nonGrayOut:
    [overlayBasic,
      {
        opacity: "0"
      }]
})



export const gradientStyle = style({
  position: "absolute",
  width: "100%",
  height: "70%",
  bottom: "0",
  left: "0",
  background:
    "linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #000000 100%)",
  borderBottomLeftRadius: vars.borderRadius.pc,
  borderBottomRightRadius: vars.borderRadius.pc,
  "@media": {
    "screen and (max-width: 480px)": {
      borderBottomLeftRadius: vars.borderRadius.phone,
      borderBottomRightRadius: vars.borderRadius.phone
    }
  }
})
import { allImgStyle } from "./image.css"

const imgBasic = style([allImgStyle, {
  transition: "all 0.2s linear",
}])

export const imgStyle = styleVariants({
  nonFocus: [imgBasic,
    {
      transform: "scale(1)",
    }
  ],
  focus:
    [imgBasic,
      {
        transform: "scale(1.1)",
      }]
})