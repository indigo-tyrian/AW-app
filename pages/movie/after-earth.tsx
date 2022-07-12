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

const AfterEarth = () => {
  const router = useRouter()
  const one = router.asPath.replace("/movie/", "")

  const [content, setContent] = useState<TMDBProps>({} as TMDBProps);
  const [movieData, setMovieData] = useState<any>({});
  // console.log(moo.blogTitle);

  // console.log(process.env.NEXT_PUBLIC_SUPABASE_URLs);
  // console.log(router.asPath.replaceAll("/movie/", ""));

  const fetchF = async () => {
    let { data: Movie, error }: any = await supabase
      .from('Movie')
      .select()


    const bb = await Movie.find((d: any) => d.movie_name == one)
    console.log(bb, "mmmmm");
    setMovieData(bb);


    fetch(`https://api.themoviedb.org/3/movie/${bb.movie_id}?api_key=0bbd2e953c05d5b589625a131c3ecac6`
    ).then(response => response.json()).then(res => {
      setContent(res)
    }).catch(error => {
      console.log("hhhhh")
    })
  };

  useEffect(() => {
    fetchF();
  }, []);


  // console.log(bb, "dddddd")
  // console.log(one, "sssss")

  console.log(movieData, "tttts")
  console.log(content, "aaaa")
  // console.log(movieData.blogTitle, "aaaa")
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
        story={movieData.rating_story}
        socialEffect={movieData.rating_socialEffect}
        businessSuccessful={movieData.rating_businessSuccessful}
        endRoll={movieData.rating_endRoll}
        images={movieData.rating_images}
        innovative={movieData.rating_innovative}
        music={movieData.rating_music}
        opening={movieData.rating_opening}
      />

      <div className={ffContainerStyle}>
        <div className={textContainerStyle}>
          <span className={textTitleStyle}>{movieData.blog_title}</span>
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

export default AfterEarth