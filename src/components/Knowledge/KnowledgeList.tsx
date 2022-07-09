import 'src/components/styles/global.css'
import NextImageComp from 'src/components/NextImageComp';
import { nextImageAdjustment } from 'src/components/styles/nextImage.css';
import Link from 'next/link';
import Data from "src/json/Knowledge.json"
import { useEffect, useState } from "react";
import { barStyle, boxStyle, containerStyle, textStyle, titleStyle, textContainerStyle, box2Style, knowledgeListContainerStyle, rightContentsStyle, leftContentsStyle, imageStyle, infoStyle } from 'src/components/styles/knowledgeList.css';
import Head from 'next/head'

interface Props {
}

const KnowledgeList = ({
}) => {
  const kk: any = Data.knowledge as any
  const [hidden, setHidden] = useState(false)

  return (
    <div className={knowledgeListContainerStyle}>

      <div className={rightContentsStyle}></div>
      <div className={leftContentsStyle}></div>
      <div className={containerStyle}>
        {
          kk.map((e: any) => {
            console.log(e);

            return (
              <Link href={`/knowledge/${e.name.replace(/\s/g, '')}`}>
                <div>
                  <div className={box2Style}>
                    <hr className={barStyle}></hr>
                    <div>name and date</div>
                    <div className={boxStyle}>
                      <div className={textContainerStyle}>
                        <h2 className={titleStyle}>{e.title}</h2>
                        <p className={textStyle}>{e.text}</p>
                        <div className={infoStyle}>dddddddddddddddddddddd</div>
                      </div>
                      <div className={imageStyle}>
                        <NextImageComp containerClassName={nextImageAdjustment.smallImage} src={e.src} alt={e.name} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link >
            )
          })
        }
      </div >
    </div>
  );
};

export default KnowledgeList;