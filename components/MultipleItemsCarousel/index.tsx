import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Brand } from "@/types/brand";

interface MultipleItemsCarouselProps {
  sources: Brand[];
}

const MultipleItemsCarousel = (props: MultipleItemsCarouselProps) => {
  const { sources } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sources.length > 5 ? 5 : sources.length, // Number of items to show at a time
    slidesToScroll: 1,
    autoplay: true,
    width: '100%',
    responsive: [
      {
        breakpoint: 768, // Adjust the number of items for different screen sizes
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sources?.map((item, index) => (
        <div key={index}>
          <div style={{ flexDirection: 'column' }} className='flex items-center'>
            <img src={item.image} alt={`image_${index}`} style={{ width: 50, height: 50 }} />
            <div className="mt-2">{item.name}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MultipleItemsCarousel;