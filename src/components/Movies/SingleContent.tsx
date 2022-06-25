import '../styles/global.css'

import { img_300, unavailable } from "../../../config";
import { mediaStyle, subTitleStyle, titleStyle } from "../styles/SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {
  return (
    <div className={mediaStyle}>
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className={titleStyle}>{title}</b>
      <span className={subTitleStyle}>
        {media_type === "tv" ? "TV Series" : "movie"}
      </span>
    </div>
  );
};

export default SingleContent;