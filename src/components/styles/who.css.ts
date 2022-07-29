import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'

export const allStyle = style({
  background: "linear-gradient(to right, #f2994a, #f2c94c)",
  margin: 0,
  padding: 0,
})

export const profileDescContainerStyle = style({
  display: "grid",
  // justifyContent: "space-between",
  padding: "2vw 10vw 5vw",
  gap: "5vw",
  gridTemplateColumns: "1fr 1fr",

  "@media": {
    "screen and (max-width: 800px)": {
    },
    "screen and (max-width: 480px)": {
    }
  },
})

export const titleStyle = style({
  fontSize: "2.5vw",
  margin: "1vw auto",
  textAlign: "center"
})


export const creatorBox = style({
  color: "white",
  width: "45%"
})

export const developerBox = style({
  color: "white",
  width: "45%"
})

export const listBoxBase = style({
  padding: "1vw",
  borderRadius: "1vw",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  // height: "100%"
})

export const listBox = styleVariants({
  develop: [listBoxBase,
    {
      background: "yellowgreen",

    }
  ],
  create:
    [listBoxBase,
      {
        background: "skyblue",
      }]
})






export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr ",
  gridTemplateRows: "1fr 1fr ",
  gridTemplateAreas: '"title image" "description image"',
  // gap: "10rem",
  padding: "2vw 3vw 5vw 3vw",
  // height: "30vw"
  // padding: "20px 20vw 30px",

})

export const headDescriptionStyle = style({
  gridArea: "description",
  fontSize: "3vw"
})

export const headImageStyle = style({
  gridArea: "image",
  margin: "1vw 4vw 1vw 4vw"
})

export const headTitleStyle = style({
  gridArea: "title",
  fontSize: "7vw"
})

