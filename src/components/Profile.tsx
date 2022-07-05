import { containerStyle, imgStyle, nameStyle, textStyle } from "./styles/profile.css";
import Image from 'next/image'


export default function Profile() {

  const movieImage: string = 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg'
  return (
    <div className={containerStyle}>
      {/* <Image className={imgStyle} src="\images\movies\profilePic.jpg" alt="" layout='fill' /> */}

      <Image className={imgStyle} src={movieImage} alt="" layout='fill' />
      <div className={nameStyle}></div>
      <div className={textStyle}></div>
    </div>
  )
}