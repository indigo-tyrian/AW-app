import { style } from "@vanilla-extract/css"


export const comingSoonStyle = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  bottom: "0",
  left: "0",
  backgroundColor: "rgba(76, 43, 148,0.6)",
  zIndex: 10
})
export const comingSoonText = style({
  fontSize: "3vw",
  fontWeight: 700,
  color: "rgba(255, 255, 255,0.5)",
  textTransform: "uppercase",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  WebkitTransform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  textAlign: "center",
})


export const comingSoonText2 = style({
  fontSize: "8vw",
  fontWeight: 700,
  textTransform: "uppercase",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  WebkitTransform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  textAlign: "center",
})