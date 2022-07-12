import { photoGallery, photoGalleryContainer, photoGalleryItem, photoGalleryImg, A, B, C, D, E, F, A1, A2, A3, A4, A5, A6, B1, B2, B3, B4, B5, B6, C1, C2, C3, C4, C5, C6, D1, D2, D3, D4, D5, D6, E1, E2, E3, E4, E5, E6, F1, F2, F3, F4, F5, F6 } from './styles/eachOne.css'
import NextImageComp from 'src/components/NextImageComp';
import { nextImageAdjustment } from './styles/nextImage.css';

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

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath0} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A2} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath1} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A3} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath2} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A4} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath3} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A5} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath4} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A6} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath5} boxClassName={photoGalleryImg} alt="" />
        </div>
      </div>

      <div className={`${photoGallery} ${E}`}>
        <div className={`${photoGalleryItem} ${E1} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath6} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${E2} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath7} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${E3} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath8} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${E4} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath9} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${E5} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath10} boxClassName={photoGalleryImg} alt="" />
        </div>
      </div>


      <div className={`${photoGallery} ${C}`}>
        <div className={`${photoGalleryItem} ${C1} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath11} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${C2} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath12} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${C3} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath13} boxClassName={photoGalleryImg} alt="" />
        </div>
      </div>

      <div className={`${photoGallery} ${B}`}>
        <div className={`${photoGalleryItem} ${B1} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath14} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B2} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath15} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B3} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath16} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B4} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath17} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B5} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath18} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B6} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath19} boxClassName={photoGalleryImg} alt="" />
        </div>
      </div>

      <div className={`${photoGallery} ${F}`}>
        <div className={`${photoGalleryItem} ${F1} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath20} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${F2} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath21} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${F3} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath22} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${F4} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath23} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${F5} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath24} boxClassName={photoGalleryImg} alt="" />
        </div>
      </div>



      <div className={`${photoGallery} ${D}`}>
        <div className={`${photoGalleryItem} ${D1} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath25} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${D2} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath26} boxClassName={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${D3} `}>

          <NextImageComp containerClassName={nextImageAdjustment.imageGallery} src={props.imagePath27} boxClassName={photoGalleryImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ImageGallery;