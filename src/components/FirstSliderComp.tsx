import Link from 'next/link'

import { slideImgStyle, slideTextStyle, slideBgImgStyle, slideBgStyle } from "./styles/firstSlider.css";
import { nextImageAdjustment } from './styles/nextImage.css';
import NextImageComp from 'src/components/NextImageComp';

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
          <NextImageComp containerClassName={props.nextImageAdjustment} src={props.imgSource} alt="" />
        </div>
      </div>
      {/* <div className={props.slideTextStyle}>{props.title1}<br />{props.title2}
      </div> */}
    </ Link >


  )
}