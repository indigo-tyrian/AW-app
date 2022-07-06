import { Footer, BottomNav, Countries, FoodsFirstSlider, FoodsImgWindow1, FoodsImgWindow2, FoodsTopic } from 'src/components/index'

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