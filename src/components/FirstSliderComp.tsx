import Link from 'next/link'

import { slideImgStyle, slideTextStyle, slideBgImgStyle, slideBgStyle } from "./styles/firstSlider.css";

interface Props {
  title1: string;
  title2?: string;
  text?: string;
  imgSource?: string;
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
        <img className={props.slideImgStyle} src={props.imgSource} />
      </div>
      {/* <div className={props.slideTextStyle}>{props.title1}<br />{props.title2}
      </div> */}
    </ Link >


  )
}