import MoviePosterAndInfo from 'src/components/Movies/MoviePosterAndInfo'
import MovieStarRating from 'src/components/Movies/MovieStarRating'
import NextImageComp from 'src/components/NextImageComp';
import 'src/components/styles/global.css'
import { useEffect, useState } from "react";
import { supabase } from 'utils/supabaseClient'
import { ffContainerStyle, textContainerStyle, textTitleStyle, textContentsStyle, mediumImgContainerStyle, imgStyle, leftContentsStyle, rightContentsStyle, paragraphStyle } from "src/components/styles/movie.css"
import { nextImageAdjustment } from 'src/components/styles/nextImage.css';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { TMDBProps, MovieDataProps } from 'interfaces/movieInterface';

const Newtopia = () => {
  const router = useRouter()
  const one = router.asPath.replace("/movie/", "")
  const [content, setContent] = useState<TMDBProps>({} as TMDBProps);
  const [movieData, setMovieData] = useState<any>({});
  const tmdbAPIkey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  console.log(tmdbAPIkey)
  const fetchMovieData = async () => {
    let { data: Movie, error }: any = await supabase
      .from('movie')
      .select('movie_id,movie_name,story:rating->story,socialEffect:rating->socialEffect,businessSuccessful:rating->businessSuccessful,endRoll:rating->endRoll,opening:rating->opening,innovative:rating->innovative,music:rating->music,images:rating->images')
    const bb = await Movie.find((d: any) => d.movie_name == one)
    setMovieData(bb);
    fetch(`https://api.themoviedb.org/3/movie/${bb.movie_id}?api_key=${tmdbAPIkey}`
    ).then(response => response.json()).then(res => {
      setContent(res)
    }).catch(error => {
      console.log("hhhhh")
    })
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  console.log(content, "aaaa")
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
        story={parseInt(movieData.story)}
        socialEffect={parseInt(movieData.socialEffect)}
        businessSuccessful={parseInt(movieData.businessSuccessful)}
        endRoll={parseInt(movieData.endRoll)}
        images={parseInt(movieData.images)}
        innovative={parseInt(movieData.innovative)}
        music={parseInt(movieData.music)}
        opening={parseInt(movieData.opening)}
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

export default Newtopia