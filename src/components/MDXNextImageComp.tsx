import Image from 'next/image'
import { nextImageAdjustment } from './styles/nextImage.css'

const MDXNextImageComp = ({ src }: any) => {
  return (
    <div className={nextImageAdjustment.blogImage}>
      <Image src={src} alt=""
        objectFit='cover'
        layout='fill' />
    </div>
  )
}

export default MDXNextImageComp