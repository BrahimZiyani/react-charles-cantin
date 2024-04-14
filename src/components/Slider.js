import React, { useState,useRef, useEffect } from 'react';
import './Slider.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { CircleArrowDown } from 'lucide-react';

const SliderData = [
  {
    image: '/pexels-aleksandar-pasaric-2411688.jpg',
    description: 'ƒ/8.0, ISO 200, 1/200s Alley',
    tag: 'alley'
  },
  {
    image: '/pexels-irina-iriser-1381679.jpg',
    description: 'ƒ/1.8, ISO 200, 1/1000s Nature',
    tag: 'nature'
  },
  {
    image: '/pexels-lil-artsy-3166841.jpg',
    description: 'ƒ/8.0, ISO 400, 1/60s Books',
    tag: 'books'
  },
  {
    image: '/pexels-mariia-ivanova-17725290.jpg',
    description: 'ƒ/4.5, ISO 200, 1/320s Camera',
    tag: 'camera'
  },
  {
    image: '/pexels-vandana-vankhede-17595150.jpg',
    description: 'ƒ/5.6, ISO 320, 1/100s Camera',
    tag: 'camera'
  },
  {
    image: '/pexels-irina-iriser-1122626.jpg',
    description: 'ƒ/5.6, ISO 320, 1/100s Camera',
    tag: 'nature'
  },
  {
    image: '/pexels-ricky-esquivel-1907785.jpg',
    description: 'ƒ/5.6, ISO 320, 1/100s Camera',
    tag: 'books'
  },
  {
    image: '/pexels-suket-dedhia-570025.jpg',
    description: 'ƒ/5.6, ISO 320, 1/100s Camera',
    tag: 'alley'
  }
];

// This function creates a Swiper component to display the images from the SliderData array
function Slider() {
  const [filter, setFilter] = useState(''); // State to store the selected filter

  return (
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "3px",
          "--swiper-pagination-bullet-padding-top": "25px"
        }}
        className="slider"
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        spaceBetween={1}
        slidesPerView={3}
      >
        {SliderData.map(({ image, description }, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <img src={image} alt={description} />
                <p>{description}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
  );
}

// This function creates a button with a down arrow icon that scrolls the gallery into view
function CircleArrowDownButton() {
  const galleryRef = useRef(null);
  const handleClick = () => galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className='DownButtonContainer'>
    <button className="FaArrowAltCircleDown">
      <CircleArrowDown onClick={handleClick} size={54} strokeWidth={2.25} />
    </button>
    <div ref={galleryRef} />
    </div>
  );
}

// This function creates an ImageGallery using the SliderData array and filters the images based on the selected tag
function ImageGallery() {
  const [tag, setTag] = useState('all');
  const [ filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === 'all' ? setFilteredImages(SliderData) : setFilteredImages( SliderData.filter( img => img.tag === tag))
  }, [tag])

  return (
      <div className='buttonsFilter' handleSetTag={setTag}>
          <TagButton name="all" handleSetTag={setTag}/>
          <TagButton name="nature" handleSetTag={setTag}/>
          <TagButton name="alley" handleSetTag={setTag}/>
          <TagButton name="camera" handleSetTag={setTag}/>
          <div className='imgContainer'>{filteredImages.map(img => 
            <div>
              <img src={img.image}/> 
            </div>)}</div>
      </div>
  );
}

// This component creates a tag button to filter the images in the ImageGallery component
const TagButton = ({name, handleSetTag }) => {
    return <button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>
};

export { SliderData };
export { Slider, ImageGallery, CircleArrowDownButton };