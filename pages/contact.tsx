import Head from 'next/head'
import { emailStyle, listStyle, Style, titleStyle } from 'src/components/styles/contact.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Contact() {
  return (
    <>
      <div className={Style}>
        <h1 className={titleStyle}>Contact me</h1>
        <div className={listStyle}>
          <div>For the job request/offer?</div>
          <div>Do you Want to Join me?</div>
        </div>
        <div>Please contact me via this e-mail address!</div>
        <KeyboardDoubleArrowDownIcon />
        <div>
          <div className={emailStyle}>contact@augmentedworld.dev</div>
        </div>
      </div>
    </>
  )
}

export default Contact