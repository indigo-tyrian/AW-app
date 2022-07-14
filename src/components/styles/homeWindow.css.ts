import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from './theme.css'



export const homeBase = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  bottom: "0",
  left: "0",
  zIndex: 10
})

export const homeStyle = styleVariants({
  normal:
    [homeBase,
      {
        backgroundColor: "rgba(0,0,0,0.4)",
      }
    ],
  comingSoon:
    [homeBase,
      {
        backgroundColor: "rgba(76, 43, 148,0.6)",
      }]
})


export const homeTextBase = style({
  fontSize: "3vw",
  fontWeight: 700,
  textTransform: "uppercase",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  WebkitTransform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  textAlign: "center",
})

export const homeTextStyle = styleVariants({
  normal:
    [homeTextBase,
      {
        color: "rgba(255, 255, 255,1)",
      }
    ],
  comingSoon:
    [homeTextBase,
      {
        color: "rgba(255, 255, 255,0.5)",
      }]
})







export const comingSoonText2 = style({
  fontSize: "8vw",
  fontWeight: 700,
  textTransform: "uppercase",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  WebkitTransform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  textAlign: "center",
})