import 'src/components/styles/global.css'

import { ratingContainerStyle, comprehensionRatingStyle, ratingEachStyle, ratingStarStyle, ratingTextStyle, comprehensiveRatingTextStyle, } from "src/components/styles/movie.css"

// import ReactStars from 'react-stars'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/material/Rating';
import { defaultStyle } from '../styles/default.css';


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


const MovieStarRating = ({
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
          <p className={`${ratingTextStyle} ${defaultStyle}`}>Story</p>
          <Rating
            className={ratingStarStyle}
            value={story}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={`${ratingTextStyle} ${defaultStyle}`}>Images</p>
          <Rating
            className={ratingStarStyle}
            value={images}
            readOnly
            precision={0.5} />
        </div>
        <div className={ratingEachStyle}>
          <p className={`${ratingTextStyle} ${defaultStyle}`}>Music</p>
          <Rating
            className={ratingStarStyle}
            value={music}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={`${ratingTextStyle} ${defaultStyle}`}>Opening</p>
          <Rating
            className={ratingStarStyle}
            value={opening}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={`${ratingTextStyle} ${defaultStyle}`}>EndRoll</p>
          <Rating
            className={ratingStarStyle}
            value={endRoll}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={`${ratingTextStyle} ${defaultStyle}`}>Innovative</p>
          <Rating
            className={ratingStarStyle}
            value={innovative}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={`${ratingTextStyle} ${defaultStyle}`}>Social Effect</p>
          <Rating
            className={ratingStarStyle}
            value={socialEffect}
            readOnly
            precision={0.5}
          />
        </div>
        <div className={ratingEachStyle}>
          <p className={`${ratingTextStyle} ${defaultStyle}`}>Business Successful</p>
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
          <p className={`${comprehensiveRatingTextStyle} ${defaultStyle}`}>Comprehensive</p>
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

export default MovieStarRating