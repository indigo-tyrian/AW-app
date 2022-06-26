import CopyLinkSvg from "../../../src/components/svg/CopyLinkSvg"
import FacebookSvg from "../../../src/components/svg/FacebookSvg"
import ShareSvg from "../../../src/components/svg/ShareSvg"
import TwitterSvg from "../../../src/components/svg/TwitterSvg"
import Data from "../../../src/json/LivingThings.json"
import { bigImgStyle, linkContainerStyle, bigImgContainerStyle, TitleNameStyle } from '../../../src/components/styles/eachOne.css'
import AboutContent from "../../../src/components/Aboutcontent"


interface Props {
  kk: {
    im: string[];
    name: string;
    title: string;
  }
}



const LivingThingsSpecies = () => {

  const one = "mammal"
  const kk = Data.species.find((d) => d.name == one) as {
    name: string;
    title: string;
    img: string[];
  }


  return (
    <>
      <div className={bigImgContainerStyle}>
        <img className={bigImgStyle} src={kk.img[0].replace(/['"]+/g, '')} alt="hhhhhhhhhhhhh" />
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