import { Footer, BottomNav, Countries, FoodsFirstSlider, FoodsImgWindow1, FoodsImgWindow2, FoodsTopic } from 'src/components/index'
import Head from 'next/head'

function Foods() {
  return (
    <>
      <FoodsFirstSlider />
      <FoodsTopic />
      <FoodsImgWindow1 />
      <FoodsImgWindow2 />
      <Countries />
      <Footer />
      <BottomNav />
    </>
  )
}

export default Foods