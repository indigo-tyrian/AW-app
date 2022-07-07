import React from 'react'
import PosterAndInfo from 'src/components/Movies/PosterAndInfo'
import StarRating from 'src/components/Movies/StarRating'
import 'src/components/styles/global.css'
import { useEffect, useState } from "react";
import Mo from "src/json/Movie.json"
import { ffContainerStyle, textContainerStyle, textTitleStyle, textContentsStyle, mediumImgContainerStyle, imgStyle, leftContentsStyle, rightContentsStyle, paragraphStyle } from "src/components/styles/movie.css"
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head'



import { TMDBProps, MovieDataProps } from 'interfaces/movieInterface';

const InsideBelarus = () => {
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
              Belarus Forces Down Plane in Minsku. opposition activist and journalist Roman Protasevich and his girlfriend Sofia Sapega, were arrested by authorities.  up Europe Sees State Hijacking
            </p>

            <p className={paragraphStyle}>
              Belarusian president Alexander Lukashenko elected with 80% vote rate.
            </p>

            <p className={paragraphStyle}>
              Belarus Middle East Refugees and Migrants Porland and borderline
              Belarus said to the refugees to "You can via Belarus"

              freezing condition
            </p>
            <Link href="https://javafilms.fr/film/inside-belarus-putins-puppet-regime/">
              ffffffffff
            </Link>

            <p className={paragraphStyle}>
              some of the troops Russian army invaded Ukrina from Belarus
            </p>
            <div className={mediumImgContainerStyle}>
              {/* <Image className={imgStyle} src="" alt="" layout='fill' /> */}
            </div>
          </div>
          <div className={leftContentsStyle}></div>
          <div className={rightContentsStyle}></div>
        </div>
      </div>
    </>
  )
}

export default InsideBelarus