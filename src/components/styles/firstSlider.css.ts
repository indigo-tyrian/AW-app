import { style, styleVariants } from "@vanilla-extract/css"
import { allImgStyle } from "./image.css"
import { vars } from './theme.css'




export const Style = style({
  zIndex: 0,
  width: "100%",
  overflow: "hidden",
  position: "relative",
  height: vars.height.ctaSliderPc,
  "@media": {
    "screen and (max-width: 480px)": {
      height: vars.height.ctaSliderPhone,
    },
  }
})




export const ctaTitleStyle = style({
  // fontSize: "5vw",
  // fontWeight: "bolder",
  // position: "absolute",
  // top: "25%",
  // left: "8%",
  // color: "white",
  // textShadow: "1px 1px black",
  // zIndex: 5,
  // "@media": {
  //   "screen and (max-width: 800px)": {
  //     top: "30%",
  //   },
  // }
  padding: "0.5vw",
  fontSize: "5vw",
  fontWeight: "bolder",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  // textShadow: "1px 1px black",
  backgroundColor: "rgba(80, 80, 80, 0.6)",
  zIndex: 5,
  "@media": {
    "screen and (max-width: 800px)": {
      top: "30%",
    },
  }
})


export const slideCardBase = style({
  position: "relative",
  zIndex: 3,
  height: vars.height.ctaSliderPc,
  "@media": {
    "screen and (max-width: 480px)": {
      paddingLeft: "0",
      height: vars.height.ctaSliderPhone,
    },
  }
})

export const slideCardStyle = styleVariants({
  livingThings:
    [slideCardBase,
      {
      }
    ],
  top:
    [slideCardBase,
      {

      }
    ],
  center:
    [slideCardBase,
      {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    ]
})



const slideImgBase = style({
  position: "absolute",
})

export const slideImgStyle = styleVariants({
  livingThings: [slideImgBase,
    {
      height: "90%",
      right: 0,
      bottom: 0
    }
  ],
  others:
    [slideImgBase,
      {
        objectFit: "cover"
      }
    ]
})


const slideTextBase = style({
  fontSize: "3vw",
  fontWeight: "bolder",
  position: "absolute",
  color: "white",
  bottom: "5%",
  left: "55%",
  transition: "unset",
  textTransform: "uppercase",
  whiteSpace: "pre-wrap",
  "@media": {
    "screen and (max-width: 480px)": {
      fontSize: "6vw",
      bottom: "5%",
      left: "15%"
    }
  }
})

export const slideTextStyle = styleVariants({
  livingThings: [slideTextBase,
    {
    }
  ],
  foods:
    [slideTextBase,
      {

      }
    ], arts:
    [slideTextBase,
      {

      }]
})

const slideContainerBase = style({
  position: "absolute",
  // height: vars.height.ctaSliderPc,
  // height: "93%",
  width: "100%",
  height: "100%",
})

export const slideContainerStyle = styleVariants({
  livingTings: [slideContainerBase,
    {
      zIndex: 2,
      bottom: 0,
    }
  ],
  others:
    [slideContainerBase,
      {
        objectFit: "cover",
        zIndex: 1,
      }]
})

export const slideBgStyle = style({
  position: "absolute",
  height: vars.height.ctaSliderPc,
  width: "100%",
  objectFit: "cover",
  zIndex: 1,
})

export const slideBgImgStyle = style({
  width: "100%",
  height: "auto",

})


export const slideEarthStyle = style({
  zIndex: 4,
  position: "absolute",
  // display: "none"
})

export const slideEarthImgStyle = style({
  height: 500,
  width: 500,
  position: "absolute",
  left: -100,
  top: 150
})


// export const gradientBase = style({
//   position: "absolute",
//   zIndex: 1,
//   left: 0,
//   width: "50%",
//   height: "100%",
//   background: "linear-gradient(90deg,#323248 50%, rgba(0,0,0,0) )",
//   pointerEvents: "none"
// })

// export const gradientStyle = styleVariants({
//   livingThings: [gradientBase,
//     {
//       zIndex: 1,
//     }
//   ],
//   arts:
//     [gradientBase,
//       {
//         zIndex: 1,
//       }]
// })


// export const prevBtnStyle = style({
//   top: "40%", left: "5%"
// })


// export const nextBtnStyle = style({
//   top: "40%", right: "5%"
// })