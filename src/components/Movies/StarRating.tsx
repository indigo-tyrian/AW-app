import '../styles/global.css'

import { ratingContainerStyle, comprehensionRatingStyle, ratingEachStyle, ratingStarStyle, ratingTextStyle, comprehensiveRatingTextStyle, } from "../styles/movie.css"

// import ReactStars from 'react-stars'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/material/Rating';


interface Props {
  story: number
  images: number
  music: number
  opening: number
  endRoll: number
  innovative: number
  socialEffect: number
  businessSuccessful: number
}


const StarRating = ({
  story,
  images,
  music,
  opening,
  endRoll,
  innovative,
  socialEffect,
  businessSuccessful,

}: Props) => {
  return (
    <>
      <div className={ratingContainerStyle}>
        <div className={ratingEachStyle}>
          <p className={ratingTextStyle}>Story</p>
          <Rating
            className={ratingStarStyle}
            value={story}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={ratingTextStyle}>Images</p>
          <Rating
            className={ratingStarStyle}
            value={images}
            readOnly
            precision={0.5} />
        </div>
        <div className={ratingEachStyle}>
          <p className={ratingTextStyle}>Music</p>
          <Rating
            className={ratingStarStyle}
            value={music}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={ratingTextStyle}>Opening</p>
          <Rating
            className={ratingStarStyle}
            value={opening}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={ratingTextStyle}>EndRoll</p>
          <Rating
            className={ratingStarStyle}
            value={endRoll}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={ratingTextStyle}>Innovative</p>
          <Rating
            className={ratingStarStyle}
            value={innovative}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={ratingTextStyle}>Social Effect</p>
          <Rating
            className={ratingStarStyle}
            value={socialEffect}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={ratingTextStyle}>Business Successful</p>
          <Rating
            className={ratingStarStyle}
            value={businessSuccessful}
            readOnly
            precision={0.5}
          />
        </div>
      </div>
      <div className={comprehensionRatingStyle}>
        <div className={ratingEachStyle}>
          <p className={comprehensiveRatingTextStyle}>Comprehensive</p>
          <Rating
            className={ratingStarStyle}
            value={4}
            readOnly
            precision={0.5}
            size="large"
          />
        </div>
      </div>
    </>
  )
}

export default StarRating