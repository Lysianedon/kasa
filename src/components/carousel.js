import '../styles/carousel.scss';
import { useState, useEffect, useRef } from 'react';

export default function Carousel({ pictures, altImg }) { 
    
    const [currentCarouselWidth, setCurrentCarouselWidth] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(1);
    let updatedWidth = 0;

    // Handle the window resize:
    useEffect(() => {
        const handleResize = () => {
          let carouselWidth = document.querySelector(".slides-container").offsetWidth;
          const totalWidth = pictures.length * carouselWidth;
      
          // Calculate the current slide position (in pixels) based on the currentPicture
          const currentSlidePosition = (currentPicture - 1) * carouselWidth;
      
          // Check if the new currentSlidePosition is within the valid range
          if (currentSlidePosition >= 0 && currentSlidePosition <= totalWidth - carouselWidth) {
            document.querySelector(".slides-container").scrollLeft = currentSlidePosition;
            setCurrentCarouselWidth(currentSlidePosition);
          }
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [currentPicture, pictures]);
      
      
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
        } else {
            updatedWidth = currentPicture * carouselWidth;
        }
        document.querySelector(".slides-container").scrollLeft = updatedWidth;
        setCurrentCarouselWidth(updatedWidth);
    }

    function SlideToPrevImg() {
        // Guard
        if (pictures.length <= 1) {
            return;
        }
    
        const carouselWidth = document.querySelector(".slides-container").offsetWidth;
        const totalWidth = pictures.length * carouselWidth;
    
        // Calculate the previous picture index
        let prevPicture = currentPicture === 1 ? pictures.length : currentPicture - 1;
        let updatedWidth;
    
        if (currentCarouselWidth === 0) {
            // When reaching the first image, we want to show the last image on the left
            updatedWidth = totalWidth - carouselWidth;
        } else {
            // Slide to the previous image normally
            updatedWidth = (prevPicture - 1) * carouselWidth;
        }
    
        setCurrentPicture(prevPicture);
        document.querySelector(".slides-container").scrollLeft = updatedWidth;
        setCurrentCarouselWidth(updatedWidth);
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
