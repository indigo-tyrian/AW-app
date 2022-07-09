import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'



export const boxStyle = style({
  display: "flex",
  paddingTop: 24
})
export const barStyle = style({
  backgroundColor: "rgba(230, 230, 230, 1)",
  height: 1
})

export const box2Style = style({
  justifyContent: "center"
})



export const textContainerStyle = style({

})
export const titleStyle = style({
  fontSize: "2vw",
  paddingBottom: 10

})

export const textStyle = style({
  fontSize: "1.2vw"
})


export const knowledgeListContainerStyle = style({
  margin: "5vw 0",
  display: "grid",
  gridTemplateColumns: "1fr 2.5fr 1fr",
  gridTemplateAreas: '"right media left"'
})

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  gridArea: "media",
  // gridTemplateColumns: "repeat(6, 1fr)"
})

export const rightContentsStyle = style({
  gridArea: "right"
})

export const leftContentsStyle = style({
  gridArea: "left"
})


export const imageStyle = style({
  marginLeft: 60
})

export const infoStyle = style({
  padding: "32px 0px"
})

// export const knowledgeListMediaStyle = style({
//   lineHeight: 1.5,
//   fontSize: "1.0625rem",
//   gridArea: "media",
//   "@media": {
//     "screen and (max-width: 480px)": { fontSize: "3vw" }
//   }
// })