import React, { useEffect, useState } from 'react';
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
        width: '35px',
        height: '35px',
        display: 'block',
        right: '-50px',
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
        width: '35px',
        height: '35px',
        left: '-50px',
      }}
      onClick={onClick}
    />
  );
}

const FoodSlick = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetch('/data/listSlickData.json')
      .then(res => res.json())
      .then(setRestaurant);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fontSize: 100,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SlickList>
      {restaurant.map(list => (
        <Slick key={list.id}>
          <Title>
            <TitleWrapper>
              <TitleName>{list.mood}</TitleName>
              <TitleText>추천</TitleText>
              <TitleNumber>(52)</TitleNumber>
              <SubTitle>
                <TitleImg>
                  <img src="images/list_pin.png" alt="" />
                </TitleImg>
                <TitleStation>선릉역</TitleStation>
              </SubTitle>
            </TitleWrapper>
            <TitleBtn>자세히 보기 ></TitleBtn>
          </Title>
          <SliderWrapper>
            <Slider {...settings}>
              {list.detail.map(name => (
                <List key={name.id}>
                  <DetailImageWrapper>
                    <DetailImage src={name.thumbnail} />
                    <img src="list_star" alt="" />
                    <Detail>{name.name}</Detail>
                  </DetailImageWrapper>
                </List>
              ))}
            </Slider>
          </SliderWrapper>
        </Slick>
      ))}
    </SlickList>
  );
};

export default FoodSlick;

const SlickList = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-left: 265px;
`;

const Slick = styled.div`
  width: 838.31px;
  height: 350px;
  margin-bottom: 25px;
  position: relative;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 0px 9px #e0e0e0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 838.31px;
  margin-bottom: 15px;
  padding: 18px 25px;
  border-radius: 24px 24px 0px 0px;
  border-bottom: 1px solid rgb(245, 245, 245);
  background-color: rgb(250, 250, 250);
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const TitleName = styled.span`
  color: rgb(44, 135, 241);
  font-size: 18px;
  font-weight: 600;
`;

const TitleText = styled.span`
  margin-left: 3px;
  color: black;
  font-size: 18px;
  font-weight: 600;
`;

const TitleNumber = styled.span`
  margin-left: 5px;
  padding-right: 8px;
  border-right: 1px solid rgb(196, 196, 196);
  color: grey;
  font-size: 18px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
`;

const TitleImg = styled.div`
  display: flex;
  margin-left: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;

const TitleStation = styled.div`
  display: flex;
  margin-left: 3px;
  color: grey;
  font-size: 16px;
  font-weight: 500;
`;

const TitleBtn = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  color: gray;
  background-color: rgb(234, 234, 234);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: rgb(10, 199, 206);
  }
`;

const SliderWrapper = styled.div`
  padding: 30px 80px;
`;

const List = styled.div`
  text-align: start;
`;

const DetailImageWrapper = styled.div`
  :hover {
    color: rgb(10, 199, 206);
  }
`;

const DetailImage = styled.img`
  width: 140px;
  height: 140px;
  margin: auto;
  border-radius: 14px;
  cursor: pointer;
`;

const Detail = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-top: 15px;
  margin-left: 16px;
`;
