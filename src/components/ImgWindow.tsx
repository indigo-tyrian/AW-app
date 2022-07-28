import NextImageComp from 'src/components/NextImageComp';
import { boxStyle, imgStyle, gradientStyle, overlayStyle } from './styles/ImageWindow.css';
import { MouseEvent, useState } from 'react'
import Link from 'next/link';
import { pcAreaBase } from './styles/global.css';
import { nextImageAdjustment } from './styles/nextImage.css';
import Image from 'next/image';



interface Props {
  totalNumber: number;
  title1?: string;
  title2?: string;
  title3?: string;
  text?: string;
  imgSource: string;
  link: string;
}


export function ImgWindow(props: Props) {
  const [isHover, setIsHover] = useState(false)
  const onPale = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setIsHover(!isHover)
    }
  }

  const undoPale = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setIsHover(false)
    }
  }

  return (
    <Link href={props.link}>
      <div className={`${boxStyle}`} onMouseEnter={onPale} onMouseLeave={undoPale}>
        <NextImageComp containerClassName={nextImageAdjustment.imageWindow} boxClassName={`${isHover ? imgStyle.focus : imgStyle.nonFocus} `} src={props.imgSource} alt="" />
        {/* <div className={`${isHover ? imgStyle.focus : imgStyle.nonFocus} `} >
          <Image src={props.imgSource} alt="" width="200%" height="40%" layout="responsive" objectFit="contain" />
        </div> */}
        <div className={`${overlayStyle} ${pcAreaBase} ${isHover ? overlayStyle.grayOut : overlayStyle.nonGrayOut}`} ></div>
        <div className={gradientStyle}></div>
        <div className="text-block">
          <span className="text">{props.title1}
          </span>
          <span className="total-number">
            Total Number {props.totalNumber}
          </span>
        </div>
      </div>
    </Link>
  )
}
