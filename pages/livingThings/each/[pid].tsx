import CopyLinkSvg from "../../../src/components/svg/CopyLinkSvg"
import FacebookSvg from "../../../src/components/svg/FacebookSvg"
import ShareSvg from "../../../src/components/svg/ShareSvg"
import TwitterSvg from "../../../src/components/svg/TwitterSvg"
import { bigImgStyle, linkContainerStyle, TitleNameStyle, bigImgContainerStyle } from '../../../src/components/styles/eachOne.css'
import db from '../../../src/firebase'
import { useState, useEffect } from 'react';
import Data from "../../../src/components/LivingThings.json"
import AboutContent from "../../../src/components/Aboutcontent"
import ImageGallery from "../../../src/components/ImgGallery"
import { useRouter } from 'next/router'


const LivingThingsEach = () => {
  const router = useRouter();
  const one: keyof typeof Data.each = router.query.pid
  // const one = router.query.pid;
  return (
    <>
      <div className={bigImgContainerStyle}>
        <img className={bigImgStyle} src={Data.each[one].img[0].replace(/['"]+/g, '')} alt="" />
      </div>
      <div className={TitleNameStyle}>{Data.each[one].name}</div>
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

      <AboutContent contentPath={Data.each[one].about.contents} />
      <ImageGallery
        imagePath0={Data.each[one].img[0].replace(/['"]+/g, '')}
        imagePath1={Data.each[one].img[1].replace(/['"]+/g, '')}
        imagePath2={Data.each[one].img[2].replace(/['"]+/g, '')}
        imagePath3={Data.each[one].img[3].replace(/['"]+/g, '')}
        imagePath4={Data.each[one].img[4].replace(/['"]+/g, '')}
        imagePath5={Data.each[one].img[5].replace(/['"]+/g, '')}
        imagePath6={Data.each[one].img[6].replace(/['"]+/g, '')}
        imagePath7={Data.each[one].img[7].replace(/['"]+/g, '')}
        imagePath8={Data.each[one].img[8].replace(/['"]+/g, '')}
        imagePath9={Data.each[one].img[9].replace(/['"]+/g, '')}
        imagePath10={Data.each[one].img[10].replace(/['"]+/g, '')}
        imagePath11={Data.each[one].img[11].replace(/['"]+/g, '')}
        imagePath12={Data.each[one].img[12].replace(/['"]+/g, '')}
        imagePath13={Data.each[one].img[13].replace(/['"]+/g, '')}
        imagePath14={Data.each[one].img[14].replace(/['"]+/g, '')}
        imagePath15={Data.each[one].img[15].replace(/['"]+/g, '')}
        imagePath16={Data.each[one].img[16].replace(/['"]+/g, '')}
        imagePath17={Data.each[one].img[17].replace(/['"]+/g, '')}
        imagePath18={Data.each[one].img[18].replace(/['"]+/g, '')}
        imagePath19={Data.each[one].img[19].replace(/['"]+/g, '')}
        imagePath20={Data.each[one].img[20].replace(/['"]+/g, '')}
        imagePath21={Data.each[one].img[21].replace(/['"]+/g, '')}
        imagePath22={Data.each[one].img[22].replace(/['"]+/g, '')}
        imagePath23={Data.each[one].img[23].replace(/['"]+/g, '')}
        imagePath24={Data.each[one].img[24].replace(/['"]+/g, '')}
        imagePath25={Data.each[one].img[25].replace(/['"]+/g, '')}
        imagePath26={Data.each[one].img[26].replace(/['"]+/g, '')}
        imagePath27={Data.each[one].img[27].replace(/['"]+/g, '')}
        imagePath28={Data.each[one].img[28].replace(/['"]+/g, '')}
        imagePath29={Data.each[one].img[29].replace(/['"]+/g, '')}
        imagePath30={Data.each[one].img[30].replace(/['"]+/g, '')}
      />
    </>
  )
}

export default LivingThingsEach;