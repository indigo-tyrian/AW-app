import Link from 'next/link'
import Image from 'next/image'

import { slideImgStyle, slideTextStyle, slideBgImgStyle, slideBgStyle } from "./styles/firstSlider.css";

interface Props {
  title1: string;
  title2?: string;
  text?: string;
  imgSource?: any;
  bgImgSource?: string;
  link: string;
  slideStyle?: string;
  slideImgStyle?: string;
  slideTextStyle?: string;
}

export function FirstSliderComp(props: Props) {
  return (

    <Link href={props.link}>
      <div className={props.slideStyle}>
        <Image className={props.slideImgStyle} src={props.imgSource} alt="" layout='fill' />
      </div>
      {/* <div className={props.slideTextStyle}>{props.title1}<br />{props.title2}
      </div> */}
    </ Link >


  )
}