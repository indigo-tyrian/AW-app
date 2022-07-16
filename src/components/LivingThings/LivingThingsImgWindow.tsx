import 'src/components/styles/global.css'
import { containerStyle } from "src/components/styles/ImageWindow.css"
import { ImgWindow } from 'src/components/ImgWindow'
import { bigTextStyle, contentStyle } from 'src/components/styles/global.css'

const LivingThingsImgWindow = () => {
  return (
    <>
      <div className={bigTextStyle}>
        <div>Search by Habitat</div>
      </div>
      <div className={`${contentStyle} ${containerStyle}`}>

        <ImgWindow title1='Desert' totalNumber={110} imgSource='/images/livingThings/habitats/desert.jpg' link="/livingThings/habitats/desert" />
        <ImgWindow title1='Forest' totalNumber={110} imgSource='/images/livingThings/habitats/forest.jpg' link="/livingThings/habitats/forest" />
        <ImgWindow title1='Sandy Beach' totalNumber={110} imgSource='/images/livingThings/habitats/sandyBeach.jpg' link="/livingThings/habitats/sandy-beach" />
        <ImgWindow title1='Deep Sea' totalNumber={110} imgSource='/images/livingThings/habitats/deepSea.jpg' link="/livingThings/habitats/deep-sea" />
        <ImgWindow title1='Savanna' totalNumber={110} imgSource='/images/livingThings/habitats/savanna.jpg' link="/livingThings/habitats/savanna" />
        <ImgWindow title1='Sea' totalNumber={110} imgSource='/images/livingThings/habitats/sea.jpg' link="/livingThings/habitats/sea" />
        <ImgWindow title1='River' totalNumber={110} imgSource='/images/livingThings/habitats/river.jpg' link="/livingThings/habitats/river" />
        <ImgWindow title1='Rocky Shore' totalNumber={110} imgSource='/images/livingThings/habitats/rockyShore.jpg' link="/livingThings/habitats/rocky-shore" />
        <ImgWindow title1='Lake' totalNumber={110} imgSource='/images/livingThings/habitats/lake.jpg' link="/livingThings/habitats/lake" />
        <ImgWindow title1='Polar' totalNumber={110} imgSource='/images/livingThings/habitats/polar.jpg' link="/livingThings/habitats/polar" />
        <ImgWindow title1='Tropical Rain Forest' totalNumber={110} imgSource='/images/livingThings/habitats/tropicalRainForest.jpg' link="/livingThings/habitats/tropical-rain-forest" />
      </div>
    </>
  )
}

export default LivingThingsImgWindow        