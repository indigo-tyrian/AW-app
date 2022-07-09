import zIndex from "@mui/material/styles/zIndex"
import { style, styleVariants } from "@vanilla-extract/css"

const nextImageAdjustmentBase = style({
  // position: "relative",
})

export const nextImageAdjustment = styleVariants({
  livingThings: [nextImageAdjustmentBase,
    {
      width: 700,
      height: 700
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
        width: 200,
        height: 300
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
    ]
})