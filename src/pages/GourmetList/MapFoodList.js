import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import theme from '../../styles/theme';
import { useSearchParams } from 'react-router-dom';

const MapFoodList = () => {
  const [list, setList] = useState([]);
  const [path, setPath] = useState(1);
  useEffect(() => {
    fetch(`/data/gourmetListData${path}.json`)
      .then(res => res.json())
      .then(data => setList(prev => [...prev, ...data]));
  }, [path]);

  return (
    <FoodInner>
      {list.map(lists => (
        <Food>
          <FoodHeader>
            <FoodImage src={lists.thumbnail_img} />
            <Container>
              <FoodInfoHeader>
                <InfoHeader>
                  <InfoHeaderId>{lists.id}.</InfoHeaderId>
                  <InfoHeaderName>{lists.name}</InfoHeaderName>
                </InfoHeader>
                <InfoDistance>{lists.distance}</InfoDistance>
              </FoodInfoHeader>
              <FooterInfoContainerHash>
                <Category>{lists.category}</Category>
                <Tag>{lists.tag}</Tag>
              </FooterInfoContainerHash>
              <FooterInfoContainerScore>
                <Score>
                  <ScoreNumber>{lists.score}</ScoreNumber>
                  <ScoreText>점</ScoreText>
                </Score>
                <Star>
                  <img src="images/list_star.png" alt="" />
                  {lists.star}
                </Star>
                <Heart>
                  <img src="images/list_heart.png" alt="" />
                  {lists.heart}
                </Heart>
              </FooterInfoContainerScore>
            </Container>
          </FoodHeader>
          <Review>"{lists.review}..."</Review>
          <Id>
            <Recommend>
              <RecommendNumber>36</RecommendNumber>
              <RecommendText>명이 추천했습니다.</RecommendText>
            </Recommend>
            <IdName>by.{lists.id_name}</IdName>
          </Id>
        </Food>
      ))}
      <BlueButton
        onClick={() => {
          setPath(path + 1);
        }}
      >
        <img src="images/list_list.png" alt="" /> 검색 결과 더보기
      </BlueButton>
    </FoodInner>
  );
};

export default MapFoodList;

const Food = styled.div`
  padding: 25px 20px;
  border-bottom: 1px solid rgb(245, 245, 245);
  :hover {
    background-color: rgb(245, 245, 245);
    cursor: pointer;
  }
`;

const FoodInner = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const FoodHeader = styled.div`
  display: flex;
`;

const FoodImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
`;

const Container = styled.div`
  width: 100%;
  margin-left: 17px;
`;

const InfoHeader = styled.div`
  ${props => props.theme.flex('space-between', 'center')};
`;

const FoodInfoHeader = styled.div`
  ${props => props.theme.flex('space-between', 'flex-start')};
  width: 100%;
  margin-top: 10px;
  padding: 2px 0px 2px 0px;
`;

const InfoHeaderId = styled.span`
  display: flex;
  align-items: center;
  padding-right: 3px;
  font-weight: 700;
  font-size: 18px;
`;

const InfoHeaderName = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
`;

const InfoDistance = styled.span`
  ${props => props.theme.flex('flex-end', 'center')};
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 17px;
  color: rgb(80, 80, 80);
`;

const FooterInfoContainerHash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 5px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: rgb(80, 80, 80);
`;

const Tag = styled.div`
  margin-top: 5px;
  color: rgb(158, 158, 158);
`;

const FooterInfoContainerScore = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid rgb(158, 158, 158);
`;

const ScoreNumber = styled.span`
  font-weight: bold;
  color: rgb(10, 199, 206);
`;

const ScoreText = styled.span`
  font-weight: 600;
`;

const Star = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 600;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid rgb(158, 158, 158);
  img {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
`;

const Heart = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 600;
  background-color: transparent;
  img {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
`;

const Review = styled.div`
  display: flex;
  margin-top: 16px;
`;

const Id = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 15px;
`;

const Recommend = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const RecommendNumber = styled.span`
  font-weight: bold;
`;

const RecommendText = styled.span`
  color: rgb(158, 158, 158);
`;

const IdName = styled.span`
  font-size: 15px;
`;

const BlueButton = styled.button`
  ${props => props.theme.flex('center', 'center')};
  margin: 30px 20px;
  padding: 23px 20px;
  border: none;
  border-radius: 8px;
  background-color: rgb(21, 98, 189);
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;
