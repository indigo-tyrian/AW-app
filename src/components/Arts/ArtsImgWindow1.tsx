import 'src/components/styles/global.css'
import { containerStyle } from "src/components/styles/ImageWindow.css"
import { ImgWindow } from 'src/components/ImgWindow'
import { bigTextStyle, contentStyle } from 'src/components/styles/global.css'

const ArtsImgWindow1 = () => {
  return (
    <>
      <div className={bigTextStyle}>
        <div  >Search by Period</div>
      </div>
      <div className={`${contentStyle} ${containerStyle}`}>
        <ImgWindow title1='Ancient Times' totalNumber={110} imgSource='/images/arts/period/Lascaux_ancient.jpg' link="/arts/period/ancientTimes" />
        <ImgWindow title1='500-1400' totalNumber={110} imgSource='/images/arts/period/Duccio_di_Buoninsegna_c-1308.jpg' link="/arts/period/500-1400" />
        <ImgWindow title1='1400-1500' totalNumber={110} imgSource='/images/arts/period/Anunciación_c-1425.jpg' link="/arts/period/1400-1500" />
        <ImgWindow title1='1500-1600' totalNumber={110} imgSource='/images/arts/period/Jacopo_Tintoretto_The_Origin_of_the_Milky_Way_c-1582.jpg' link="/arts/period/1500-1600" />
        <ImgWindow title1='1600-1700' totalNumber={110} imgSource='/images/arts/period/Johannes_Vermeer_-_Het_melkmeisje_c-1657.jpg' link="/arts/period/1600-1700" />
        <ImgWindow title1='1700-1800' totalNumber={110} imgSource='/images/arts/period/Sir_Joshua_Reynolds_-_Colonel_Acland_and_Lord_Sydney-_The_Archers_c-1769.jpg' link="/arts/period/1700-1800" />
        <ImgWindow title1='1800-1900' totalNumber={110} imgSource='/images/arts/period/The_Fighting_Temeraire,_JMW_Turner,_c-1838.jpg' link="/arts/period/1800-1900" />
        <ImgWindow title1='1900-2000' totalNumber={110} imgSource='/images/arts/period/Henri_Rousseau_c-1910.jpg' link="/arts/period/1900-2000" />
      </div>
    </>
  )
}
export default ArtsImgWindow1