import { photoGallery, photoGalleryContainer, photoGalleryItem, photoGalleryImg, A, B, C, D, E, F, A1, A2, A3, A4, A5, A6, B1, B2, B3, B4, B5, B6, C1, C2, C3, C4, C5, C6, D1, D2, D3, D4, D5, D6, E1, E2, E3, E4, E5, E6, F1, F2, F3, F4, F5, F6 } from './styles/eachOne.css'

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
          <img src={props.imagePath0} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A2} `}>
          <img src={props.imagePath1} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A3} `}>
          <img src={props.imagePath2} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A4} `}>
          <img src={props.imagePath3} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A5} `}>
          <img src={props.imagePath4} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${A6} `}>
          <img src={props.imagePath5} className={photoGalleryImg} alt="" />
        </div>
      </div>

      <div className={`${photoGallery} ${E}`}>
        <div className={`${photoGalleryItem} ${E1} `}>
          <img src={props.imagePath6} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${E2} `}>
          <img src={props.imagePath7} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${E3} `}>
          <img src={props.imagePath8} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${E4} `}>
          <img src={props.imagePath9} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${E5} `}>
          <img src={props.imagePath10} className={photoGalleryImg} alt="" />
        </div>
      </div>


      <div className={`${photoGallery} ${C}`}>
        <div className={`${photoGalleryItem} ${C1} `}>
          <img src={props.imagePath11} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${C2} `}>
          <img src={props.imagePath12} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${C3} `}>
          <img src={props.imagePath13} className={photoGalleryImg} alt="" />
        </div>
      </div>

      <div className={`${photoGallery} ${B}`}>
        <div className={`${photoGalleryItem} ${B1} `}>
          <img src={props.imagePath14} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B2} `}>
          <img src={props.imagePath15} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B3} `}>
          <img src={props.imagePath16} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B4} `}>
          <img src={props.imagePath17} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B5} `}>
          <img src={props.imagePath18} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${B6} `}>
          <img src={props.imagePath19} className={photoGalleryImg} alt="" />
        </div>
      </div>

      <div className={`${photoGallery} ${F}`}>
        <div className={`${photoGalleryItem} ${F1} `}>
          <img src={props.imagePath20} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${F2} `}>
          <img src={props.imagePath21} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${F3} `}>
          <img src={props.imagePath22} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${F4} `}>
          <img src={props.imagePath23} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${F5} `}>
          <img src={props.imagePath24} className={photoGalleryImg} alt="" />
        </div>
      </div>



      <div className={`${photoGallery} ${D}`}>
        <div className={`${photoGalleryItem} ${D1} `}>
          <img src={props.imagePath25} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${D2} `}>
          <img src={props.imagePath26} className={photoGalleryImg} alt="" />
        </div>
        <div className={`${photoGalleryItem} ${D3} `}>
          <img src={props.imagePath27} className={photoGalleryImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ImageGallery;