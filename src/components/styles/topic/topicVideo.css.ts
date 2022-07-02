import { style } from "@vanilla-extract/css"
import { vars } from '../theme.css'

export const Style = style({
  width: "100%",
  position: "relative",
  // gridArea: "video",

})

export const videoDescriptionContainerStyle = style({
  bottom: "1vw"

})

export const videoStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: vars.borderRadius.pc,
  "@media": {
    "screen and (max-width: 480px)": {
      borderRadius: vars.borderRadius.phone
    }
  }
})

export const videoOverlayGradientStyle = style({
  borderBottomLeftRadius: vars.borderRadius.pc,
  borderBottomRightRadius: vars.borderRadius.pc,
  "@media": {
    "screen and (max-width: 480px)": {
      borderBottomLeftRadius: vars.borderRadius.phone,
      borderBottomRightRadius: vars.borderRadius.phone
    }
  }
})