import { style, styleVariants } from "@vanilla-extract/css"

export const mediaStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "200px",
  padding: "5px",
  margin: "5px 0",
  backgroundColor: "#282c34",
  borderRadius: "10px",
  position: "relative",
  fontFamily: '"Montserrat", sans-serif',
  ":hover": {
    backgroundColor: "white",
    color: "black"
  },
  "@media": {
    "screen and (max-width: 550px)": {
      width: "46%"
    }
  },
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