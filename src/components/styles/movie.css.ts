import { style, styleVariants } from "@vanilla-extract/css"

export const Style = style({

})

export const BgStyle = style({
  backgroundPosition: "right -200px top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

})

export const customBgStyle = style({
  backgroundImage:
    "linear-gradient(90deg, rgba(92,232,255,1) 0%, rgba(0,91,255,0.19385039171918772) 100%)",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
})



export const posterStyle = style({
  display: "block",
  width: "100%",
  minWidth: "100%",
  height: "100%",
  minHeight: "100%",
  borderWidth: "0px",
  outline: "none"
})

export const posterContainerStyle = style({
  borderWidth: "0px",
  minWidth: "300px",
  width: "300px",
  height: "450px",
  overflow: "hidden"
})


export const descriptionContainerStyle = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  alignContent: "center",
  boxSizing: "border-box",
  paddingLeft: "40px"
})


export const firstContainerStyle = style({
  display: "flex",

})

export const firstContainer2Style = style({
  paddingTop: "30px",
  paddingBottom: "30px",
  paddingLeft: "40px",
  paddingRight: "40px",
  maxWidth: 1200
})


export const titleContainerStyle = style({
  width: "100%",
  // display: "grid",
  // gridTemplateRows: "2fr 1fr",
  // gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
  // gridTemplateAreas: "title title title date date"
  //                      "category runtime "
  //                      "genres genres  genres genres"
})


export const titleStyle = style({
  fontSize: "3rem",
  fontWeight: 800,
  fontFamily: 'Sans-Serif'
  // gridColumn: "1 / 2",
  // gridRow:"4 / 6"
})

export const dateStyle = style({
  fontSize: "3rem",
  marginLeft: "1rem",
  opacity: 0.8,
  fontWeight: 400
  // gridColumn: "2 / 3",
})

export const runTimeStyle = style({
})

export const categoryStyle = style({
})

export const genresStyle = style({
  display: "flex",
  gap: 10
})
export const titleAndDateStyle = style({
  display: "flex",

})
export const runTimeAndGenresStyle = style({
  display: "flex",
  gap: 50
})
export const overViewContainerStyle = style({
  marginTop: 50,
})

export const ratingContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: 30
})

export const comprehensionRatingStyle = style({
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center"
})
export const ratingStarStyle = style({
  display: "flex",
  justifyContent: "center"
})
export const ratingTextStyle = style({
  textAlign: "center",
  fontSize: "1.5rem"
})
export const comprehensiveRatingTextStyle = style({
  fontSize: "2rem"
})

export const ratingEachStyle = style({
  // display: "flex"
})


export const ffContainerStyle = style({
  margin: "3vw 3vw 0",

})



export const textContainerStyle = style({
  margin: "5vw 0",
  display: "grid",
  gridTemplateColumns: "1fr 2.5fr 1fr",
  gridTemplateAreas: '"right header left" "right media left"'
})

export const textTitleStyle = style({
  gridArea: "header",
  lineHeight: 1.15,
  fontWeight: 500,
  width: "100%",
  margin: "0vw auto 1vw",
  display: "flex",
  fontSize: "4.2rem",
  "@media": {
    "screen and (max-width: 480px)": {
      fontSize: "4vw",
      marginTop: "7vw"
    }
  }
})

export const textContentsStyle = style({
  lineHeight: 1.5,
  fontSize: "1.0625rem",
  gridArea: "media",
  "@media": {
    "screen and (max-width: 480px)": { fontSize: "3vw" }
  }
})




import { allImgStyle } from "./image.css"


export const bigImgContainerStyle = style({
  overflow: "hidden",
  width: "100%",
  height: "60vh",
  position: "relative"
})

export const mediumImgContainerStyle = style({
  overflow: "hidden",
  width: "100%",
  height: "60vh",
  position: "relative"
})

export const imgStyle = style([allImgStyle, {
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



export const rightContentsStyle = style({
  gridArea: "right"
})

export const leftContentsStyle = style({
  gridArea: "left"
})

export const paragraphStyle = style({
  margin: "0 0 1rem 0",
})






