import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'



export const profileDescContainerStyle = style({
  display: "flex",
  margin: "2vw 20vw 5vw",
})

export const titleStyle = style({
  fontSize: "2vw"
})


export const creatorBox = style({
  color: "white",
  backgroundColor: "green"
})

export const developerBox = style({
  color: "white",
  backgroundColor: "orange"
})



export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8rf ",
  gridTemplateRows: "1.2fr 0.8rf ",
  gridTemplateAreas: '"title image" "description image"',
  // gap: "10rem",
  margin: "2vw 3vw 5vw 3vw",
  // height: "30vw"
  // padding: "20px 20vw 30px",
})

export const headDescriptionStyle = style({
  gridArea: "description",
  fontSize: "3vw"
})

export const headImageStyle = style({
  gridArea: "image",
  margin: "4vw"
})

export const headTitleStyle = style({
  gridArea: "title",
  fontSize: "7vw"
})
