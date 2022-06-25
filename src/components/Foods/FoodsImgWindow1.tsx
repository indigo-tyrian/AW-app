import { containerStyle } from "../styles/ImageWindow.css"
import { ImgWindow } from '../ImgWindow'
import '../styles/global.css'
import { bigTextStyle, contentStyle } from "../styles/global.css"

const FoodsIngredients1 = () => {
  return (
    <>
      <div className={bigTextStyle}>
        <div  >Search by Ingredients</div>
      </div>

      <div className={`${contentStyle} ${containerStyle}`}>


        <ImgWindow title1='Vegetable' totalNumber={110} imgSource='/images/foods/ingredients/vegetables.jpg' link="/foods/ingredients/vegetables" />
        <ImgWindow title1='Beans' totalNumber={110} imgSource='/images/foods/ingredients/beans.jpg' link="/foods/ingredients/beans" />
        <ImgWindow title1='Daily Products' totalNumber={110} imgSource='/images/foods/ingredients/dairyProducts.jpg' link="/foods/ingredients/dailyProducts" />
        <ImgWindow title1='Fruits' totalNumber={110} imgSource='/images/foods/ingredients/fruits.jpg' link="/foods/ingredients/fruits" />
        <ImgWindow title1='Fish' totalNumber={110} imgSource='/images/foods/ingredients/fish.jpg' link="/foods/ingredients/fish" />
        <ImgWindow title1='Eggs' totalNumber={110} imgSource='/images/foods/ingredients/eggs.jpg' link="/foods/ingredients/eggs" />
        <ImgWindow title1='Grains' totalNumber={110} imgSource='/images/foods/ingredients/grains.jpg' link="/foods/ingredients/grains" />
        <ImgWindow title1='Meat' totalNumber={110} imgSource='/images/foods/ingredients/meat.jpg' link="/foods/ingredients/meat" />
      </div>
    </>
  )
}

export default FoodsIngredients1        