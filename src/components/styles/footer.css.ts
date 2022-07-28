import { style } from "@vanilla-extract/css"

export const Style = style({
  backgroundColor: "black",
  padding: "2vw 3vw 0.5vw 3vw ",
  "@media": {
    "screen and (max-width: 800px)": {
      padding: "2vw 3vw 1vw 3vw ",
    }
  },
})


export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10rem",
  margin: "1vw 0 ",
  padding: "20px 20vw 30px",
  widows: "100%",
  "@media": {
    "screen and (max-width: 800px)": {
      gap: "4vw",
      padding: "3vw 5vw 4vw",
    }
  },
})


export const buttonStyle = style({
  padding: "0.5vw 1vw",
  fontSize: "1.2rem",
  color: "white",
  backgroundColor: "rgba(0,0,0,0)",
  border: "2px white solid",
  borderRadius: "10px",
  outline: "inherit",
  WebkitAppearance: "none",
  display: "flex",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: "3vw",
      padding: "1vw 0.5vw",
    }
  },

})


export const allRightsStyle = style({
  display: "flex",
  justifyContent: "center",
  fontSize: "0.8vw",
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: "2vw",
    }
  },
})

