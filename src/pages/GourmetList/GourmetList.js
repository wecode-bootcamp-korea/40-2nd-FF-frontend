import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import ListKakaoMap from '../../components/ListKakaoMap/ListKakaoMap';
import FoodDataList from './FoodDataList';
import FoodSlick from './FoodSlick';
import ListFoodFilter from './ListFoodFilter';

const GourmetList = () => {
  return (
    <GourmetListWrapper>
      <Filter>
        <ListFoodFilter />
      </Filter>
      <MainContainer>
        <ContainerHeader>
          <OrderWrapper>
            <Arrange>
              <ArrowImage>
                <img src="images/list_up-down.png" alt="" />
                <span>정렬</span>
              </ArrowImage>
            </Arrange>
            <Order>
              <OrderButtonHover>
                <span>점수순</span>
              </OrderButtonHover>
              <OrderButton>
                <span>평점순</span>
              </OrderButton>
              <OrderButton>
                <span>리뷰많은순</span>
              </OrderButton>
              <OrderButton>
                <span>좋아요많은순</span>
              </OrderButton>
              <OrderButton>
                <span>거리순</span>
              </OrderButton>
            </Order>
            <UpDate>
              <UpDateButton>
                <UpDateImage>
                  <img src="images/list_aim.png" alt="" />
                  <span>현 위치: 서울 강남구 삼성동</span>
                </UpDateImage>
              </UpDateButton>
            </UpDate>
          </OrderWrapper>
        </ContainerHeader>
        <ContainerMap>
          <MapHeader>
            <SubContainer>
              <SubTitle>삼성</SubTitle>
              <SubInfo>
                맛집 (<PlaceCount>985</PlaceCount>곳)
              </SubInfo>
            </SubContainer>
            <ShareButton>
              <img src="images/list_share.png" alt="" />
            </ShareButton>
          </MapHeader>
          <Map>
            <ListKakaoMap map={ListKakaoMap} />
          </Map>
          <FoodDataList />
        </ContainerMap>
      </MainContainer>
      <FoodSlick />
    </GourmetListWrapper>
  );
};
export default GourmetList;

const GourmetListWrapper = styled.div`
  gap: 25px;
  padding-top: 30px;
  padding-bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: #f0f1f0;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 16%;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
  border-radius: 14px;
  background-color: white;
`;

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`;

const OrderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgb(245, 245, 245);
`;

const Arrange = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgb(245, 245, 245);
`;

const ArrowImage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 28px;
  font-size: 15px;
  img {
    width: 13px;
    height: 13px;
    margin-right: 6px;
  }
`;

const Order = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  border-right: 1px solid rgb(245, 245, 245);
  cursor: grab;
`;

const OrderButtonHover = styled.button`
  display: flex;
  align-items: center;
  padding: 9px 17px;
  margin-left: 20px;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 6px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid rgb(0, 61, 101);
  font-weight: 600;
  color: rgb(0, 61, 101);
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  padding: 9px 17px;
  margin-left: 20px;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 6px;
  font-size: 14px;
  color: rgb(158, 158, 158);
  background-color: transparent;
  transition: all 0.2s;
  &:hover {
    border: 1px solid rgb(0, 61, 101);
    font-weight: 600;
    color: rgb(0, 61, 101);
  }
`;

const UpDate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
`;

const UpDateButton = styled.button`
  display: flex;
  width: auto;
  padding: 0px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const UpDateImage = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  font-weight: 700;
  img {
    width: 17px;
    height: 17px;
    margin-right: 6px;
  }
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const ContainerMap = styled.div`
  margin-top: 20px;
`;

const MapHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 15px;
`;

const SubContainer = styled.p`
  display: flex;
  font-size: 18px;
  font-weight: 500;
`;

const SubTitle = styled.span`
  margin-right: 3px;
`;

const SubInfo = styled.span``;

const PlaceCount = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: rgb(10, 199, 206);
`;

const ShareButton = styled.button`
  border: none;
  background-color: transparent;
  img {
    width: 20px;
    height: 20px;
  }
`;

const Map = styled.div`
  margin: 20px 18px 10px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
