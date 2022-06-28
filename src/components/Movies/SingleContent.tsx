import '../styles/global.css'
import { img_300, unavailable } from "../../../config";
import { mediaStyle, subTitleStyle, titleStyle } from "../styles/SingleContent.css";

interface Props {
  poster: string
  title: string
  date: string
  media_type: string
  vote_average: number
  over_view: string
}

const SingleContent = ({
  poster,
  title,
  date,
  media_type,
  vote_average
}: Props) => {
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