import CopyLinkSvg from "src/components/svg/CopyLinkSvg"
import FacebookSvg from "src/components/svg/FacebookSvg"
import ShareSvg from "src/components/svg/ShareSvg"
import TwitterSvg from "src/components/svg/TwitterSvg"
import { bigImgStyle, linkContainerStyle, TitleNameStyle, bigImgContainerStyle } from 'src/components/styles/eachOne.css'
import Data from "src/json/LivingThings.json"
import AboutContent from "src/components/Aboutcontent"
import ImageGallery from "src/components/ImgGallery"
import { useRouter } from 'next/router'
import 'src/components/styles/global.css'
import { Style, buttonContainerStyle, buttonExpandStyle, lineStyle, textStyle, descriptionTextStyle } from 'src/components/styles/eachOne.css'
import { MouseEvent, useState } from 'react'
import Image from 'next/image'

import { Props, Props2 } from 'interfaces/livingThingsInterface';
import Head from 'next/head'


const Peacock = (props: Props2) => {
  // const one = "peacock"
  const router = useRouter()
  const one = router.asPath.replace("/livingThings/", "")
  const kk: Props = Data.each.find((d) => d.name == one) as Props
  const [hidden, setHidden] = useState(false)

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHidden(false)
    }
  }

  const onClick2 = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHidden(true)
    }
  }

  return (
    <>
      <div className={bigImgContainerStyle}>
        <Image className={bigImgStyle} src="https://images.pexels.com/photos/2196587/pexels-photo-2196587.jpeg" alt="" layout='fill' />
      </div>
      {/* <div className={TitleNameStyle}>{kk.name}</div> */}
      <div className={linkContainerStyle}>
        <span style={{ top: -12 }}>
          <div >
            <CopyLinkSvg fillColor="while" />
          </div>
        </span>
        <div role="button">
          <ShareSvg />
        </div>
        <div role="button">
          <TwitterSvg />
        </div>
        <div style={{ top: -12 }}>
          <FacebookSvg />
        </div>
      </div>

      <div className={Style}>
        <div className={lineStyle}>About</div>
        <div className={`${hidden ? descriptionTextStyle.expand : descriptionTextStyle.fold} `}>{props.contentPath}
        </div>
        <div className={`${buttonExpandStyle} ${textStyle}`}>
          <div className={buttonContainerStyle}>
            <span>
              {hidden ? (
                <div onClick={onClick}> read less</div>
              ) :
                (<div onClick={onClick2}> read more</div>
                )}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}


export default Peacock;