import { slideImgStyle, slideTextStyle, slideBgImgStyle, slideBgStyle } from "./styles/firstSlider.css";
import { nextImageAdjustment } from './styles/nextImage.css';
import NextImageComp from 'src/components/NextImageComp';
import Image from 'next/image';

interface Props {
  title1: string;
  title2?: string;
  text?: string;
  imgSource?: any;
  bgImgSource?: string;
  slideStyle?: string;
  slideImgStyle?: string;
  slideTextStyle?: string;
  nextImageAdjustment?: string;
}

export function FirstSliderNoLinkComp(props: Props) {
  return (
    <>
      <div className={props.slideStyle}>
        <div className={props.slideImgStyle}>
          <div className={props.nextImageAdjustment}>
            <Image src={props.imgSource} alt="" objectFit='cover' layout='fill' priority />
          </div>
        </div>
      </div>
      {/* <div className={props.slideTextStyle}>{props.title1}<br />{props.title2}
      </div> */}
    </>

  )
}