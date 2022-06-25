import Link from 'next/link'
import { MouseEvent, useState } from 'react'


import { videoStyle, boxStyle, imgStyle } from "./styles/videoWindow.css"
import { phoneOnlyAreaBase } from './styles/global.css';
interface Props {
  title: string;
  text?: string;
  imgSource: string;
  videoSource: string;
  totalNumber: number;
  link: string;
}

export function SpeciesComp(props: Props) {

  const [isHover, setIsHover] = useState(false)


  const hov = (event: MouseEvent<HTMLVideoElement>) => {
    if (event) {
      setIsHover(!isHover)
      event.currentTarget.play()
    }
  }

  const nonHov = (event: MouseEvent<HTMLVideoElement>) => {
    if (event) {
      setIsHover(false)
      event.currentTarget.pause()
      event.currentTarget.currentTime = 0
    }
  }



  return (
    <Link href={props.link}>
      <div className={`${isHover ? boxStyle.bigger : boxStyle.small}`} >
        <video className={`tab-area ${isHover ? videoStyle.appears : videoStyle.disappears}`} muted onMouseEnter={hov} onMouseLeave={nonHov} >
          <source src={props.videoSource} type="video/mp4" />
        </video>
        <img className={`${imgStyle} ${phoneOnlyAreaBase}`} src={props.imgSource} alt="" />
        <div className="text-block">
          <span className="text">{props.title}
          </span>
          <span className="total-number">Total Number {props.totalNumber}
          </span>
        </div>
      </div>
    </Link>
  )
}



