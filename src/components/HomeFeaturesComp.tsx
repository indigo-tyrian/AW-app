import Link from 'next/link'

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
          <img className={imgStyle.nonFocus} src={props.imgSource} />
        </div>
      </div>
    </Link>
  )
}

