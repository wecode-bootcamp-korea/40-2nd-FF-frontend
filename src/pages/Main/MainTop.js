import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';

const MainTop = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/data/mainTopData.json')
      .then(res => res.json())
      .then(setImages);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {images.map(list => (
        <TopBox key={list.id}>
          <TopImages src={list.image} />

          <MainLink to="/">{list.name}</MainLink>
        </TopBox>
      ))}
    </Slider>
  );
};

export default MainTop;

const TopBox = styled.div`
  position: relative;
`;

const TopImages = styled.img`
  width: 1100px;
  height: 700px;
  margin: auto;
`;

const MainLink = styled(Link)`
  position: absolute;
  bottom: 40px;
  right: 25%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.13);
  color: white;
  font-size: 30px;
  border-radius: 20px;
`;
