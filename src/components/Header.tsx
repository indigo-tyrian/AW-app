import '../components/styles/global.css'

import { headerStyle, navTextStyle, languageContainerStyle, languageExpandJpStyle, languageExpandStyle, languageInputStyle, languageLabelStyle, languageStyle, } from "./styles/header.css"
import { MagnifyingGlassIcon } from "./svg/MagnifyingGlassSvg"
import Input from './Input';
import Logo from './Logo';
import { containerStyle, inputSearchBoxStyle, searchButtonStyle } from './styles/Input.css';
import { logoStyle } from './styles/logo.css';

interface Props {
  text?: string;
}

const Header = (props: Props) => {
  return (
    <header>
      <nav className={headerStyle}>
        <Logo class={logoStyle.flex} />
        {/* <div className={navTextStyle}>
          <div>Living Things</div>
        </div> */}
        <Input class2={`${containerStyle.home}`} class1={` ${inputSearchBoxStyle.home}`} />
      </nav>
      {/* <div className={languageStyle}>
          <div className={languageContainerStyle}>
            <input className={languageInputStyle} type="radio" id="lang-en" ></input>
            <label className={languageLabelStyle} htmlFor="lang-en">
              English
              <div className={languageExpandStyle}></div>
            </label>
            <input className={languageInputStyle} type="radio" id="lang-ja"></input>
            <label className={languageExpandJpStyle} htmlFor="lang-ja">
              日本語
              <div className={languageExpandStyle}></div>
            </label>
          </div>
        </div> */}
    </header>
  )
}

export default Header
