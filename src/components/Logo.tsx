import Link from 'next/link'

import 'src/components/styles/global.css'
import { tabAreaBase } from 'src/components/styles/global.css';
import { logoAStyle } from "./styles/logo.css"

interface Props {
  class: string;
}

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className={tabAreaBase}>
        <div className={props.class}>
          <a className={logoAStyle} href="index.html">Augmented <br /> World</a>
        </div>
      </div>
    </Link>
  )
}

export default Logo