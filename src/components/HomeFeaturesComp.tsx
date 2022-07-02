import Link from 'next/link'
import Image from 'next/image'

interface Props {
  title: string;
  text?: string;
  imgSource: string;
  comingSoon?: string;
  link: string;
}
import { boxStyle, imgStyle } from './styles/ImageWindow.css';
import { comingSoonText } from './styles/comingSoon.css';
export function HomeFeaturesComp(props: Props) {
  return (
    <Link href={props.link}>
      <div className={boxStyle}>
        <div className={props.comingSoon}>
          <div className={comingSoonText}> coming soon</div>
        </div>
        <div>
          <div className="text-block">
            <span className="text">
              {props.title}
            </span>
          </div>
          <Image className={imgStyle.nonFocus} src={props.imgSource} alt="" />
        </div>
      </div>
    </Link>
  )
}

