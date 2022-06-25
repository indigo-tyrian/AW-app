import { style } from "@vanilla-extract/css"
import { vars } from '../theme.css'

export const overlayGradientStyle = style({
  position: "absolute",
  width: "100%",
  height: "40%",
  bottom: "0",
  left: "0",
  background:
    "linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #000000 100%)",
})

export const descriptionContainerStyle = style({
  position: "absolute",
  bottom: "0.4vw",
  color: "white",
  padding: "0 2% 0 2%",
  textAlign: "left"
})

export const descriptionText = style({
  display: "block",
  marginTop: "20px",
  fontSize: "1.5vw",
  lineHeight: "150%",
  "@media": { "screen and (max-width: 800px)": { fontSize: "15px" } }

})

export const descriptionTitleStyle = style({
  fontSize: "2.8vw",
  fontWeight: 700,
  color: "white",
  "@media": { "screen and (max-width: 800px)": { fontSize: "30px" } }
})

export const containerStyle = style({
  // height: vars.height.topicSlider
  marginLeft: "15vw",
  marginRight: "15vw",
  "@media":
  {
    "screen and (max-width: 480px)":
    {
      marginLeft: "10vw",
      marginRight: "10vw",
    }
  }
})

export const slideStyle = style({
  position: "relative",
  height: "30vw",
  width: "30vw",
  overflow: "hidden",
  "@media":
  {
    "screen and (max-width: 800px)":
    {
      height: "50vw",
      width: "50vw",
    },
    "screen and (max-width: 480px)":
    {
      height: "80vw",
      width: "60vw",
    }
  }
})