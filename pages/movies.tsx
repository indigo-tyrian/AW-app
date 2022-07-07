import Link from 'next/link';
import { ImgWindow } from 'src/components/ImgWindow';
import { contentStyle } from 'src/components/styles/global.css';
import { containerStyle } from 'src/components/styles/ImageWindow.css';
import 'src/components/styles/global.css'
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from 'src/components/Movies/SingleContent';
import { movieListContainerStyle } from "src/components/styles/SingleContent.css";
import Mo from "src/json/Movie.json"
import { Header } from 'src/components';
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
  const moviess = Mo.movies.map((o: any) => o.id)
  // const [content, setContent] = useState<Props>({} as Props);
  const [content, setContent] = useState<any>([]);

  const fetchTrending = async (e: any): Promise<void> => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${e}?api_key=0bbd2e953c05d5b589625a131c3ecac6`
    );

    setContent((content: any) => [...content, data]);
    // console.log(data)
  };
  useEffect(() => {
    {
      moviess.map((e) => {
        fetchTrending(e);
      })

    }
  }, []);
  return (
    <>
      <Header />
      <div className={movieListContainerStyle}>
        {
          content.map((e: any) => {
            console.log(moviess);

            return (
              < SingleContent
                original_title={e.original_title}
                key={e.id}
                poster={e.poster_path}
                title={e.title || e.name}
                date={e.first_air_date || e.release_date}
                media_type={e.media_type}
                vote_average={e.vote_average}
                over_view={e.overview}
              />
            )
          })
        }
      </div>

      <div className={`${contentStyle} ${containerStyle}`}>
        <ImgWindow title1='Movie' totalNumber={110} imgSource='/images/movies/movie.jpg' link="/movie/movies" />
        <ImgWindow title1='TV series' totalNumber={110} imgSource='/images/movies/documentary.jpg' link="/movie/tvSeries" />
      </div>
    </>
  )
}

export default Movies