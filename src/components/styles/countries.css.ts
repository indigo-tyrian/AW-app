import { style, globalStyle } from "@vanilla-extract/css"


export const countryNameStillStyle = style({
  display: "flex",
  width: "60%",
  height: "auto",
  fontSize: "2vw",
  fontWeight: 900,
  textAlign: "center",
  backgroundColor: "white",
  color: "black",
  margin: "1vw auto 0 auto"
})


export const searchIconStyle = style({
  width: "3vw",
  height: "3vw",
})


export const worldMapViewStyle = style({
  position: "relative",
  "@media": {
    "screen and (max-width: 480px)": {
      width: "100%",
      position: "relative"
    }
  }
})




export const worldMapStyle = style({
  width: "100vw",
  height: "45vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 480px)": {
      width: "200vw",
      height: "auto"
    },
  },

})

export const worldMapSvgStyle = style({
  width: "100%",
  fill: "rgb(51, 255, 0)"
})

globalStyle(`${worldMapSvgStyle} > path:hover`, {
  fill: "#d0ff00"
});

export const countryNameStyle = style({
  marginLeft: "2vw"
})
