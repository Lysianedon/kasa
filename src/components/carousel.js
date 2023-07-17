import '../styles/carousel.scss';
import { useState } from 'react';

export default function Carousel({ pictures, altImg }) { 
    
    const [currentCarouselWidth, setCurrentCarouselWidth] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(1);
    // const [updatedWidth, setUpdatedWidth] = useState(0);
    let updatedWidth = 0;
    
    // au resize: scrollleft = 0 + (currentPicture * currentCarouselWith)
    
    function handleImageLoad() {
      setImagesLoaded(true);
      return imagesLoaded;
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
            updatedWidth = 0;
            document.querySelector(".slides-container").scrollLeft = updatedWidth;
            setCurrentCarouselWidth(0);
        } else {
            updatedWidth = currentPicture * currentCarouselWidth;
            console.log(updatedWidth);
            console.log("currentPicture", currentPicture);
            console.log("currentCarouselWidth", currentCarouselWidth);
            document.querySelector(".slides-container").scrollLeft = updatedWidth;
            setCurrentCarouselWidth(currentCarouselWidth + carouselWidth);
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
        } else {
            setCurrentCarouselWidth(currentCarouselWidth - carouselWidth);
            document.querySelector(".slides-container").scrollLeft -= carouselWidth;
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
  {gallery}
  </div>
</section>
</div>
}
