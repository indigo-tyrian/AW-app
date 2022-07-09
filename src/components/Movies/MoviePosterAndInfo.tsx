import 'src/components/styles/global.css'
import { img_300, img_500, img_1920, unavailable } from "config";
import { BgStyle, customBgStyle, posterContainerStyle, posterStyle, titleStyle, descriptionContainerStyle, firstContainerStyle, firstContainer2Style, titleContainerStyle, genresStyle, runTimeStyle, dateStyle, runTimeAndGenresStyle, overViewContainerStyle, } from "src/components/styles/movie.css"
import Image from 'next/image'



interface Props {
  poster: string
  title: string
  date: string
  media_type: string
  vote_average: number
  over_view: string
  back_drop: string
  runtime: number
  genres: [{
    id: number
    name: string
  }]
}

const MoviePosterAndInfo = ({
  poster,
  title,
  date,
  media_type,
  vote_average,
  over_view,
  back_drop,
  runtime,
  genres,
}: Props) => {

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <>
      <div className={BgStyle} style={{
        backgroundImage:
          `url(${img_1920}/${back_drop})`
      }} >
        <div className={customBgStyle}>
          <div className={firstContainer2Style}>
            <div className={firstContainerStyle}>
              <div className={posterContainerStyle}>
                <Image className={posterStyle} src={poster ? `${img_300}/${poster}` : unavailable} alt={title} width={300} height={450} />
              </div>
              <div className={descriptionContainerStyle}>
                <div className={titleContainerStyle}>

                  <h2 className={titleStyle}>{title}
                    <span className={dateStyle}>&#40;{date ? date.substring(0, 4) : "NO"}&#41;</span>
                  </h2>
                  <div className={runTimeAndGenresStyle}>
                    <span className={runTimeStyle}>{hours}h{minutes}m</span>
                    {/* <span className={categoryStyle}>
                    Category: {media_type === "tv" ? "TV Series" : "movie"}
                  </span> */}
                    <span className={genresStyle}>
                      {genres?.map((rr) => (
                        <div key={rr.id} className="subTitle" > {rr.name}</div>
                      ))}
                    </span>
                  </div>
                </div>
                <div className={overViewContainerStyle}>
                  <h3>Overview</h3>
                  <div>{over_view}</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default MoviePosterAndInfo