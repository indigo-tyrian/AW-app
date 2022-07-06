import 'src/components/styles/global.css'
import { containerStyle } from "src/components/styles/ImageWindow.css"
import { ImgWindow } from 'src/components/ImgWindow'
import { bigTextStyle, contentStyle } from 'src/components/styles/global.css'

const ArtsImgWindow2 = () => {
  return (
    <>
      <div className={bigTextStyle}>
        <div  >Search by Methods</div>
      </div>
      <div className={`${contentStyle} ${containerStyle}`}>

        <ImgWindow title1='Oil painting' totalNumber={110} imgSource='/images/arts/methods/oil-painting.jpg' link="/arts/methods/oilPainting" />
        <ImgWindow title1='Watercolor painting' totalNumber={110} imgSource='/images/arts/methods/watercolor-painting.jpg' link="/arts/methods/watercolorPainting" />
        <ImgWindow title1='Pastel painting' totalNumber={110} imgSource='/images/arts/methods/pastel.jpg' link="/arts/methods/pastelPainting" />
      </div>

    </>
  )
}
export default ArtsImgWindow2