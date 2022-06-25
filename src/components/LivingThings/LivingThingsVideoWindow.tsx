import '../styles/global.css'
import { SpeciesComp } from '../VideoWindowComp'
import { viewStyle, containerStyle } from "../styles/videoWindow.css"
import { contentStyle, tabAreaBase, bigTextStyle } from '../styles/global.css'

const LivingThingsVideoWindow = () => {
  return (
    <div className={tabAreaBase}>
      <div className={bigTextStyle}>
        <div  >Search by Species</div>
      </div>
      <div className={`${contentStyle} `} >
        <div className={containerStyle}>
          <SpeciesComp title='Mammal' totalNumber={33} imgSource='/images/livingThings/species/mammal.jpg' videoSource='/videos/livingThings/mammal.mp4' link="/livingThings/species/mammal" />

          <SpeciesComp title='Reptile' totalNumber={33} imgSource='/images/livingThings/species/reptile.jpg' videoSource='/videos/livingThings/reptile-2.mp4' link="/livingThings/species/reptile" />

          <SpeciesComp title='Amphibian' totalNumber={33} imgSource='/images/livingThings/species/amphibian.jpg' videoSource='/videos/livingThings/amphibian.mp4' link="/livingThings/species/amphibian" />

          <SpeciesComp title='bird' totalNumber={33} imgSource='/images/livingThings/species/bird.jpg' videoSource='/videos/livingThings/bird.mp4' link="/livingThings/species/bird" />

          <SpeciesComp title='fish' totalNumber={33} imgSource='/images/livingThings/species/fish.jpg' videoSource='/videos/livingThings/fish.mp4' link="/livingThings/species/fish" />

          <SpeciesComp title='mollusca' totalNumber={33} imgSource='/images/livingThings/species/mollusca.jpg' videoSource='/videos/livingThings/mollsca.mp4' link="/livingThings/species/mollusca" />

          <SpeciesComp title='crustacean' totalNumber={33} imgSource='/images/livingThings/species/crustacean.jpg' videoSource='/videos/livingThings/crustacian.mp4' link="/livingThings/species/crustacean" />

          <SpeciesComp title='insect' totalNumber={33} imgSource='/images/livingThings/species/insect.jpg' videoSource='/videos/livingThings/insect.mp4' link="/livingThings/species/insect" />
        </div>
      </div>
    </div >
  )
}

export default LivingThingsVideoWindow