import Link from 'next/link'
import Image from 'next/image'

import { overlayGradientStyle, descriptionContainerStyle, descriptionText, descriptionTitleStyle, slideStyle, } from "./styles/topic/topicSlider.css"
import { imgStyle } from './styles/ImageWindow.css';
import { MouseEvent, useState } from 'react'
import { nextImageAdjustment } from './styles/nextImage.css';

interface Props {
  title: string;
  text?: string;
  imgSource: string;
  nthElement?: string
  link: string
}

export function TopicSliderComp(props: Props) {

  const [isHover, setIsHover] = useState(false)


  const hov = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setIsHover(!isHover)
    }
  }

  const nonHov = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setIsHover(false)
    }
  }

  return (
    <Link href={props.link}>
      <div className={` ${slideStyle}`} onMouseEnter={hov} onMouseLeave={nonHov}>
        <div className={nextImageAdjustment.imageWindow}>
          <Image className={`${isHover ? imgStyle.focus : imgStyle.nonFocus}`} src={props.imgSource} alt="" layout='fill' objectFit='contain' />
        </div>
        <div className={overlayGradientStyle}></div>
        <div className={descriptionContainerStyle}>
          <span className={descriptionTitleStyle}>
            {props.title}
          </span>
          <div className={descriptionText}>{props.text}</div>
        </div>
      </div>
    </Link>
  )
}