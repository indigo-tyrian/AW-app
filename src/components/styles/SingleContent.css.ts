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
      top: -10,
      position: "absolute",
    }
  ],
  nonpop:
    [mediaStyleBase,
      {

      }]
})

export const boxStyleBase = style({
  position: "relative",
  transition: "all 0.1s linear",

})

export const boxStyle = styleVariants({
  pop: [boxStyleBase,

    {
      width: 250,
      hight: 300,


    }
  ],
  nonpop:
    [boxStyleBase,
      {
        width: 200,
        hight: 300,
      }]
})



export const posterStyle = style({
  borderRadius: "10px"
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
  gridTemplateColumns: "repeat(6, 1fr)"
})