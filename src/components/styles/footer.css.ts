import { style } from "@vanilla-extract/css"

export const Style = style({
  backgroundColor: "black",
  padding: "3vw 3vw",
})


export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "1rem",
  marginTop: "1vw",
  padding: "20px 10vw 30px",
  "@media": {
    "screen and (max-width: 800px)": { gridTemplateColumns: "1fr" }
  },
})


export const buttonStyle = style({
  fontSize: "0.8rem",
  color: "white",
  backgroundColor: "black",
  border: "none",
  padding: "0",
  outline: "inherit",
  WebkitAppearance: "none"
})

