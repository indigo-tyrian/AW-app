import 'src/components/styles/global.css'
import { containerStyle } from "src/components/styles/ImageWindow.css"
import { ImgWindow } from 'src/components/ImgWindow'
import { bigTextStyle, contentStyle } from 'src/components/styles/global.css'

const FoodsImgWindow2 = () => {
  return (
    <>
      <div className={bigTextStyle}>
        <div  >Search by Cooking</div>
      </div>
      <div className={`${contentStyle} ${containerStyle}`}>
        <ImgWindow title1='Deep Fried' totalNumber={110} imgSource='/images/foods/cooking/deep-fried.jpg' link="/foods/cooking/deep-fried" />
        <ImgWindow title1='Stew' totalNumber={110} imgSource='/images/foods/cooking/stew.jpg' link="/foods/cooking/stew" />
      </div>
    </>
  )
}
export default FoodsImgWindow2