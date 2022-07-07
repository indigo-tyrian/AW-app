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
  nextImageAdjustment?: string;
}

export function FirstSliderComp(props: Props) {
  return (

    <Link href={props.link}>
      <div className={props.slideStyle}>
        <div className={props.slideImgStyle}>
          <div className={props.nextImageAdjustment}>
            <Image src={props.imgSource} alt="" layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>
      {/* <div className={props.slideTextStyle}>{props.title1}<br />{props.title2}
      </div> */}
    </ Link >


  )
}