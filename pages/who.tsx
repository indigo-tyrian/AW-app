import { BottomNav, Footer } from 'src/components'
import 'src/components/styles/global.css'
import Head from 'next/head'
// import NextImageComp from 'src/components/NextImageComp'
import { nextImageAdjustment } from 'src/components/styles/nextImage.css'
import { allStyle, containerStyle, creatorBox, listBox, developerBox, headDescriptionStyle, headImageStyle, headTitleStyle, profileDescContainerStyle, titleStyle } from 'src/components/styles/who.css'
import Image from 'next/image'
function Who() {
  return (
    <div className={allStyle}>
      <div className={containerStyle}>
        <div className={headTitleStyle}>Hello, I&lsquo;m<br /> Yuri Nakanishi</div>
        <div className={headImageStyle}>
          <Image src="/images/profile/profile-pic1.jpg"
            priority alt="" width="1000"
            height="1000" />
        </div>
        <div className={headDescriptionStyle}>Software Developer, Designer and Creator in Japan </div>
      </div>
      <div className={profileDescContainerStyle}>
        <div className={developerBox}>
          <div className={titleStyle}>Development, Design</div>
          <div className={listBox.develop}>
            <h3>Programing Language</h3>
            <li>
              <ul>HTML,Css, Sass, Scss, VanillaExtract-css</ul>
              <ul>JavaScript, Typescript,React.js, Next.js, Node.js</ul>
              <ul>Python,VBA</ul>
              <ul>GraphQL, Apollo Server</ul>
              <h3>Database, Host</h3>
              <ul>Firebase, Vercel</ul>
            </li>
            <h3>Version Management</h3>
            <ul>Git, Github</ul>
            <h3>Graphic Software</h3>
            <ul>Photoshop, Illustrator, Canva</ul>
            <h3>Movie edit  Software</h3>
            <ul> PremierePro, After Effects</ul>
            <h3>Audio and  Music software</h3>
            <ul>Audition、StudioOne</ul>
            <h3>Automation</h3>
            <ul>Selenium</ul>
            <h3>Tools </h3>
            <ul>Notion</ul>
          </div>
        </div>

        <div className={creatorBox}>
          <div className={titleStyle}>Creater</div>
          <div className={listBox.create}>
            <h3>Knowledge blog</h3>
            <h3>Writing Encyclopedia</h3>
            <h3>Movie Review</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Who