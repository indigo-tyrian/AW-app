import React from 'react'
import MoviePosterAndInfo from 'src/components/Movies/MoviePosterAndInfo'
import MovieStarRating from 'src/components/Movies/MovieStarRating'
import 'src/components/styles/global.css'
import { useEffect, useState } from "react";
import { supabase } from 'utils/supabaseClient'
import { ffContainerStyle, textContainerStyle, textTitleStyle, textContentsStyle, mediumImgContainerStyle, imgStyle, leftContentsStyle, rightContentsStyle, paragraphStyle } from "src/components/styles/movie.css"
import NextImageComp from 'src/components/NextImageComp';
import { nextImageAdjustment } from 'src/components/styles/nextImage.css';
import { useRouter } from 'next/router';
import Head from 'next/head'


import { TMDBProps, MovieDataProps } from 'interfaces/movieInterface';

const TheVisit = () => {
  // const one = "TheVisit"
  const router = useRouter()
  const one = router.asPath.replace("/movie/", "")
  const moo = Mo.movies.find((d) => d.name == one) as MovieDataProps
  const [content, setContent] = useState<TMDBProps>({} as TMDBProps);

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
      <MoviePosterAndInfo
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

      <MovieStarRating
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
              <NextImageComp containerClassName={nextImageAdjustment.landscape} boxClassName={imgStyle} src="/images/movies/documentary.jpg" alt="" />
            </div>
          </div>
          <div className={leftContentsStyle}></div>
          <div className={rightContentsStyle}></div>
        </div>
      </div>
    </>
  )
}

export default TheVisit