import { style, styleVariants } from "@vanilla-extract/css"


export const knowledgeEachContainerStyle = style({
  margin: "5vw 0",
  display: "grid",
  gridTemplateColumns: "1fr 2.5fr 1fr",
  gridTemplateAreas: '"right media left"'
})

export const mediaStyle = style({
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