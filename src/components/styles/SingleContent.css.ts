import zIndex from "@mui/material/styles/zIndex"
import { style, styleVariants } from "@vanilla-extract/css"

export const mediaStyleBase = style({
  transition: "all 0.1s linear",
  display: "flex",
  flexDirection: "column",
  margin: "5px 0",
  backgroundColor: "#282c34",
  borderRadius: "10px",
  fontFamily: '"Montserrat", sans-serif',
  "@media": {
    "screen and (max-width: 550px)": {
      width: "46%"
    }
  },
})

export const mediaStyle = styleVariants({
  pop: [mediaStyleBase,
    {
      top: "50%",
      left: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%) scale3d(2.2,2.2,1)",
      zIndex: 2,

    }
  ],
  nonpop:
    [mediaStyleBase,
      {
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%) scale3d(1,1,1)",
        zIndex: 1,
      }]
})

export const boxStyleBase = style({
  position: "relative",
  width: 200,
  height: 300,
  transition: "all 0.3s linear",

})

export const boxStyle = styleVariants({
  pop: [boxStyleBase,

    {



    }
  ],
  nonpop:
    [boxStyleBase,
      {

      }]
})



export const posterStyle = style({
  // borderRadius: "10px"
})

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

export const movieListContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  gap: 10
})