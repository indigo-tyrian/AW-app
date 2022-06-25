import CopyLinkSvg from "../../../src/components/svg/CopyLinkSvg"
import FacebookSvg from "../../../src/components/svg/FacebookSvg"
import ShareSvg from "../../../src/components/svg/ShareSvg"
import TwitterSvg from "../../../src/components/svg/TwitterSvg"
import Data from "../../../src/components/LivingThings.json"
import { bigImgStyle, linkContainerStyle, bigImgContainerStyle, TitleNameStyle } from '../../../src/components/styles/eachOne.css'
import AboutContent from "../../../src/components/Aboutcontent"
import { useRouter } from 'next/router'


const LivingThingsHabitats = () => {
  const router = useRouter()
  const one: keyof typeof Data.habitats = router.query.pid
  return (
    <>
      <div className={bigImgContainerStyle}>
        <img className={bigImgStyle} src={Data.habitats[one].img[0].replace(/['"]+/g, '')} alt="hhhhhhhhhhhhh" />
      </div>
      <div className={TitleNameStyle}>{Data.habitats[one].name}</div>
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

      <AboutContent contentPath={Data.habitats[one].contents} />
    </>
  )
}

export default LivingThingsHabitats;