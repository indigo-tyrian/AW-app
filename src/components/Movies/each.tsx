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

const Movie = ({ id }: { id: string }) => {
  // const router = useRouter()
  // const one = router.asPath.replace("/movie/", "")
  const [content, setContent] = useState<TMDBProps>({} as TMDBProps);
  const [movieData, setMovieData] = useState<any>({});
  const tmdbAPIkey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  console.log(tmdbAPIkey)
  const fetchMovieData = async () => {
    let { data: MovieData, error }: any = await supabase
      .from('movie')
      .select('movie_id,movie_name,rating_story,rating_socialEffect,rating_businessSuccessful,rating_endRoll,rating_opening,rating_innovative,rating_music,rating_images')
    const bb = await MovieData.find((d: any) => d.movie_name == id)
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
        story={parseInt(movieData.rating_story)}
        socialEffect={parseInt(movieData.rating_socialEffect)}
        businessSuccessful={parseInt(movieData.rating_businessSuccessful)}
        endRoll={parseInt(movieData.rating_endRoll)}
        images={parseInt(movieData.rating_images)}
        innovative={parseInt(movieData.rating_innovative)}
        music={parseInt(movieData.rating_music)}
        opening={parseInt(movieData.rating_opening)}
      />
    </>
  )
}

export default Movie