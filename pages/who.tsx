import { BottomNav, Footer } from 'src/components'
import 'src/components/styles/global.css'
import Head from 'next/head'
import NextImageComp from 'src/components/NextImageComp'
import { nextImageAdjustment } from 'src/components/styles/nextImage.css'
import { containerStyle, creatorBox, developerBox, headDescriptionStyle, headImageStyle, headTitleStyle, profileDescContainerStyle, titleStyle } from 'src/components/styles/who.css'

function Who() {
  return (
    <>
      <div className={containerStyle}>
        <div className={headTitleStyle}>Hello, I'm<br /> Yuri Nakanishi</div>
        <div className={headImageStyle}>
          <NextImageComp src="/images/profile/profile-pic1.jpg" containerClassName={nextImageAdjustment.profileHead} />
        </div>
        <div className={headDescriptionStyle}>Software Developer, Designer and Creator in Japan </div>
      </div>
      <div className={profileDescContainerStyle}>
        <div>
          <div className={developerBox}>
            <div className={titleStyle}>Development, Design Skills</div>
            <dl>
              <dt>Programing Language</dt>
              <dd>HTML,Css, Sass, Scss, VanillaExtract-css</dd>
              <dd>JavaScript, Typescript,React.js, Next.js, Node.js</dd>
              <dd>Python,VBA</dd>
              <dd>GraphQL, Apollo Server</dd>
              <dt>Database, Host</dt>
              <dd>Firebase, Vercel</dd>
              Version Management
              <dd>Git, Github</dd>
              <dt>Graphic Software</dt>
              <dd>Photoshop, Illustrator, Canva</dd>
              <dt>Movie edit  Software</dt>
              <dd> PremierePro, After Effects</dd>
              <dt>Audio and  Music software</dt>
              <dd>Audition、StudioOne</dd>
              <dt>Automation</dt>
              <dd>Selenium</dd>
              <dt>Tools </dt>
              <dd>Notion</dd>
            </dl>
          </div>
        </div>

        <div className={creatorBox}>
          <div className={titleStyle}>Creater</div>
          <ul>
            <div>Knowledge blog</div>
            <div>Writing Encyclopedia</div>
            <div>Movie Review</div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Who