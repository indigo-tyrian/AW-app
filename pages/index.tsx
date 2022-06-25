import { HomeFeatures } from "../src/components/HomeFeatures"
import { BottomNav, Footer } from "../src/components"
import Link from 'next/link'
function Home() {
  return (
    <div>
      <HomeFeatures />
      <Footer />
      <BottomNav />
    </div>
  )
}

export default Home



