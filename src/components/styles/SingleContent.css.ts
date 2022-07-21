import zIndex from "@mui/material/styles/zIndex"
import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'


export const boxStyleBase = style({
  position: "relative",
  // height: "10vw",
  height: "20vw",
  // transition: "all 0.3s linear",
  transition: "all 0.1s linear",
  boxShadow: "black 0 2vw 2vw -1vw",
  borderRadius: vars.borderRadius.pc,
  overflow: "hidden",
  // boxSizing: "border-box",
  "@media": {
    "screen and (max-width: 480px)": {
      height: "120px",
    }
  },

})

export const boxStyle = styleVariants({
  pop: [boxStyleBase,

    {

      transform: 'scale(1.05)'
    }
  ],
  nonpop:
    [boxStyleBase,
      {
        transform: 'scale(1)'
      }]
})



export const mediaStyleBase = style({
  transition: "all 0.1s linear",
  // transitionDelay: "0.5s",
  display: "flex",
  flexDirection: "column",
  // margin: "5px 0",
  backgroundColor: "#282c34",
  fontFamily: '"Montserrat", sans-serif',
  borderRadius: vars.borderRadius.pc,
  width: "100%",
  height: "100%",

  objectFit: "cover",
  position: "absolute",
  "@media": {
    "screen and (max-width: 550px)": {
      // width: "46%"
    }
  },
})

export const mediaStyle = styleVariants({
  pop: [mediaStyleBase,
    {

      // border: "solid white 10px",
      // top: "50%",
      // left: "50%",
      // position: "absolute",
      // transform: "translate(-50%, -50%) scale3d(1.1,1.1,1)",
      zIndex: 2,
    }
  ],
  nonpop:
    [mediaStyleBase,
      {
        // top: "50%",
        // left: "50%",
        position: "absolute",
        zIndex: 1,
        // transform: "translate(-50%, -50%) scale3d(1,1,1)",
      }]
})

export const borderBoxStyleBase = style({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  position: "absolute",
  zIndex: 3,
  borderRadius: vars.borderRadius.pc,
  transition: "all 0.1s linear",


})

export const borderBoxStyle = styleVariants({
  pop: [borderBoxStyleBase,
    {
      border: " 4px solid rgba(255,255,255,.7);",
    }
  ],
  nonpop:
    [borderBoxStyleBase,
      {

      }]
})






// export const posterStyle = style({
//   // borderRadius: "10px"
// })

export const titleStyle = style({
  width: "100%",
  textAlign: "center",
  fontSize: "17px",
  padding: "8px 0"
})
export const subTitleStyle = style({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: ["3px", "3px"],
  padding: "0 2px"
})

export const movieContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  gridArea: "media",
  "@media": {
    "screen and (max-width: 550px)": {
      margin: "0 20px",
      gap: "5px",
    }
  },
})






export const movieListContainerStyle = style({
  margin: "5vw 0",
  display: "grid",
  gridTemplateColumns: "1fr 2.5fr 1fr",
  gridTemplateAreas: '"left media right"',
  "@media": {
    "screen and (max-width: 480px)": {
      // width: "46%"
      gridTemplateColumns: "1fr",
      gridTemplateAreas: '"right" "media" "left"',
    }
  },
})

export const rightContentsStyle = style({
  gridArea: "right"
})

export const leftContentsStyle = style({
  gridArea: "left"
})
