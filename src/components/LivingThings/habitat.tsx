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
import Image from 'next/image';


const Habitat = ({ id }: { id: string }) => {
  const router = useRouter()
  const one = router.asPath.replace("/livingThings/habitats/", "")
  const [livingThingsData, setLivingThingsData] = useState<any>({});
  const [hidden, setHidden] = useState(false)

  const fetchLivingThings = async () => {
    let { data: LivingThings, error }: any = await supabase
      .from('livingThings_habitats')
      .select('name,title,image_URL')

    const kk = await LivingThings.find((d: any) => d.name == id)
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

  console.log(livingThingsData)

  return (
    <>
      <div className={bigImgContainerStyle}>
        <div className={nextImageAdjustment.landscape}>
          <Image src={livingThingsData.image_URL ? livingThingsData.image_URL : "/images/black"} alt="" objectFit='cover' layout='fill' priority />
        </div>
      </div>
      <div className={TitleNameStyle}>{livingThingsData.title}</div>
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
        {/* <div className={`${hidden ? descriptionTextStyle.expand : descriptionTextStyle.fold} `}>{props.contentPath}
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
        </div> */}
      </div>
    </>
  )
}

export default Habitat;