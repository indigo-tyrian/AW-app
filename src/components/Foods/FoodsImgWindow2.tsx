import '../styles/global.css'
import { containerStyle } from "../styles/ImageWindow.css"
import { ImgWindow } from '../ImgWindow'
import { bigTextStyle, contentStyle } from '../styles/global.css'

const FoodsImgWindow2 = () => {
  return (
    <>
      <div className={bigTextStyle}>
        <div  >Search by Cooking</div>
      </div>
      <div className={`${contentStyle} ${containerStyle}`}>
        <ImgWindow title1='Deep Fried' totalNumber={110} imgSource='/images/foods/cooking/deep-fried.jpg' link="/foods/cooking/deepFried" />
        <ImgWindow title1='Stew' totalNumber={110} imgSource='/images/foods/cooking/stew.jpg' link="/foods/cooking/stew" />
      </div>
    </>
  )
}
export default FoodsImgWindow2