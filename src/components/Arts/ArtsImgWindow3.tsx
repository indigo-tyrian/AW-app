
import '../styles/global.css'
import { containerStyle } from "../styles/ImageWindow.css"
import { ImgWindow } from '../ImgWindow'
import { bigTextStyle, contentStyle } from '../styles/global.css'

const ArtsImgWindow2 = () => {
  return (
    <>

      <div className={bigTextStyle}>
        <div  >Search by Styles</div>
      </div>
      <div className={`${contentStyle} ${containerStyle}`}>
        <ImgWindow title1='Modernism' totalNumber={110} imgSource='/images/arts/paintingStyles/modernism-Pedestal_Table_in_the_Studio.jpg' link="/arts/styles/modernism" />
        <ImgWindow title1='Impressionism' totalNumber={110} imgSource='/images/arts/paintingStyles/impressionism-Claude_Monet,_Impression,_soleil_levant.jpg' link="/arts/styles/impressionism" />
        <ImgWindow title1='Abstract styles' totalNumber={110} imgSource='/images/arts/paintingStyles/abstractStyle-Untitled_(First_Abstract_Watercolor)_by_Wassily_Kandinsky.jpg' link="/arts/styles/abstractStyles" />
        <ImgWindow title1='Realism' totalNumber={110} imgSource='/images/arts/paintingStyles/realism-Gustave_Courbet_018.jpg' link="/arts/styles/realism" />
        <ImgWindow title1='Photorealism' totalNumber={110} imgSource="/images/arts/paintingStyles/Photorealism-John's_Diner_by_John_Baeder.jpg" link="/arts/styles/photorealism" />
        <ImgWindow title1='Surrealism' totalNumber={110} imgSource='/images/arts/paintingStyles/surrealism-The_Red_Tower_by_Giorgio_de_Chirico.jpg' link="/arts/styles/surrealism" />
        <ImgWindow title1='Expressionism' totalNumber={110} imgSource='/images/arts/paintingStyles/expressionism-Large_Blue_Horses.jpg' link="/arts/styles/expressionism" />
        <ImgWindow title1='Cubism' totalNumber={110} imgSource='/images/arts/paintingStyles/cubism-Albert_Gleizes,_1910,_Femme_aux_Phlox.jpg' link="/arts/styles/cubism" />
        <ImgWindow title1='Chinese Style' totalNumber={110} imgSource='/images/arts/paintingStyles/chinese_painting-Loquats_and_Mountain_Bird.jpg' link="/arts/styles/chineseStyle" />
        <ImgWindow title1='Japanese Style' totalNumber={110} imgSource='/images/arts/paintingStyles/japanese_painting-Prune_sur_paravent_par_Kanō_Sanraku.jpg' link="/arts/styles/japaneseStyle" />
        <ImgWindow title1='Indian Style' totalNumber={110} imgSource='/images/arts/paintingStyles/Indian_painting-Patachitra of Naya village.jpg' link="/arts/styles/indianStyle" />
      </div>
    </>
  )
}
export default ArtsImgWindow2