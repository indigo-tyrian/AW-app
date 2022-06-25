import { style, styleVariants } from "@vanilla-extract/css"

const logoBasic = style({
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.6rem",
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: "3.5vw",
    }, "screen and (max-width: 480px)": {
      fontSize: "1rem",
    }
  }
})

export const logoStyle = styleVariants({
  flex: [logoBasic,
    {
      display: "flex",
    }
  ],
  absolute:
    [logoBasic,
      {
        position: "absolute",
        left: "3%",
        top: "3%",
        zIndex: 5,
      }],
  footer:
    [logoBasic,
      {
        display: "flex",
        textAlign: "center",
        margin: "0 auto",
      }]
})


export const logoAStyle = style({
  backgroundImage: "linear-gradient(to left, #00ff95, #00aeff)",
  WebkitBackgroundClip: "text",
  MozBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  // MozTextFillColor: "transparent", 
  height: "80%",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99,
  fontWeight: "bold",
  margin: "0 auto",
})

