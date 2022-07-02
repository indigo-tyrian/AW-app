import { containerStyle, imgStyle, nameStyle, textStyle } from "./styles/profile.css";
import Image from 'next/image'


export function SpeciesComp() {
  return (
    <div className={containerStyle}>
      <Image className={imgStyle} src="\images\movies\profilePic.jpg" alt="" />
      <div className={nameStyle}></div>
      <div className={textStyle}></div>
    </div>
  )
}