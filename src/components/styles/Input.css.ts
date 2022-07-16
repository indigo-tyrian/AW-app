import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from "./theme.css"


const containerBase = style({
  width: "100%",
  justifyContent: "center"
})


export const containerStyle = styleVariants({
  home: [containerBase,
    {
      margin: "1vw auto 0",
      display: "flex",
    }
  ],
  slider:
    [containerBase,
      {
        position: "absolute",
        top: "5%",
        left: "25%",
        zIndex: 10,
        "@media": {
          "screen and (max-width: 480px)": {
            // top: "2%",
            // left: "5%",

            display: "none"
          }
        }
      }
    ]
})



export const searchContainerStyle = style({
  display: "flex"
})

export const inputSearchBoxBase = style({
  height: vars.height.input,
  borderTopLeftRadius: vars.borderRadius.input,
  borderBottomLeftRadius: vars.borderRadius.input,
  border: "0",
  backgroundColor: "rgb(255, 255, 255)",
  padding: "7px 0 7px 5px",
  color: "black",
  fontSize: 20,
  WebkitAppearance: "none",
  margin: 0,

  outline: "none",
  // "@media": {
  //   "screen and (max-width: 800px)": {
  //     height: "20px"
  //   },
  // }
})


export const inputSearchBoxStyle = styleVariants({
  home: [inputSearchBoxBase,
    {
      width: "60vw",
    }
  ],
  slider:
    [inputSearchBoxBase,
      {
        width: "50vw",
        "@media": {
          "screen and (max-width: 480px)": {
            width: "80vw",
          }
        }
      }]
})



export const searchButtonStyle = style({
  backgroundColor: "white",
  borderTopRightRadius: vars.borderRadius.input,
  borderBottomRightRadius: vars.borderRadius.input,
  height: vars.height.input,
  padding: "7px"
})


export const searchButtonInnerStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 40,
  height: 40,
})


export const dataResultStyle = style({
  marginTop: "5px",
  width: "600px",
  maxHeight: "600px",
  backgroundColor: "white",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
})


export const dataResultItemStyle = style({
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  color: "black"
})