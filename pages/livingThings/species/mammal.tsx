import CopyLinkSvg from "src/components/svg/CopyLinkSvg"
import FacebookSvg from "src/components/svg/FacebookSvg"
import ShareSvg from "src/components/svg/ShareSvg"
import TwitterSvg from "src/components/svg/TwitterSvg"
import Data from "src/json/LivingThings.json"
import { bigImgStyle, linkContainerStyle, bigImgContainerStyle, TitleNameStyle } from 'src/components/styles/eachOne.css'
// import AboutContent from "src/components/AboutContent"
import NextImageComp from 'src/components/NextImageComp';
import { nextImageAdjustment } from 'src/components/styles/nextImage.css';
import { Props, Props2 } from 'interfaces/livingThingsInterface';
import Head from 'next/head'

import { useRouter } from 'next/router'


const LivingThingsSpecies = () => {

  // const one = "mammal"
  const router = useRouter()
  const one = router.asPath.replace("/livingThings/species/", "")
  const kk = Data.species.find((d) => d.name == one) as Props


  return (
    <>
      <div className={bigImgContainerStyle}>
        <NextImageComp containerClassName={nextImageAdjustment.landscape} boxClassName={bigImgStyle} src={kk.img[0].replace(/['"]+/g, '')} alt="" />
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

      {/* <AboutContent contentPath={kk.contents} /> */}
    </>
  )
}

export default LivingThingsSpecies;