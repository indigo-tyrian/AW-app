import { photoGallery, photoGalleryContainer, photoGalleryItem, photoGalleryImg, A, B, C, D, E, F, A1, A2, A3, A4, A5, A6, B1, B2, B3, B4, B5, B6, C1, C2, C3, C4, C5, C6, D1, D2, D3, D4, D5, D6, E1, E2, E3, E4, E5, E6, F1, F2, F3, F4, F5, F6 } from './styles/eachOne.css'
import NextImageComp from 'src/components/NextImageComp';
import { nextImageAdjustment } from './styles/nextImage.css';
import Image from 'next/image';
interface Props {
  imagePath0: string;
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
  imagePath4: string;
  imagePath5: string;
  imagePath6: string;
  imagePath7: string;
  imagePath8: string;
  imagePath9: string;
  imagePath10: string;
  imagePath11: string;
  imagePath12: string;
  imagePath13: string;
  imagePath14: string;
  imagePath15: string;
  imagePath16: string;
  imagePath17: string;
  imagePath18: string;
  imagePath19: string;
  imagePath20: string;
  imagePath21: string;
  imagePath22: string;
  imagePath23: string;
  imagePath24: string;
  imagePath25: string;
  imagePath26: string;
  imagePath27: string;
  imagePath28: string;
  imagePath29: string;
  imagePath30: string;
}


const ImageGallery = (props: Props) => {

  return (
    <div className={`${photoGalleryContainer} scroll`} >
      <div className={`${photoGallery} ${A}`}>
        <div className={`${photoGalleryItem} ${A1} `}>
          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath0} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${A2} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath1} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${A3} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath2} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${A4} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath3} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${A5} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath4} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${A6} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath5} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
      </div>

      <div className={`${photoGallery} ${E}`}>
        <div className={`${photoGalleryItem} ${E1} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath6} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${E2} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath7} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${E3} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath8} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${E4} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath9} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${E5} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath10} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
      </div>


      <div className={`${photoGallery} ${C}`}>
        <div className={`${photoGalleryItem} ${C1} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath11} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${C2} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath12} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${C3} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath13} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
      </div>

      <div className={`${photoGallery} ${B}`}>
        <div className={`${photoGalleryItem} ${B1} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath14} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${B2} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath15} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${B3} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath16} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${B4} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath17} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${B5} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath18} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${B6} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath19} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
      </div>

      <div className={`${photoGallery} ${F}`}>
        <div className={`${photoGalleryItem} ${F1} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath20} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${F2} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath21} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${F3} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath22} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${F4} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath23} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${F5} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath24} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
      </div>



      <div className={`${photoGallery} ${D}`}>
        <div className={`${photoGalleryItem} ${D1} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath25} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${D2} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath26} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
        <div className={`${photoGalleryItem} ${D3} `}>

          <div className={nextImageAdjustment.imageWindow}>
            <Image src={props.imagePath27} alt="" layout="fill" objectFit="contain" priority className={photoGalleryImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery;