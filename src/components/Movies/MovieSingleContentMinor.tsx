import 'src/components/styles/global.css'
import { img_300, img_500, unavailable } from "config";
import { boxStyle, mediaStyle, subTitleStyle, titleStyle } from "src/components/styles/SingleContent.css";
import Image from 'next/image'
import Link from 'next/link';
import { MouseEvent, useState, useEffect } from 'react'
import { nextImageAdjustment } from 'src/components/styles/nextImage.css';
import NextImageComp from 'src/components/NextImageComp';
import { supabase } from 'utils/supabaseClient'
import type { PostMeta } from "src/components/api";
import styles from "@/styles/Articles.module.css";

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

const MovieSingleContent = ({ posts }: { posts: PostMeta[] }) => {

  const [movieData, setMovieData] = useState<any>();

  const fetchMovieData = async () => {
    let { data: MovieData, error }: any = await supabase
      .from('movie')
      .select('movie_id,movie_name,movie_original_title')
    setMovieData(MovieData);

  }


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

  useEffect(() => {
    fetchMovieData();
  }, []);

  // console.log(movieData.find((d: any) => d.movie_original_title == original_title).movie_name, "000000")
  console.log(movieData, "000000")
  return (
    // <Link href={`/movie/${original_title.replace(/\s/g, '')}`}>
    <Link href={`/movie/${movieData ? movieData.find((d: any) => d.movie_original_title == original_title).movie_name : ""}`}>
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