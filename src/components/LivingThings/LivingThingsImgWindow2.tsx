import '../styles/global.css'
import { containerStyle } from "../styles/ImageWindow.css"
import { ImgWindow } from '../ImgWindow'
import { bigTextStyle, contentStyle, phoneOnlyAreaBase } from '../styles/global.css'

const LivingThingsImgWindow2 = () => {
  return (
    <div className={phoneOnlyAreaBase}>
      <div className={bigTextStyle}>
        <div  >Search by Species</div>
      </div>
      <div className={`${contentStyle} ${containerStyle} `}>

        <ImgWindow title1='Mammal' totalNumber={110} imgSource='/images/livingThings/species/mammal.jpg' link="/livingThings/species/mammal" />
        <ImgWindow title1='reptile' totalNumber={110} imgSource='/images/livingThings/species/reptile.jpg' link="/livingThings/species/reptile" />
        <ImgWindow title1='amphibian' totalNumber={110} imgSource='/images/livingThings/species/amphibian.jpg' link="/livingThings/species/amphibian" />
        <ImgWindow title1='bird' totalNumber={110} imgSource='/images/livingThings/species/bird.jpg' link="/livingThings/species/bird" />
        <ImgWindow title1='fish' totalNumber={110} imgSource='/images/livingThings/species/fish.jpg' link="/livingThings/species/fish" />
        <ImgWindow title1='mollusca' totalNumber={110} imgSource='/images/livingThings/species/mollusca.jpg' link="/livingThings/species/mollusca" />
        <ImgWindow title1='crustacean' totalNumber={110} imgSource='/images/livingThings/species/crustacean.jpg' link="/livingThings/species/crustacean" />
        <ImgWindow title1='insect' totalNumber={110} imgSource='/images/livingThings/species/insect.jpg' link="/livingThings/species/insect" />
      </div>
    </div>
  )
}

export default LivingThingsImgWindow2        