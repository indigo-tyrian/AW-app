import { containerStyle, imgStyle, nameStyle, textStyle } from "./styles/profile.css";


export function SpeciesComp() {
  return (
    <div className={containerStyle}>
      <img className={imgStyle} src="\images\movies\profilePic.jpg" alt="" />
      <div className={nameStyle}></div>
      <div className={textStyle}></div>
    </div>
  )
}