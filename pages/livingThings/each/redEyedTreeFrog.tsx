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


const RedEyedTreeFrog = (props: Props2) => {
  // const one = "redEyedTreeFrog"
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
        <Image className={bigImgStyle} src={kk.img[0].replace(/['"]+/g, '')} alt="" layout='fill' />
      </div>
      <div className={TitleNameStyle}>{kk.name}</div>
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
      {/* <ImageGallery
        imagePath0={kk.img[0].replace(/['"]+/g, '')}
        imagePath1={kk.img[1].replace(/['"]+/g, '')}
        imagePath2={kk.img[2].replace(/['"]+/g, '')}
        imagePath3={kk.img[3].replace(/['"]+/g, '')}
        imagePath4={kk.img[4].replace(/['"]+/g, '')}
        imagePath5={kk.img[5].replace(/['"]+/g, '')}
        imagePath6={kk.img[6].replace(/['"]+/g, '')}
        imagePath7={kk.img[7].replace(/['"]+/g, '')}
        imagePath8={kk.img[8].replace(/['"]+/g, '')}
        imagePath9={kk.img[9].replace(/['"]+/g, '')}
        imagePath10={kk.img[10].replace(/['"]+/g, '')}
        imagePath11={kk.img[11].replace(/['"]+/g, '')}
        imagePath12={kk.img[12].replace(/['"]+/g, '')}
        imagePath13={kk.img[13].replace(/['"]+/g, '')}
        imagePath14={kk.img[14].replace(/['"]+/g, '')}
        imagePath15={kk.img[15].replace(/['"]+/g, '')}
        imagePath16={kk.img[16].replace(/['"]+/g, '')}
        imagePath17={kk.img[17].replace(/['"]+/g, '')}
        imagePath18={kk.img[18].replace(/['"]+/g, '')}
        imagePath19={kk.img[19].replace(/['"]+/g, '')}
        imagePath20={kk.img[20].replace(/['"]+/g, '')}
        imagePath21={kk.img[21].replace(/['"]+/g, '')}
        imagePath22={kk.img[22].replace(/['"]+/g, '')}
        imagePath23={kk.img[23].replace(/['"]+/g, '')}
        imagePath24={kk.img[24].replace(/['"]+/g, '')}
        imagePath25={kk.img[25].replace(/['"]+/g, '')}
        imagePath26={kk.img[26].replace(/['"]+/g, '')}
        imagePath27={kk.img[27].replace(/['"]+/g, '')}
        imagePath28={kk.img[28].replace(/['"]+/g, '')}
        imagePath29={kk.img[29].replace(/['"]+/g, '')}
        imagePath30={kk.img[30].replace(/['"]+/g, '')}
      /> */}
    </>
  )
}


export default RedEyedTreeFrog;