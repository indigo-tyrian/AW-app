import Link from 'next/link'
import NextImageComp from 'src/components/NextImageComp';
import { boxStyle, homeBoxStyle, imgStyle } from './styles/ImageWindow.css';
import { homeStyle, homeTextStyle } from './styles/homeWindow.css';
import { nextImageAdjustment } from './styles/nextImage.css';
import Image from 'next/image';

interface Props {
  title: string;
  text?: string;
  imgSource: string;
  link: string;
}

export function HomeFeaturesCompNoLink(props: Props) {
  return (
    <div className={homeBoxStyle.home}>
      <div className={homeStyle.comingSoon}>
        <div className={homeTextStyle.comingSoon}>Coming Soon</div>
      </div>
      <div>
        <div className={nextImageAdjustment.imageWindow}>
          <Image src={props.imgSource} alt="" layout="fill" objectFit="contain" className={imgStyle.nonFocus} priority />
        </div>
      </div>
    </div>
  )
}

