import Link from 'next/link';
import 'src/components/styles/global.css'

import { Style, containerStyle, buttonStyle, allRightsStyle } from "./styles/footer.css";
import { logoAStyle, logoStyle } from './styles/logo.css';

const Footer = () => {
  return (
    <footer className={Style}>
      <div className={`${logoStyle.footer}`}> <a className={logoAStyle}>Augmented <br /> World</a></div>
      <div className={containerStyle}>

        {/* <Link href="privacy-policy">
          <div className={buttonStyle} >
            <div>Privacy Policy</div>
          </div>
        </Link> */}

        <Link href="about">
          <div className={buttonStyle} >
            <div>What is?</div>
          </div>
        </Link>

        {/* <div className={buttonStyle} >
          <div  >Account</div>
        </div> */}

        <Link href="contact">
          <div className={buttonStyle} >
            <div  >Contact</div>
          </div>
        </Link>

        {/* <div className={buttonStyle} >
          <div  >Help</div>
        </div> */}

        <Link href="who">
          <div className={buttonStyle}>
            <div  >Who creating?</div>
          </div>
        </Link>

      </div>
      <div className={allRightsStyle}>
        <div>© Augmented World 2022. All rights reserved</div>
      </div>
    </footer>

  );
}

export default Footer