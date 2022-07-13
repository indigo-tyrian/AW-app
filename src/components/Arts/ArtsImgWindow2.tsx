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

        <ImgWindow title1='Oil painting' totalNumber={110} imgSource='/images/arts/methods/oil-painting.jpg' link="/arts/painting-methods/oil-painting" />
        <ImgWindow title1='Watercolor painting' totalNumber={110} imgSource='/images/arts/methods/watercolor-painting.jpg' link="/arts/painting-methods/watercolor-painting" />
        <ImgWindow title1='Pastel painting' totalNumber={110} imgSource='/images/arts/methods/pastel.jpg' link="/arts/painting-methods/pastel-painting" />
      </div>

    </>
  )
}
export default ArtsImgWindow2