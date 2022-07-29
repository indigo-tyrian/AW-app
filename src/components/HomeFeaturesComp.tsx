import Link from 'next/link'
import NextImageComp from 'src/components/NextImageComp';
import { boxStyle, imgStyle } from './styles/ImageWindow.css';
import { nextImageAdjustment } from './styles/nextImage.css';
import { homeStyle, homeTextStyle } from './styles/homeWindow.css';
import Image from 'next/image';
interface Props {
  title: string;
  text?: string;
  imgSource: string;
  link: string;
}

export function HomeFeaturesComp(props: Props) {
  return (
    <Link href={props.link}>
      <div className={boxStyle}>
        <div>
          <div className={homeStyle.normal}>
            <span className={homeTextStyle.normal}>
              {props.title}
            </span>
          </div>
          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imgSource} alt="" layout="fill" objectFit="cover" className={imgStyle.nonFocus} priority />
          </div>
        </div>
      </div>
    </Link>
  )
}

