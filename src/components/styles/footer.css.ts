import { style } from "@vanilla-extract/css"

export const Style = style({
  backgroundColor: "black",
  padding: "2vw 3vw 0.5vw 3vw ",
})


export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10rem",
  margin: "1vw 0 ",
  padding: "20px 20vw 30px",
  "@media": {
    "screen and (max-width: 800px)": { gridTemplateColumns: "1fr" }
  },
})


export const buttonStyle = style({
  padding: "5px 10px",
  fontSize: "1.2rem",
  color: "white",
  backgroundColor: "rgba(0,0,0,0)",
  border: "2px white solid",
  borderRadius: "10px",
  outline: "inherit",
  WebkitAppearance: "none",
  display: "flex",
  justifyContent: "center"

})


export const allRightsStyle = style({
  display: "flex",
  justifyContent: "center",
  fontSize: "0.8vw",

})

