import { HomeFeatures } from "src/components/HomeFeatures"
import { BottomNav, Footer } from "src/components"
import Link from 'next/link'
import Head from "next/head"
function Home() {
  return (
    <div>
      <Head>
        <title>Augmented World</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/world-map_1f5fa-fe0f.png" />

      </Head>
      <HomeFeatures />
      <Footer />
      <BottomNav />
    </div>
  )
}

export default Home



