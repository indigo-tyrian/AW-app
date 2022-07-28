import zIndex from "@mui/material/styles/zIndex"
import { style, styleVariants } from "@vanilla-extract/css"

const nextImageAdjustmentBase = style({
  // position: "relative",
})

export const nextImageAdjustment = styleVariants({
  livingThingsFirstSlider: [nextImageAdjustmentBase,
    {
      position: "relative",
      width: "40vw",
      height: "40vw",
      "@media": {
        "screen and (max-width: 800px)": {
          width: "80vw",
          height: "80vw",
        }, "screen and (max-width: 480px)": {
          width: "100vw",
          height: "100vw",
        }
      }
    }
  ],

  livingThingsFirstSliderBG:
    [nextImageAdjustmentBase,
      {
        width: 1920,
        height: 1080,
        "@media": {
          "screen and (max-width: 800px)": {
            width: 1920,
            height: 800,
          }, "screen and (max-width: 480px)": {
            width: 480,
            height: 480,
          }
        }
      }
    ],
  imageWindow:
    [nextImageAdjustmentBase,
      {
        // width: 450,
        // height: 300
      }
    ],
  moviePoster:
    [nextImageAdjustmentBase,
      {
        position: "relative",
        width: "auto",
        height: 450,
        "@media": {
          "screen and (max-width: 800px)": {
            width: "auto",
            height: "45vw",
          }, "screen and (max-width: 480px)": {
            width: "auto",
            height: "45vw",
          }
        }

      }
    ],
  movieBackDrop:
    [nextImageAdjustmentBase,
      {
        position: "relative",
        width: 200,
        height: 100
      }
    ],
  blogImage:
    [nextImageAdjustmentBase,
      {
        position: "relative",
        width: 600,
        height: 900
      }
    ],
  landscape:
    [nextImageAdjustmentBase,
      {
        width: 1920,
        height: 1080
      }
    ],
  smallImage:
    [nextImageAdjustmentBase,
      {
        position: "relative",
        width: 200,
        height: 200
      }
    ],
  imageGallery:
    [nextImageAdjustmentBase,
      {
        // position: "relative",
        width: 600,
        height: 600
      }
    ],
  profileHead:
    [nextImageAdjustmentBase,
      {
        position: "relative",
        width: "25vw",
        height: "25vw"
      }
    ]
})