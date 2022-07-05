import React from 'react'
import PosterAndInfo from '../../src/components/Movies/PosterAndInfo'
import StarRating from '../../src/components/Movies/StarRating'
import '../../src/components/styles/global.css'
import { useEffect, useState } from "react";
import Mo from "../../src/json/Movie.json"
import { ffContainerStyle, textContainerStyle, textTitleStyle, textContentsStyle, mediumImgContainerStyle, imgStyle, leftContentsStyle, rightContentsStyle, paragraphStyle } from "../../src/components/styles/movie.css"
import Image from 'next/image'


interface Props {
  id: number
  name: string
  poster_path: string
  title: string
  first_air_date: string
  release_date: string
  media_type: string
  vote_average: number
  overview: string
  backdrop_path: string
  runtime: number
  genres: [{
    id: number
    name: string
  }]
}

interface Props2 {
  id: string
  blogTitle: string
  rate: {
    story: number;
    images: number;
    music: number;
    opening: number;
    endRoll: number;
    innovative: number;
    socialEffect: number;
    businessSuccessful: number;
  }
}

const Gravity = () => {
  const one = "Gravity"
  const moo = Mo.movies.find((d) => d.name == one) as Props2
  const [content, setContent] = useState<Props>({} as Props);

  const fetchTrending = () => {
    fetch(`https://api.themoviedb.org/3/movie/${moo.id}?api_key=0bbd2e953c05d5b589625a131c3ecac6`
    ).then(response => response.json()).then(res => {
      setContent(res)
    }).catch(error => {
      console.log("hhhhh")
    })
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <>
      <PosterAndInfo
        key={content?.id}
        poster={content?.poster_path}
        back_drop={content.backdrop_path}
        title={content.title || content.name}
        date={content.first_air_date || content.release_date}
        media_type={content.media_type}
        vote_average={content.vote_average}
        over_view={content.overview}
        runtime={content.runtime}
        genres={content.genres}
      />

      <StarRating
        story={moo.rate.story}
        socialEffect={moo.rate.socialEffect}
        businessSuccessful={moo?.rate.businessSuccessful}
        endRoll={moo.rate.endRoll}
        images={moo.rate.images}
        innovative={moo.rate.innovative}
        music={moo.rate.music}
        opening={moo.rate.opening}
      />

      <div className={ffContainerStyle}>
        <div className={textContainerStyle}>
          <span className={textTitleStyle}>{moo.blogTitle}</span>
          <div className={textContentsStyle}>
            <p className={paragraphStyle}>
            </p>
            <div className={mediumImgContainerStyle}>
              <Image className={imgStyle} src="" alt="" layout='fill' />
            </div>
          </div>
          <div className={leftContentsStyle}></div>
          <div className={rightContentsStyle}></div>
        </div>
      </div>
    </>
  )
}

export default Gravity