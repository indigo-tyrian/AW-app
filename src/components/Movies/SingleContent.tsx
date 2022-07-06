import 'src/components/styles/global.css'
import { img_300, unavailable } from "config";
import { mediaStyle, subTitleStyle, titleStyle } from "src/components/styles/SingleContent.css";
import Image from 'next/image'
import Link from 'next/link';

interface Props {
  poster: string
  title: string
  date: string
  media_type: string
  vote_average: number
  over_view: string
  original_title: string
}

const SingleContent = ({
  poster,
  title,
  date,
  media_type,
  vote_average,
  original_title
}: Props) => {

  return (
    <Link href={`/movie/${original_title.replace(/\s/g, '')}`}>
      <div className={mediaStyle}>
        <Image src={poster ? `${img_300}/${poster}` : unavailable} alt={title} width={300} height={450} />
        <b className={titleStyle}>{title}</b>
        <span className={subTitleStyle}>
          {media_type === "tv" ? "TV Series" : "movie"}
        </span>
      </div>
    </Link >
  );
};

export default SingleContent;