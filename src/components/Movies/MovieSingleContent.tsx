import 'src/components/styles/global.css'
import { img_300, img_500, unavailable } from "config";
import { boxStyle, mediaStyle, subTitleStyle, titleStyle } from "src/components/styles/SingleContent.css";
import Image from 'next/image'
import Link from 'next/link';
import { MouseEvent, useState } from 'react'
import { nextImageAdjustment } from 'src/components/styles/nextImage.css';
import NextImageComp from 'src/components/NextImageComp';

interface Props {
  poster: string
  title: string
  date: string
  media_type: string
  vote_average: number
  over_view: string
  original_title: string
  back_drop: string

}

const MovieSingleContent = ({
  poster,
  title,
  date,
  media_type,
  vote_average,
  original_title,
  back_drop
}: Props) => {

  const [isHover, setIsHover] = useState(false)
  const popup = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setIsHover(!isHover)
    }
  }

  const undoPopup = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setIsHover(false)
    }
  }


  return (
    <Link href={`/movie/${original_title.replace(/\s/g, '')}`}>
      <div className={isHover ? boxStyle.pop : boxStyle.nonpop}>
        <div className={isHover ? mediaStyle.pop : mediaStyle.nonpop} onMouseEnter={popup} onMouseLeave={undoPopup} >
          {/* <div className={nextImageAdjustment.moviePoster}>
            <Image src={poster ? `${img_300}/${poster}` : unavailable} alt={title} layout='fill' objectFit='contain' />
          </div> */}
          {isHover ?
            <NextImageComp containerClassName={nextImageAdjustment.movieBackDrop} src={back_drop ? `${img_500}/${back_drop}` : unavailable} alt={title} /> :
            <NextImageComp containerClassName={nextImageAdjustment.moviePoster} src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
          }
          <div>
            {isHover ?
              <>
                <b className={titleStyle}>{title}</b>
                <span className={subTitleStyle}>
                  {media_type === "tv" ? "TV Series" : "movie"}
                </span>
              </> : <></>
            }
          </div>
        </div>
      </div>
    </Link >
  );
};

export default MovieSingleContent;