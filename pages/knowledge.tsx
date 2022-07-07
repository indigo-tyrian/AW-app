import 'src/components/styles/global.css'
import Image from 'next/image'
import Link from 'next/link';
import Data from "src/json/Knowledge.json"
import { useEffect, useState } from "react";
import { boxStyle, containerStyle, textStyle, titleStyle } from 'src/components/styles/knowledgeList.css';
import Head from 'next/head'

interface Props {

}

const KnowledgeList = ({


}) => {

  const kk: any = Data.knowledge as any
  const [hidden, setHidden] = useState(false)

  return (
    <div className={containerStyle}>
      {
        kk.map((e: any) => {
          console.log(e);

          return (
            <Link href={`/knowledge/${e.name.replace(/\s/g, '')}`}>
              <div className={boxStyle}>
                <Image src={e.src} alt={e.name}
                  // layout="fill"
                  width={300} height={450}
                />
                <b className={titleStyle}>{e.title}</b>
                <span className={textStyle}>
                  {e.text}
                </span>
              </div>
            </Link >
          )
        })
      }
    </div >
  );
};

export default KnowledgeList;