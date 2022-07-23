import { BottomNav, Footer } from 'src/components'
import 'src/components/styles/global.css'
import Head from 'next/head'
import NextImageComp from 'src/components/NextImageComp'
import { nextImageAdjustment } from 'src/components/styles/nextImage.css'
import { containerStyle, descriptionStyle, imageStyle, titleStyle } from 'src/components/styles/who.css'

function Who() {
  return (
    <>
      <div className={containerStyle}>
        <div className={titleStyle}>Hello, I'm<br /> Yuri Nakanishi</div>
        <div className={imageStyle}>
          <NextImageComp src="/images/profile/profile-pic1.jpg" containerClassName={nextImageAdjustment.blogImage} />
        </div>
        <div className={descriptionStyle}>Software Developer, Designer and Creator in Japan </div>
      </div>


      <div>Skills</div>
      <span>HTML</span>
      <span>Css, Sass, Scss, VanillaExtract-css</span>
      <span>JavaScript, Typescript</span>
      <span>React.js, Next.js</span>
      <span>Node.js</span>
      <span>Python</span>
      <span>VBA</span>
      <span>GraphQL</span>
      <span>Apollo Server</span>
      <span>Notion</span>

      Database, Host
      <span>Firebase, Vercel</span>
      Version Management
      <span>Git, Github</span>

      Graphic Software
      <span>Photoshop, Illustrator, Canva</span>
      Movie edit  Software
      <span> PremierePro, After Effects</span>
      Audio and  Music software
      <span>Audition、StudioOne</span>
      Automation
      <span>Selenium</span>

    </>
  )
}

export default Who