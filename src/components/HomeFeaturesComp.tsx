import Link from 'next/link'
import NextImageComp from 'src/components/NextImageComp';
import { boxStyle, imgStyle } from './styles/ImageWindow.css';
import { nextImageAdjustment } from './styles/nextImage.css';
import { homeStyle, homeTextStyle } from './styles/homeWindow.css';

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
          <NextImageComp boxClassName={imgStyle.nonFocus} containerClassName={nextImageAdjustment.imageWindow} src={props.imgSource} alt="" />
        </div>
      </div>
    </Link>
  )
}

