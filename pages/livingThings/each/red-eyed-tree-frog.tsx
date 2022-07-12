import CopyLinkSvg from "src/components/svg/CopyLinkSvg"
import FacebookSvg from "src/components/svg/FacebookSvg"
import ShareSvg from "src/components/svg/ShareSvg"
import TwitterSvg from "src/components/svg/TwitterSvg"
import { bigImgStyle, linkContainerStyle, TitleNameStyle, bigImgContainerStyle } from 'src/components/styles/eachOne.css'
import AboutContent from "src/components/Aboutcontent"
import ImageGallery from "src/components/ImgGallery"
import { useRouter } from 'next/router'
import 'src/components/styles/global.css'
import { Style, buttonContainerStyle, buttonExpandStyle, lineStyle, textStyle, descriptionTextStyle } from 'src/components/styles/eachOne.css'
import { MouseEvent, useState, useEffect } from 'react'
import NextImageComp from 'src/components/NextImageComp';
import { Props, Props2 } from 'interfaces/livingThingsInterface';
import Head from 'next/head'
import { nextImageAdjustment } from "src/components/styles/nextImage.css"
import { supabase } from 'utils/supabaseClient'

const RedEyedTreeFrog = (props: Props2) => {
  const router = useRouter()
  const one = router.asPath.replace("/livingThings/each/", "")
  const [livingThingsData, setLivingThingsData] = useState<any>({});
  const [hidden, setHidden] = useState(false)

  const fetchLivingThings = async () => {
    let { data: LivingThings, error }: any = await supabase
      .from('livingThings_each')
      .select('name,i0:image_URL->0')

    const kk = await LivingThings.find((d: any) => d.name == one)
    setLivingThingsData(kk);
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
    fetchLivingThings();
  }, []);

  return (
    <>
      <div className={bigImgContainerStyle}>
        <NextImageComp containerClassName={nextImageAdjustment.landscape} boxClassName={bigImgStyle} src={livingThingsData.i0 ? livingThingsData.i0 : "/images/black"} alt="" />
      </div>
      <div className={TitleNameStyle}>{livingThingsData.name}</div>
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
        imagePath0={livingThingsData.i0 ? livingThingsData.i0 : "/images/black"}
        imagePath1={livingThingsData.i1 ? livingThingsData.i1 : "/images/black"}
        imagePath2={livingThingsData.i2 ? livingThingsData.i2 : "/images/black"}
        imagePath3={livingThingsData.i3 ? livingThingsData.i3 : "/images/black"}
        imagePath4={livingThingsData.i4 ? livingThingsData.i4 : "/images/black"}
        imagePath5={livingThingsData.i5 ? livingThingsData.i5 : "/images/black"}
        imagePath6={livingThingsData.i6 ? livingThingsData.i6 : "/images/black"}
        imagePath7={livingThingsData.i7 ? livingThingsData.i7 : "/images/black"}
        imagePath8={livingThingsData.i8 ? livingThingsData.i8 : "/images/black"}
        imagePath9={livingThingsData.i9 ? livingThingsData.i9 : "/images/black"}
        imagePath10={livingThingsData.i10 ? livingThingsData.i10 : "/images/black"}
        imagePath11={livingThingsData.i11 ? livingThingsData.i11 : "/images/black"}
        imagePath12={livingThingsData.i12 ? livingThingsData.i12 : "/images/black"}
        imagePath13={livingThingsData.i13 ? livingThingsData.i13 : "/images/black"}
        imagePath14={livingThingsData.i14 ? livingThingsData.i14 : "/images/black"}
        imagePath15={livingThingsData.i15 ? livingThingsData.i15 : "/images/black"}
        imagePath16={livingThingsData.i16 ? livingThingsData.i16 : "/images/black"}
        imagePath17={livingThingsData.i17 ? livingThingsData.i17 : "/images/black"}
        imagePath18={livingThingsData.i18 ? livingThingsData.i18 : "/images/black"}
        imagePath19={livingThingsData.i19 ? livingThingsData.i19 : "/images/black"}
        imagePath20={livingThingsData.i20 ? livingThingsData.i20 : "/images/black"}
        imagePath21={livingThingsData.i21 ? livingThingsData.i21 : "/images/black"}
        imagePath22={livingThingsData.i22 ? livingThingsData.i22 : "/images/black"}
        imagePath23={livingThingsData.i23 ? livingThingsData.i23 : "/images/black"}
        imagePath24={livingThingsData.i24 ? livingThingsData.i24 : "/images/black"}
        imagePath25={livingThingsData.i25 ? livingThingsData.i25 : "/images/black"}
        imagePath26={livingThingsData.i26 ? livingThingsData.i26 : "/images/black"}
        imagePath27={livingThingsData.i27 ? livingThingsData.i27 : "/images/black"}
        imagePath28={livingThingsData.i28 ? livingThingsData.i28 : "/images/black"}
        imagePath29={livingThingsData.i29 ? livingThingsData.i29 : "/images/black"}
        imagePath30={livingThingsData.i30 ? livingThingsData.i30 : "/images/black"}
      /> */}
    </>
  )
}

export default RedEyedTreeFrog;
