import Link from 'next/link'
import NextImageComp from 'src/components/NextImageComp';
import { boxStyle, imgStyle } from './styles/ImageWindow.css';
import { comingSoonText } from './styles/comingSoon.css';
import { nextImageAdjustment } from './styles/nextImage.css';

interface Props {
  title: string;
  text?: string;
  imgSource: string;
  comingSoonClass?: string;
  comingSoonText?: string;
  link: string;
}

export function HomeFeaturesComp(props: Props) {
  return (
    <Link href={props.link}>
      <div className={boxStyle}>
        <div className={props.comingSoonClass}>
          <div className={comingSoonText}> {props.comingSoonText}</div>
        </div>
        <div>
          <div className="text-block">
            <span className="text">
              {props.title}
            </span>
          </div>
          <NextImageComp boxClassName={imgStyle.nonFocus} containerClassName={nextImageAdjustment.imageWindow} src={props.imgSource} alt="" />
        </div>
      </div>
    </Link>
  )
}

