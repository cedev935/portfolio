import React from 'react';
import Slider from 'react-slick';
import { styled } from 'styled-components';
import data from './data';
import SkillCard from './SkillCard';
import Title from '../../Title';

const SkillSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderWrapper className="mx-auto">
      <Title title="Tech and Tool" />
      <Slider {...settings} className="slider">
        {data.map((card) => (
          <SkillCard key={card.id} {...card} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.section`
  max-width: 1200px;
  margin: 6rem 0 3rem 0;
  .slider {
    margin-top: 1rem;
  }
`;

export default SkillSlider;
