import 'src/components/styles/global.css'
import NextImageComp from 'src/components/NextImageComp';
import { nextImageAdjustment } from 'src/components/styles/nextImage.css';
import Link from 'next/link';
import { supabase } from 'utils/supabaseClient'

import { useEffect, useState } from "react";
import { barStyle, boxStyle, containerStyle, textStyle, titleStyle, textContainerStyle, box2Style, knowledgeListContainerStyle, rightContentsStyle, leftContentsStyle, imageStyle, infoStyle } from 'src/components/styles/knowledgeList.css';
import Head from 'next/head'
import type { PostMeta } from "src/components/api";
import styles from "@/styles/Articles.module.css";
import Image from 'next/image';

const KnowledgeList = ({ posts }: { posts: PostMeta[] }) => {
  // const kk: any = Data.knowledge as any
  const [hidden, setHidden] = useState(false)
  const [content, setContent] = useState<any>();
  const tmdbAPIkey = process.env.NEXT_PUBLIC_TMDB_API_KEY


  const fetchMovieData = async () => {
    let { data: Knowledge, error }: any = await supabase
      .from('knowledge')
      .select('name,title,text,src')
    console.log(Knowledge)
    setContent(Knowledge)
  }

  useEffect(() => {
    fetchMovieData();
  }, []);

  // console.log(content)
  return (
    <div className={knowledgeListContainerStyle}>

      <div className={rightContentsStyle}></div>
      <div className={leftContentsStyle}></div>
      <div className={containerStyle}>
        {
          posts ? posts.map((post: any, i: any) => {
            console.log(post.imgUrl);
            return (
              <Link href={`/knowledge/${post.name}`} key={i}>
                <div>
                  <div className={box2Style}>
                    <hr className={barStyle}></hr>
                    <div>name and date</div>
                    <div className={boxStyle}>
                      <div className={textContainerStyle}>
                        <h2 className={titleStyle}>{post.title}</h2>
                        <p className={textStyle}>{post.excerpt}</p>
                        <div className={infoStyle}>dddddddddddddddddddddd</div>
                      </div>
                      <div className={imageStyle}>
                        <div className={nextImageAdjustment.smallImage}>
                          <Image src={post.imgUrl ? post.imgUrl : "/images/black"} alt="" objectFit='cover' layout='fill' priority />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link >
            )
          }) : <></>
        }
      </div >
    </div>
  );
};

export default KnowledgeList;