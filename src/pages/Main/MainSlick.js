import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components/macro';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="images/next.png"
      alt="next.png"
      className={className}
      style={{
        ...style,
        width: '50px',
        height: '50px',
        display: 'block',
        right: '-100px',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="images/prev.png"
      alt="next.png"
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '50px',
        height: '50px',
        left: '-100px',
      }}
      onClick={onClick}
    />
  );
}

const MainSlick = props => {
  const { type, posts } = props;
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    fontSize: 100,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SlickList>
      <Slick>
        <TitleName>{type}</TitleName>
        <Slider {...settings}>
          {posts.map(name => (
            <List key={name.id}>
              <DetailImage src={name.image} />
              <Detail>{name.name}</Detail>
            </List>
          ))}
        </Slider>
      </Slick>
    </SlickList>
  );
};

export default MainSlick;

const SlickList = styled.div`
  padding: 5px;
`;

const Slick = styled.div`
  width: 1100px;
  height: 370px;
  margin: 50px auto;
  padding: 30px;
  position: relative;
  background-color: #fafafa;
  border-radius: 20px;
`;

const TitleName = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
`;

const List = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  text-align: center;
`;
const DetailImage = styled.img`
  width: 230px;
  height: 230px;
  margin: auto;
`;

const Detail = styled.div`
  font-size: 30px;
  margin-top: 15px;
`;
