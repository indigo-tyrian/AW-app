import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const allImgStyle = style({
  height: "100%",
  width: "100%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
  aspectRatio: "16 / 9",
})



// "@media": {
//   "screen and (max-width: 480px)": {
//     borderRadius: vars.borderRadius.phone
//   }