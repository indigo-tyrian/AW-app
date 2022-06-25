import { style, styleVariants } from "@vanilla-extract/css"
export const countryNameMovableContainerStyle = style({
  pointerEvents: "none",
  position: "fixed",
  top: "20px",
  left: "20px",
  height: "auto",
  fontWeight: "bold",
  textAlign: "center",
  display: "none",
  transform: "translate(0, 0)",
  zIndex: 10000,
  "@media": {
    "screen and (max-width: 480px)": {
      position: "absolute",
      top: "70%",
      left: "80%",
      transform: "translateX(-50%, -50%)",
      WebkitTransform: "translateX(-50%, -50%)",
      msTransform: "translateX(-50%, -50%)",
      display: "block"
    }
  }
})


export const countryNameMovableStyle = style({
  textAlign: "center",
  pointerEvents: "none",
  color: "white",
  fontSize: "30px",
  zIndex: 99999,
  "@media": {
    "screen and (max-width: 480px)": { display: "none" }
  }
})