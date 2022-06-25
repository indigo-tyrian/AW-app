import '../components/styles/global.css'

import { Style, containerStyle, buttonStyle } from "./styles/footer.css";
import { logoAStyle, logoStyle } from './styles/logo.css';

const Footer = () => {
  return (
    <footer className={Style}>
      <div className={`${logoStyle.footer}`}> <a className={logoAStyle}>Augmented <br /> World</a></div>
      <div className={containerStyle}>
        <button className={buttonStyle} type="button">

          <div  >Privacy Policy</div>
        </button>
        <button className={buttonStyle} type="button">
          <div  >Account</div>
        </button>
        <button className={buttonStyle} type="button">

          <div  >Contact</div>
        </button>
        <button className={buttonStyle} type="button">

          <div  >Help</div>
        </button>
        <button className={buttonStyle} type="button">

          <div  >About Us</div>
        </button>
      </div>
    </footer>

  );
}

export default Footer