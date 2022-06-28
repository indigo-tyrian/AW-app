import Link from 'next/link';
import { ImgWindow } from '../src/components/ImgWindow';
import { contentStyle } from '../src/components/styles/global.css';
import { containerStyle } from '../src/components/styles/ImageWindow.css';

import '../src/components/styles/global.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import SingleContent from '../src/components/Movies/SingleContent';

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
}


function Movies() {

  const [content, setContent] = useState<Props>({} as Props);


  const fetchTrending = async (): Promise<void> => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/437586?api_key=0bbd2e953c05d5b589625a131c3ecac6`
    );

    setContent(data);
    console.log(data)
  };

  useEffect(() => {
    fetchTrending();
  }, []);


  return (
    <>
      <SingleContent
        key={content.id}
        poster={content.poster_path}
        title={content.title || content.name}
        date={content.first_air_date || content.release_date}
        media_type={content.media_type}
        vote_average={content.vote_average}
        over_view={content.overview}
      />


      <div className={`${contentStyle} ${containerStyle}`}>
        <ImgWindow title1='Movie' totalNumber={110} imgSource='' link="/movie/movies" />
        <ImgWindow title1='TV series' totalNumber={110} imgSource='' link="/movie/tvSeries" />
      </div>
    </>
  )
}

export default Movies