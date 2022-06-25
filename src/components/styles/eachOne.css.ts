
import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'
import { allImgStyle } from "./image.css"
import { relative } from "path"


export const bigImgContainerStyle = style({
  overflow: "hidden",
  width: "100%",
  height: "60vh",
  position: "relative"
})

export const bigImgStyle = style([allImgStyle, {
  top: "50%",
  left: "50%",
}])



export const TitleNameStyle = style({
  color: "white",
  fontSize: "3vw",
  fontWeight: 900,
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  margin: "0",
  "@media": {
    "screen and (max-width: 480px)": { fontSize: "6vw" }
  }
})


export const linkContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  width: "20%",
  justifyItems: "center",
  margin: "4vw auto 0",
  fill: "white",
  "@media": {
    "screen and (max-width: 480px)": { width: "40%", gap: "2vw" }
  }
})

export const lineStyle = style({
  width: "100%",
  margin: "0vw auto 1vw",
  borderBottom: "solid 3px white",
  display: "flex",
  color: "white",
  fontSize: "2.5vw",
  "@media": {
    "screen and (max-width: 480px)": {
      fontSize: "4vw",
      marginTop: "7vw"
    }
  }
})

export const textStyle = style({
  marginLeft: "2vw",
  fontSize: "1.3vw",
  "@media": {
    "screen and (max-width: 480px)": { fontSize: "3vw" }
  }
})

export const Style = style({
  margin: "0 5vw 0 5vw",
})

export const classificationContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  marginRight: "60vw",
  gap: "1vw",
})


export const classificationItemStyle = style({
  color: "white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "6vw"
})


export const c2ContainerStyle = style({
  position: "relative",
  bottom: "0"
})
export const c2TextStyle = style({
  position: "absolute", left: "0", bottom: "0", color: "gray"
})


export const featuresItemStyle = style({
  color: "white", display: "grid", gridTemplateColumns: "1fr"
})


const baseStyle = style({
  color: "white",
  height: "auto",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "3",
})

export const descriptionTextStyle = styleVariants({
  fold: [baseStyle,
    { display: "-webkit-box", }
  ],
  expand:
    [baseStyle,
      { display: "block" }]
})


export const buttonExpandStyle = style({
  marginTop: "1vw",
  color: "blue",
  position: "relative",
  height: "5vw",
})


export const buttonContainerStyle = style({
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  backgroundColor: "transparent"
})


export const photoGalleryContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",
  gap: "0.4vw"
})


export const photoGallery = style({
  width: "22vw",
  height: "33vw",
  display: "grid",
  gap: "0.4vw",
  "@media": {
    "screen and (max-width: 480px)": { width: "60vw", height: "85vw" },
    "screen and (max-width: 800px)": { width: "40vw", height: "55vw" }
  }
})

export const photoGalleryItem = style({
  position: "relative",
  overflow: "hidden"
})
export const photoGalleryImg = style([allImgStyle, {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  aspectRatio: "16 / 9"
}])


export const A = style({
  gridTemplateColumns: "1.4fr 0.2fr 1.4fr",
  gridTemplateRows: "0.7fr 1.2fr 1.2fr 0.9fr",
  gridTemplateAreas:
    '"a-1 a-1 a-2"   "a-1 a-1 a-3"    "a-4 a-5 a-5"    "a-4 a-6 a-6"'
})


export const B = style({
  gridTemplateColumns: "1.5fr 0.2fr 1.3fr",
  gridTemplateRows: "0.8fr 1.1fr 1.3fr 0.8fr",
  gridTemplateAreas:
    '"b-1 b-2 b-2"    "b-1 b-3 b-3"    "b-4 b-4 b-5"    "b-4 b-4 b-6"'
})

export const E = style({
  gridTemplateColumns: "1.1fr 0.8fr 1.1fr",
  gridTemplateRows: "1.2fr 0.6fr 1.2fr",
  gridTemplateAreas: '"e-1 e-1 e-2"    "e-3 e-4 e-4"    "e-5 e-5 e-5"'
})


export const C = style({
  gridTemplateColumns: "0.9fr 1.1fr",
  gridTemplateRows: "1.1fr 0.9fr",
  gridTemplateAreas: '"c-1 c-1"    "c-2 c-3"'
})

export const D = style({
  gridTemplateColumns: "1.1fr 0.9fr",
  gridTemplateRows: "0.9fr 1.1fr",
  gridTemplateAreas: '"d-1 d-2"    "d-3 d-3"'
})


export const F = style({
  gridTemplateColumns: "1.3fr 0.6fr 1.1fr",
  gridTemplateRows: "1.3fr 0.6fr 1.1fr",
  gridTemplateAreas: '"f-1 f-1 f-1"    "f-2 f-2 f-3"    "f-4 f-5 f-5"'
})

// const grigList: string[] = ['a', 'b', 'c', 'd', 'e', 'f']

// grigList.map((e)={
// export const gg{} = style({
//   objectFit: "cover",
// })

// }

export const A1 = style({
  gridArea: "a-1"
})
export const A2 = style({
  gridArea: "a-2"
})
export const A3 = style({
  gridArea: "a-3"
})
export const A4 = style({
  gridArea: "a-4"
})
export const A5 = style({
  gridArea: "a-5"
})
export const A6 = style({
  gridArea: "a-6"
})

export const B1 = style({
  gridArea: "b-1"
})
export const B2 = style({
  gridArea: "b-2"
})
export const B3 = style({
  gridArea: "b-3"
})
export const B4 = style({
  gridArea: "b-4"
})
export const B5 = style({
  gridArea: "b-5"
})
export const B6 = style({
  gridArea: "b-6"
})




export const C1 = style({
  gridArea: "c-1"
})
export const C2 = style({
  gridArea: "c-2"
})
export const C3 = style({
  gridArea: "c-3"
})
export const C4 = style({
  gridArea: "c-4"
})
export const C5 = style({
  gridArea: "c-5"
})
export const C6 = style({
  gridArea: "c-6"
})





export const D1 = style({
  gridArea: "d-1"
})
export const D2 = style({
  gridArea: "d-2"
})
export const D3 = style({
  gridArea: "d-3"
})
export const D4 = style({
  gridArea: "d-4"
})
export const D5 = style({
  gridArea: "d-5"
})
export const D6 = style({
  gridArea: "d-6"
})




export const E1 = style({
  gridArea: "e-1"
})
export const E2 = style({
  gridArea: "e-2"
})
export const E3 = style({
  gridArea: "e-3"
})
export const E4 = style({
  gridArea: "e-4"
})
export const E5 = style({
  gridArea: "e-5"
})
export const E6 = style({
  gridArea: "e-6"
})




export const F1 = style({
  gridArea: "f-1"
})
export const F2 = style({
  gridArea: "f-2"
})
export const F3 = style({
  gridArea: "f-3"
})
export const F4 = style({
  gridArea: "f-4"
})
export const F5 = style({
  gridArea: "f-5"
})
export const F6 = style({
  gridArea: "f-6"
})


export const containerStyle = style({
  backgroundColor: "gray",
  borderRadius: 20,
  padding: 20,
  margin: 20
})




