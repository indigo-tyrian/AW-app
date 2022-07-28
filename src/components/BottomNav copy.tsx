
import { HomeIcon } from "./svg/HomeSvg"
import { MagnifyingGlassIcon } from "./svg/MagnifyingGlassSvg"
import { PostIcon } from "./svg/PostSvg"
import { SavedIcon } from "./svg/SavedSvg"
import { SettingIcon } from "./svg/SettingPersonSvg"
import { Style, containerStyle, iconStyle, iconTextStyle, svgContainerStyle } from "./styles/bottomNav.css"
import 'src/components/styles/global.css'
import { phoneAreaBase } from "src/components/styles/global.css"
import { MouseEvent, useState } from "react"
// import Ripples from 'react-ripples'




const BottomNav = () => {

  const [home, setHome] = useState(false)
  const [saved, setSaved] = useState(false)
  const [post, setIPost] = useState(false)
  const [search, setIsSearch] = useState(false)
  const [setting, setIsSetting] = useState(false)

  const homeClicked = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHome(!home)
      setSaved(false)
      setIPost(false)
      setIsSearch(false)
      setIsSetting(false)
    }
  }

  const savedClicked = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHome(false)
      setSaved(!saved)
      setIPost(false)
      setIsSearch(false)
      setIsSetting(false)
    }
  }

  const postClicked = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHome(false)
      setSaved(false)
      setIPost(!post)
      setIsSearch(false)
      setIsSetting(false)
    }
  }

  const searchClicked = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHome(false)
      setSaved(false)
      setIPost(false)
      setIsSearch(!search)
      setIsSetting(false)
    }
  }




  const settingClicked = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHome(false)
      setSaved(false)
      setIPost(false)
      setIsSearch(false)
      setIsSetting(!setting)
    }
  }


  return (
    <nav className={`${Style} ${phoneAreaBase}`} >
      <div className={containerStyle}>
        {/* <Ripples> */}
        <div className={`${home ? iconStyle.white : iconStyle.gray} `} id="home" onMouseDown={homeClicked}>
          <div className={svgContainerStyle}><HomeIcon /></div>
          <div className={iconTextStyle}>Home</div>
        </div>
        {/* </Ripples>
        <Ripples> */}
        <div className={`${saved ? iconStyle.white : iconStyle.gray} `} id="saved" onMouseDown={savedClicked}>
          <div className={svgContainerStyle}><SavedIcon fillColor={`${saved ? 'white' : 'gray'} `} /></div>
          <div className={iconTextStyle}>Saved</div>
        </div>
        {/* </Ripples>
        <Ripples> */}
        <div className={`${post ? iconStyle.white : iconStyle.gray} `} id="post" onMouseDown={postClicked}>
          <div className={svgContainerStyle}><PostIcon fillColor={`${post ? 'white' : 'gray'} `} /></div>
          <div className={iconTextStyle}>Post</div>
        </div>
        {/* </Ripples>
        <Ripples> */}
        <div className={`${search ? iconStyle.white : iconStyle.gray} `} onMouseDown={searchClicked}>
          <div className={svgContainerStyle}><MagnifyingGlassIcon fillColor={`${search ? 'white' : 'gray'} `} /></div>
          <div className={iconTextStyle}>Search</div>
        </div>
        {/* </Ripples>
        <Ripples> */}
        <div className={`${setting ? iconStyle.white : iconStyle.gray} `} onMouseDown={settingClicked}>
          <div className={svgContainerStyle}><SettingIcon fillColor={`${setting ? 'white' : 'gray'} `} /></div>
          <div className={iconTextStyle}>Setting</div>
        </div>
        {/* </Ripples> */}
      </div>
    </nav>

  )
}

export default BottomNav