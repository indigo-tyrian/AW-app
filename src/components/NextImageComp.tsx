import Image from 'next/image'

const NextImageComp = ({ src, alt, containerClassName, boxClassName }: any) => {
  return (
    // <div className={boxClassName}>
    <div className={`${containerClassName}`}>
      <Image src={src} alt={alt}
        objectFit='cover'
        layout='fill'
        priority
        className={`${boxClassName}`} />
    </div>
    // </div>
  )
}

export default NextImageComp