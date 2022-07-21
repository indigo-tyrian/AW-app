import CopyLinkSvg from "src/components/svg/CopyLinkSvg"
import FacebookSvg from "src/components/svg/FacebookSvg"
import ShareSvg from "src/components/svg/ShareSvg"
import TwitterSvg from "src/components/svg/TwitterSvg"
import { bigImgStyle, linkContainerStyle, TitleNameStyle, bigImgContainerStyle } from 'src/components/styles/eachOne.css'
import AboutContent from "src/components/Aboutcontent"
import { useRouter } from 'next/router'
import 'src/components/styles/global.css'
import { Style, buttonContainerStyle, buttonExpandStyle, lineStyle, textStyle, descriptionTextStyle } from 'src/components/styles/eachOne.css'
import { MouseEvent, useState, useEffect } from 'react'
import NextImageComp from 'src/components/NextImageComp';
import { Props, Props2 } from 'interfaces/livingThingsInterface';
import Head from 'next/head'
import { nextImageAdjustment } from "src/components/styles/nextImage.css"
import { supabase } from 'utils/supabaseClient'

const ArtStyles = ({ id }: { id: string }) => {
  const router = useRouter()
  const one = router.asPath.replace("/arts/painting-styles/", "")
  const [artsStylesData, setArtsStylesData] = useState<any>({});
  const [hidden, setHidden] = useState(false)

  const fetchArtsStyles = async () => {
    let { data: artsStyles, error }: any = await supabase
      .from('arts_styles')
      .select('title,name,image_URL')

    const kk = await artsStyles.find((d: any) => d.name == id)
    setArtsStylesData(kk);
    console.log(kk);
  }

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

  useEffect(() => {
    fetchArtsStyles();
  }, []);

  console.log(artsStylesData)

  return (
    <>
      <div className={bigImgContainerStyle}>
        <NextImageComp containerClassName={nextImageAdjustment.landscape} boxClassName={bigImgStyle} src={artsStylesData.image_URL ? artsStylesData.image_URL : "/images/black"} alt="" />
      </div>
      <div className={TitleNameStyle}>{artsStylesData.title}</div>
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

      </div>
    </>
  )
}

export default ArtStyles;