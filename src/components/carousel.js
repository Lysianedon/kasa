import '../styles/carousel.scss';
import { useState } from 'react';

export default function Carousel({ pictures, altImg }) { 
    
    const [currentCarouselWidth, setCurrentCarouselWidth] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(1);

    // Inside the component
    function handleImageLoad() {
      setImagesLoaded(true);
    }

    function SlideToNextImg() {
        // Guard
        if (pictures.length <= 1 ) {
            return;
        }
        let carouselWidth = document.querySelector(".slides-container").offsetWidth;
        const totalWidth = pictures.length * carouselWidth;
        if (currentPicture === pictures.length) {
            setCurrentPicture(1);
        } else {
            setCurrentPicture(currentPicture + 1);
        }

        if (currentCarouselWidth >=  totalWidth - carouselWidth) {
            // console.log("total reached !"); 
            document.querySelector(".slides-container").scrollLeft = 0;
            // setCurrentCarouselWidth(carouselWidth);
            setCurrentCarouselWidth(0);
        } else {
            document.querySelector(".slides-container").scrollLeft += carouselWidth;
            setCurrentCarouselWidth(currentCarouselWidth + carouselWidth);
            // console.log("currentCarouselWidth", currentCarouselWidth, "out of", totalWidth);
        }
    }
    function SlideToPrevImg() {
        // Guard
        if (pictures.length <= 1 ) {
            return;
        }
        const carouselWidth = document.querySelector(".slides-container").offsetWidth;
        const totalWidth = pictures.length * carouselWidth;
        if (currentPicture === 1) {
            setCurrentPicture(pictures.length);
        } else{
            setCurrentPicture(currentPicture - 1);
        }

        if (currentCarouselWidth ===  0) {
            document.querySelector(".slides-container").scrollLeft = totalWidth - carouselWidth;
            setCurrentCarouselWidth(totalWidth - carouselWidth);
            // console.log("back to the end !", currentCarouselWidth); 

        } else {
            setCurrentCarouselWidth(currentCarouselWidth - carouselWidth);
            document.querySelector(".slides-container").scrollLeft -= carouselWidth;
            // console.log("currentCarouselWidth", currentCarouselWidth, "out of", totalWidth);
        }
    }
    const gallery = pictures.map((p, index) => <img src={p} alt={altImg} className='slide' key={index} onLoad={handleImageLoad}/> )

  return <div id="carousel"><section className="slider-wrapper">
  <button className={`slide-arrow ${pictures.length <= 1 ? 'hidden' : ''}`} id="slide-arrow-prev" onClick={SlideToPrevImg}>
    &#8249;
  </button>
  <button className={`slide-arrow ${pictures.length <= 1 ? 'hidden' : ''}`}  id="slide-arrow-next" onClick={SlideToNextImg}>
    &#8250;
  </button>
  <div className={`current-picture-count  ${pictures.length <= 1 ? 'hidden' : ''} `}>{currentPicture}/{pictures.length}</div>
  <div className="slides-container" id="slides-container">
  {/* <img src={currentPicture} alt="logement" className='slide'/> */}
  {/* <img src="https://s3-eu-west-1.amazonaws.com/course.oc-stati…ects/front-end-kasa-project/accommodation-8-3.jpg" alt="logement" className='slide'/> */}
  {gallery}
  </div>
</section>
</div>
}
