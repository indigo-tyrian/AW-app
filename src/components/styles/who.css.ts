import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'






export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateAreas: '"title image" "description image"',
  // gap: "10rem",
  margin: "2vw 3vw 5vw 3vw",
  // padding: "20px 20vw 30px",
})

export const descriptionStyle = style({
  gridArea: "description",
  fontSize: "3vw"
})

export const imageStyle = style({
  gridArea: "image",
})

export const titleStyle = style({
  gridArea: "title",
  fontSize: "7vw"
})
