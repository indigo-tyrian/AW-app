import { style, styleVariants, globalStyle } from "@vanilla-extract/css"
import { vars } from "./theme.css"


globalStyle("body", {
  margin: "0",
  padding: "0",
  fontFamily: vars.font.font1,
  backgroundColor: vars.color.navyBlue,
  overflowX: "hidden"
});


globalStyle("html", {
  margin: "0",
  padding: "0",
  scrollBehavior: "smooth",
  listStyle: "none",
  overflowX: "hidden",
  color: "white",
})

globalStyle("div", {
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none"
})
globalStyle("a", { textDecoration: "none", color: "inherit" })

globalStyle("li", { listStyle: "none" })

globalStyle("video", {
  // iPhone safariの枠線を消す
  filter: "drop-shadow(0px 0px rgba(0, 0, 0, 0))",
  // PCのChromeの枠線を消す
  outline: "none",
  border: "none"
})

// globalStyle("h1, h2, h3, h4, h5, p", {
//   margin: "0",
//   padding: "0",
//   boxSizing: "border-box"
// })


globalStyle("::placeholder", {
  fontSize: 20,
  color: "gray",
})

// globalStyle("input", {
//   fontSize: "2em",
//   color: "black",
//   backgroundColor: "black",
// })


globalStyle(".text-block", {
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  zIndex: 3,
  pointerEvents: "none",
  "@media": {
    "screen and (max-width: 480px)": {
      bottom: "0.5vw",
      left: "0",
      width: "100%",
      textAlign: "center"
    }
  },
})


globalStyle(".text", {
  fontSize: "2.5vw",
  fontWeight: 700,
  textTransform: "uppercase",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  WebkitTransform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 800px)": { fontSize: "5vw" },
    "screen and (max-width: 480px)": { fontSize: "4vw" }
  },
})


globalStyle(".total-number", {
  position: "absolute",
  bottom: "5%",
  right: "5%",
  "@media": {
    "screen and (max-width: 800px)": {
      fontSize: "2vw",
    }, "screen and (max-width: 480px)": {
      fontSize: "2vw",
      margin: "17vw 0 0 12vw"
    }
  }
})


export const contentStyle = style({
  margin: "1vw 4vw 0 4vw",
})



export const pcAreaBase = style({
  display: "block !important",
  "@media": {
    "screen and (max-width: 800px)": { display: "none !important" },
    "screen and (max-width: 480px)": { display: "none !important" }
  }
})

export const tabAreaBase = style({
  display: "block !important",
  "@media": {
    "screen and (max-width: 800px)": { display: "block !important" },
    "screen and (max-width: 480px)": { display: "none !important" }
  },
})

export const phoneAreaBase = style({
  display: "none !important",
  "@media": {
    "screen and (max-width: 800px)": { display: "block !important" },
    "screen and (max-width: 480px)": { display: "block !important" }
  }
})

export const phoneOnlyAreaBase = style({
  display: "none !important",
  "@media": {
    "screen and (max-width: 800px)": { display: "none !important" },
    "screen and (max-width: 480px)": { display: "block !important" }
  }
})


export const bigTextStyle = style({
  fontSize: "6vw",
  fontWeight: 900,
  margin: "2vw 0 0 4vw",
  "@media": {
    "screen and (max-width: 480px)": {
      fontSize: "1.2rem",
      left: "0px",
      width: "100%",
      justifyContent: "left",
      alignItems: "flex-end",
      margin: "7vw 0 0 4vw"
    }
  }
})

// globalStyle(`${bigTextStyle} > div:hover`, {
//   color: "#d0ff00"
// });



export const scrollStyle = style({
  overflow: "hidden",
  overflowX: "scroll",
  whiteSpace: "nowrap",
  msOverflowStyle: "none"
})

export const phoneScrollStyle = style({
  "@media": {
    "screen and (max-width: 480px)": {
      overflow: "hidden",
      overflowX: "scroll",
      WebkitOverflowScrolling: "touch",
      whiteSpace: "nowrap",
      msOverflowStyle: "none"
    }
  }
})

