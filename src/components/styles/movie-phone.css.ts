import { style, styleVariants } from "@vanilla-extract/css"

export const phoneStyle = style({

})

export const phoneBgStyle = style({
  backgroundPosition: "calc((((100vw / 2.222222) - 20px) / 1.5) / 2) 0",
})

export const phoneCustomBgStyle = style({
  backgroundImage:
    "linear-gradient(90deg, rgba(92,232,255,1) 0%, rgba(0,91,255,0.19385039171918772) 100%)",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
})



export const phonePosterStyle = style({
  display: "block",
  width: "100%",
  minWidth: "100%",
  height: "100%",
  minHeight: "100%",
  borderWidth: "0px",
  outline: "none"
})

export const phonePosterContainerStyle = style({




  position: "absolute",
  top: "20px",
  left: "20px",
  width: "30vw",
  height: "45vw"
  // width: "calc(((100vw / 2.222222) - 40px) / 1.5)",
  // minWidth: "calc(((100vw / 2.222222) - 40px) / 1.5)",
  // height: "calc((100vw / 2.222222) - 40px)",
  // minHeight: "calc((100vw / 2.222222) - 40px)",
  // borderRadius: "var(--imageBorderRadius)",
  // zIndex: 4
})


export const phoneDescriptionContainerStyle = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  alignContent: "center",
  boxSizing: "border-box",
  paddingLeft: "40px"
})


export const phoneFirstContainerStyle = style({
  display: "flex",

})

export const phoneFirstContainer2Style = style({
  paddingTop: "30px",
  paddingBottom: "30px",
  paddingLeft: "40px",
  paddingRight: "40px",
  maxWidth: 1200
})


export const phoneTitleContainerStyle = style({
  width: "100%",
  // display: "grid",
  // gridTemplateRows: "2fr 1fr",
  // gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
  // gridTemplateAreas: "title title title date date"
  //                      "category runtime "
  //                      "genres genres  genres genres"
})


export const phoneTitleStyle = style({
  fontSize: "3rem",
  fontWeight: 800,
  fontFamily: 'Sans-Serif'
  // gridColumn: "1 / 2",
  // gridRow:"4 / 6"
})

export const phoneDateStyle = style({
  fontSize: "3rem",
  marginLeft: "1rem",
  opacity: 0.8,
  fontWeight: 400
  // gridColumn: "2 / 3",
})

export const phoneRunTimeStyle = style({
})

export const phoneCategoryStyle = style({
})

export const phoneGenresStyle = style({
  display: "flex",
  gap: 10
})
export const phoneTitleAndDateStyle = style({
  display: "flex",

})
export const phoneRunTimeAndGenresStyle = style({
  display: "flex",
  gap: 50
})
export const phoneOverViewContainerStyle = style({
  marginTop: 50,
})

export const phoneRatingContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: 30
})

export const phoneComprehensionRatingStyle = style({
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center"
})
export const phoneRatingStarStyle = style({
  display: "flex",
  justifyContent: "center"
})
export const phoneRatingTextStyle = style({
  textAlign: "center",
  fontSize: "1.5rem"
})
export const phoneComprehensiveRatingTextStyle = style({
  fontSize: "2rem"
})

export const phoneRatingEachStyle = style({
  // display: "flex"
})


export const phoneFfContainerStyle = style({
  margin: "3vw 3vw 0",

})



export const phoneTextContainerStyle = style({
  margin: "5vw 0",
  display: "grid",
  gridTemplateColumns: "1fr 2.5fr 1fr",
  gridTemplateAreas: '"right header left" "right media left"'
})

export const phoneTextTitleStyle = style({
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

export const phoneTextContentsStyle = style({
  lineHeight: 1.5,
  fontSize: "1.0625rem",
  gridArea: "media",
  "@media": {
    "screen and (max-width: 480px)": { fontSize: "3vw" }
  }
})




import { allImgStyle } from "./image.css"


export const phoneBigImgContainerStyle = style({
  overflow: "hidden",
  width: "100%",
  height: "60vh",
  position: "relative"
})

export const phoneMediumImgContainerStyle = style({
  overflow: "hidden",
  width: "100%",
  height: "60vh",
  position: "relative"
})

export const phoneImgStyle = style([allImgStyle, {
  top: "50%",
  left: "50%",
}])



export const phoneTitleNameStyle = style({
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



export const phoneRightContentsStyle = style({
  gridArea: "right"
})

export const phoneLeftContentsStyle = style({
  gridArea: "left"
})

export const phoneParagraphStyle = style({
  margin: "0 0 1rem 0",
})


















