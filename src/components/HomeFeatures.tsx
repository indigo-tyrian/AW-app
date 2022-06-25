import { HomeFeaturesComp } from './HomeFeaturesComp'
import { containerStyle } from './styles/ImageWindow.css';
import { comingSoonStyle } from './styles/comingSoon.css'
import Header from './Header'
import { contentStyle } from './styles/global.css';

export function HomeFeatures() {
  return (
    <>
      <Header />
      <div className={`${containerStyle} ${contentStyle}`}>
        <HomeFeaturesComp title='Living Things' text='How is the weather of the world?' imgSource='/images/home/home-animal.jpg' comingSoon="" link='/livingThings' />

        <HomeFeaturesComp title='Arts' text='How is the weather of the world?' imgSource='/images/home/home-art.jpg' comingSoon='' link='/arts' />

        <HomeFeaturesComp title='Foods' text='How is the weather of the world?' imgSource='/images/home/home-foods.jpg' comingSoon='' link='/foods' />

        <HomeFeaturesComp title='Movies' text='How is the weather of the world?' imgSource='/images/home/home-movie.jpg' comingSoon="" link='/movies' />

        <HomeFeaturesComp title='History' text='How is the weather of the world?' imgSource='/images/home/home-histories.jpg' comingSoon="" link='/histories' />

        <HomeFeaturesComp title='Knowledge' text='How is the weather of the world?' imgSource='/images/home/home-knowledge.jpg' comingSoon="" link='/knowledge' />

        <HomeFeaturesComp title='Cities' text='How is the weather of the world?' imgSource='/images/home/home-city.jpg' comingSoon={comingSoonStyle} link='/cities' />

        <HomeFeaturesComp title='Buildings' text='How is the weather of the world?' imgSource='/images/home/home-building.jpg' comingSoon={comingSoonStyle} link='/buildings' />


        <HomeFeaturesComp title='Books' text='How is the weather of the world?' imgSource='/images/home/home-books.jpg' comingSoon={comingSoonStyle} link='/books' />

        <HomeFeaturesComp title='Stones' text='How is the weather of the world?' imgSource='/images/home/home-stone.jpg' comingSoon={comingSoonStyle} link='' />

        <HomeFeaturesComp title='Nature' text='How is the weather of the world?' imgSource='/images/home/home-nature.jpg' comingSoon={comingSoonStyle} link='/nature' />



        <HomeFeaturesComp title='Sister Relationship City' text='How is the weather of the world?' imgSource='/images/home/home-sister-city.jpg' comingSoon={comingSoonStyle} link='/sister-relationship-city' />



        <HomeFeaturesComp title='Flower' text='How is the weather of the world?' imgSource='/images/home/home-flower.jpg' comingSoon={comingSoonStyle} link='/flower' />
      </div>
    </>
  )
}
