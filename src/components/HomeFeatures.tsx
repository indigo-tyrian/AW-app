import { HomeFeaturesComp } from './HomeFeaturesComp'
import { containerStyle } from './styles/ImageWindow.css';
import Header from './Header'
import { contentStyle } from './styles/global.css';
import { HomeFeaturesCompNoLink } from './HomeFeaturesCompNoLink';

export function HomeFeatures() {
  return (
    <>
      <Header />
      <div className={`${containerStyle} ${contentStyle}`}>
        <HomeFeaturesComp title='Living Things' text='How is the weather of the world?' imgSource='/images/home/home-animal.jpg' link='/livingThings' />

        <HomeFeaturesComp title='Arts' text='How is the weather of the world?' imgSource='/images/home/home-art.jpg' link='/arts' />

        <HomeFeaturesComp title='Foods' text='How is the weather of the world?' imgSource='/images/home/home-foods.jpg' link='/foods' />

        <HomeFeaturesComp title='Movies' text='How is the weather of the world?' imgSource='/images/home/home-movie.jpg' link='/movies' />

        <HomeFeaturesComp title='Knowledge' text='How is the weather of the world?' imgSource='/images/home/home-knowledge.jpg' link='/knowledge' />

        {/* History */}
        <HomeFeaturesCompNoLink title='' text='How is the weather of the world?' imgSource='/images/home/home-histories.jpg' link='/histories' />

        {/* Cities */}
        <HomeFeaturesCompNoLink title='' text='How is the weather of the world?' imgSource='/images/home/home-city.jpg' link='/cities' />

        {/* Buildings */}
        <HomeFeaturesCompNoLink title='' text='How is the weather of the world?' imgSource='/images/home/home-building.jpg' link='/buildings' />

        {/* Books */}
        <HomeFeaturesCompNoLink title='' text='How is the weather of the world?' imgSource='/images/home/home-books.jpg' link='/books' />

        {/* Stones */}
        <HomeFeaturesCompNoLink title='' text='How is the weather of the world?' imgSource='/images/home/home-stone.jpg' link='' />

        {/* Nature */}
        <HomeFeaturesCompNoLink title='' text='How is the weather of the world?' imgSource='/images/home/home-nature.jpg' link='/nature' />


        {/* Sister Relationship City */}
        <HomeFeaturesCompNoLink title='' text='How is the weather of the world?' imgSource='/images/home/home-sister-city.jpg' link='/sister-relationship-city' />


        {/* Flower */}
        <HomeFeaturesCompNoLink title='' text='How is the weather of the world?' imgSource='/images/home/home-flower.jpg' link='/flower' />
      </div>
    </>
  )
}
