import { style } from "@vanilla-extract/css"

export const headerStyle = style({
  display: "block",
  width: "100%",
  position: "relative",
  margin: "1vw 0",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 800px)": {
    },
    "screen and (max-width: 480px)": {
      height: "80px",
    }
  },
})


export const navTextStyle = style({
  color: "white",
  fontSize: "3vw",
  fontWeight: "900",

  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: "2rem",
    },
    "screen and (max-width: 480px)": {
      fontSize: "1.2rem",
    }
  }
})




export const languageStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 200
})


export const languageContainerStyle = style({
  fontSize: "0.8rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "6vw",
  color: "white"
})


export const languageInputStyle = style({
  display: "none",
})


export const languageLabelStyle = style({
  paddingBottom: "4px",
  display: "block",
  position: "relative",
  zIndex: 1000
})


export const languageExpandStyle = style({
  display: "block",
  content: '""',
  position: "absolute",
  width: "120%",
  height: "40px",
  top: "-12px",
  left: "-12px",
  borderRadius: "25%",
  transform: "translate(10%; 0)"
})

export const languageExpandJpStyle = style({
  marginTop: "-2px",
})