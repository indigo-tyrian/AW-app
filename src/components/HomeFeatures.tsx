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
        <HomeFeaturesComp title='Living Things' text='How is the weather of the world?' imgSource='/images/home/home-animal.jpg' comingSoonText='' comingSoonClass="" link='/livingThings' />

        <HomeFeaturesComp title='Arts' text='How is the weather of the world?' imgSource='/images/home/home-art.jpg' comingSoonText='' comingSoonClass='' link='/arts' />

        <HomeFeaturesComp title='Foods' text='How is the weather of the world?' imgSource='/images/home/home-foods.jpg' comingSoonText='' comingSoonClass='' link='/foods' />

        <HomeFeaturesComp title='Movies' text='How is the weather of the world?' imgSource='/images/home/home-movie.jpg' comingSoonText='' comingSoonClass="" link='/movies' />

        <HomeFeaturesComp title='Knowledge' text='How is the weather of the world?' imgSource='/images/home/home-knowledge.jpg' comingSoonText='' comingSoonClass="" link='/knowledge' />

        {/* History */}
        <HomeFeaturesComp title='' text='How is the weather of the world?' imgSource='/images/home/home-histories.jpg' comingSoonText='Coming Soon' comingSoonClass={comingSoonStyle} link='/histories' />

        {/* Cities */}
        <HomeFeaturesComp title='' text='How is the weather of the world?' imgSource='/images/home/home-city.jpg' comingSoonText='Coming Soon' comingSoonClass={comingSoonStyle} link='/cities' />

        {/* Buildings */}
        <HomeFeaturesComp title='' text='How is the weather of the world?' imgSource='/images/home/home-building.jpg' comingSoonText='Coming Soon' comingSoonClass={comingSoonStyle} link='/buildings' />

        {/* Books */}
        <HomeFeaturesComp title='' text='How is the weather of the world?' imgSource='/images/home/home-books.jpg' comingSoonText='Coming Soon' comingSoonClass={comingSoonStyle} link='/books' />

        {/* Stones */}
        <HomeFeaturesComp title='' text='How is the weather of the world?' imgSource='/images/home/home-stone.jpg' comingSoonText='Coming Soon' comingSoonClass={comingSoonStyle} link='' />

        {/* Nature */}
        <HomeFeaturesComp title='' text='How is the weather of the world?' imgSource='/images/home/home-nature.jpg' comingSoonText='Coming Soon' comingSoonClass={comingSoonStyle} link='/nature' />


        {/* Sister Relationship City */}
        <HomeFeaturesComp title='' text='How is the weather of the world?' imgSource='/images/home/home-sister-city.jpg' comingSoonText='Coming Soon' comingSoonClass={comingSoonStyle} link='/sister-relationship-city' />


        {/* Flower */}
        <HomeFeaturesComp title='' text='How is the weather of the world?' imgSource='/images/home/home-flower.jpg' comingSoonText='Coming Soon' comingSoonClass={comingSoonStyle} link='/flower' />
      </div>
    </>
  )
}
