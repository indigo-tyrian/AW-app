import { style, styleVariants } from "@vanilla-extract/css"

export const Style = style({
  width: "100%",
  boxSizing: "border-box",
})


export const containerStyle = style({
  backgroundColor: "black",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  height: "40px",
  padding: "3px auto",
  gap: "50px",
  justifyItems: "center",
  alignItems: "center",
  position: "fixed",
  bottom: "0",
  zIndex: 1000,
  width: "100%",
  "@media": {
    "screen and (max-width: 480px)": {
      height: "60px",
      padding: "10px 20px 0 20px",
      gap: "30px",
      width: "initial"
    }
  }
}
)


export const iconBase = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  justifyItems: "center",
  "@media": {
    "screen and (max-width: 480px)": { gap: "5px" }
  }
})

export const iconStyle = styleVariants({
  white:
    [iconBase,
      {
        color: "white",
        fill: "white"
      }
    ],
  gray:
    [iconBase,
      {
        color: "gray",
        fill: "gray"
      }]
})


export const svgContainerStyle = style({


  width: "20px",
  height: "20px",
  "@media": {
    "screen and (max-width: 480px)": {
      width: "22px",
      height: "22px"
    }
  }
})

export const svgStyle = style({
  objectFit: "cover",
  // stroke: "white",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: "1.5",
})

export const iconTextStyle = style({
  fontSize: "10px",
  "@media": { "screen and (max-width: 480px)": { fontSize: "14px" } }
})







