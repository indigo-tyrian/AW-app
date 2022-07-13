import Link from 'next/link';
import { ImgWindow } from 'src/components/ImgWindow';
import { contentStyle } from 'src/components/styles/global.css';
import { containerStyle } from 'src/components/styles/ImageWindow.css';
import 'src/components/styles/global.css'
import { supabase } from 'utils/supabaseClient'
import { useEffect, useState } from "react";
import MovieSingleContent from 'src/components/Movies/MovieSingleContent';
import { movieListContainerStyle } from "src/components/styles/SingleContent.css";
import { BottomNav, Footer, Header } from 'src/components';
import { TMDBProps, MovieDataProps } from 'interfaces/movieInterface';
import Head from 'next/head'

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
  original_name: string
  back_drop: string
}[]

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


function Movies() {
  const tmdbAPIkey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  // const [content, setContent] = useState<TMDBProps>({} as TMDBProps);
  const [content, setContent] = useState<any>([]);
  const [movieData, setMovieData] = useState<any>({});

  const fetchMovieData = async () => {
    let { data: Movie, error }: any = await supabase
      .from('movie')
      .select('movie_id,movie_name,movie_original_title')
    console.log(Movie)
    const moviess = Movie.map((o: any) => o.movie_id)
    setMovieData(moviess)
    console.log(moviess, 'tttt')
    console.log('dddd')
    console.log(movieData, 'vvvvvvvvvvvvvvvvvvvvvvvvvvv')
    moviess.map(async (e: any) => {
      fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${tmdbAPIkey}`
      ).then(response => response.json()).then(res => {
        setContent((content: any) => [...content, res]);
      }).catch(error => {
        console.log("hhhhh")
      })
    })
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  console.log(content, "aaaa")
  console.log(movieData, 'sssssssssssssssss')
  // console.log(movieData);
  console.log(content, 'eeeeeeeeeeee');
  // console.log(movieData, 'llllll');

  return (
    <>
      <Header />
      <div className={movieListContainerStyle}>
        {
          content.map((e: any) => {
            console.log(movieData);
            console.log(content);

            return (
              < MovieSingleContent
                original_title={e.original_title}
                key={e.id}
                poster={e.poster_path}
                title={e.title || e.name}
                date={e.first_air_date || e.release_date}
                media_type={e.media_type}
                vote_average={e.vote_average}
                over_view={e.overview}
                back_drop={e.backdrop_path}
              />
            )
          })
        }
      </div>

      <div className={`${contentStyle} ${containerStyle}`}>
        <ImgWindow title1='Movie' totalNumber={110} imgSource='/images/movies/movie.jpg' link="/movie/movies" />
        <ImgWindow title1='TV series' totalNumber={110} imgSource='/images/movies/documentary.jpg' link="/movie/tvSeries" />
      </div>
      <Footer />
      <BottomNav />
    </>
  )
}

export default Movies