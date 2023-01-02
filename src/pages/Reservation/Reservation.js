import React from 'react';
import styled from 'styled-components/macro';
import ResevationDataPicker from './DataPicker';
import { Link } from 'react-router-dom';

const Reservation = () => {
  return (
    <ReservationAll>
      <ReservationWrapper>
        <ReservationHeader>
          <ReservationHeaderText>
            <FindingFoodText>
              <Link to="/main">
                <img src="images/reservation_home.png" alt="" />
                <span>파인딩푸드 ></span>
              </Link>
            </FindingFoodText>
            <HeaderTextReservation>예약하기</HeaderTextReservation>
          </ReservationHeaderText>
        </ReservationHeader>
        <ReservationContainer>
          <StoreInfo>
            <StoreImg>
              <img src="images/reservation_bakery.jpg" alt="" />
            </StoreImg>
            <StoreText>
              <StoreImgText>세븐스퀘어 예약</StoreImgText>
              <Info>
                <StoreImgInfoDate>
                  <StoreImgInfoDateText>[기간] </StoreImgInfoDateText>1/1(일) -
                  1/31(화)
                </StoreImgInfoDate>
                <StoreImgInfoPrice>
                  <StoreImgInfoPriceText>[가격] </StoreImgInfoPriceText>
                  <StoreTextPrice>
                    · 평일 런치 132,000원 -> 118,800원 (10% 할인)
                    <br /> · 평일 디너 145,000원 -> 130,500원 (10% 할인) <br />·
                    주말 및 공휴일 런치/디너 155,000원 -> 139,500원 (10% 할인)
                  </StoreTextPrice>
                </StoreImgInfoPrice>
                <StoreImgInfoPrice>
                  <StoreImgInfoPriceText>[운영시간]</StoreImgInfoPriceText>
                  <StoreTextPrice>
                    · 평일,주말 점심 11:30 - 14:30
                    <br />· 평일,주말 저녁 18:00 - 21:30
                  </StoreTextPrice>
                </StoreImgInfoPrice>
                <StoreImgInfoPrice>
                  <StoreImgInfoPriceText>
                    [세븐스퀘어 입장 안내]
                  </StoreImgInfoPriceText>
                  <StoreTextPrice>
                    감염병 예방 및 다중이용시설 마스크 착용 권고 사항에 따라
                    마스크 미착용 시<br /> 세븐스퀘어 입장이 제한됩니다. <br />
                  </StoreTextPrice>

                  <AddStoreTextPrice>
                    * 어린이 요금 (36개월 이상부터 12세 이하) 에는 할인이
                    적용되지 않습니다. <br />* 유아 (36개월 미만_증빙서류 지참)
                    무료입니다.
                    <br /> * 좌석 지정은 불가합니다.
                    <br /> * 타 프로모션과 중복 할인 적용 및 메리어트 포인트
                    적립 불가합니다.
                  </AddStoreTextPrice>
                </StoreImgInfoPrice>
              </Info>
            </StoreText>
          </StoreInfo>
          <StoreReservation>
            <ResevationDataPicker />
          </StoreReservation>
        </ReservationContainer>
      </ReservationWrapper>
    </ReservationAll>
  );
};

export default Reservation;

const ReservationAll = styled.div`
  padding-bottom: 50px;
  background-color: rgb(245, 245, 245);
`;

const ReservationWrapper = styled.div`
  width: 940px;
  margin: 0 auto;
`;

const ReservationHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;

const ReservationHeaderText = styled.div`
  display: flex;
  align-items: center;
  padding-top: 38px;
  padding-bottom: 15px;
`;

const FindingFoodText = styled.button`
  display: flex;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  img {
    width: 13px;
    height: 13px;
    margin-right: 7px;
  }
`;

const HeaderTextReservation = styled.span`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
`;

const ReservationContainer = styled.div`
  display: flex;
`;

const Info = styled.div`
  font-size: 15px;
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  background-color: white;
  border-radius: 14px;
`;

const StoreImg = styled.div`
  padding: 20px;
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const StoreText = styled.div``;

const StoreImgText = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 30px;
  margin: 0px 20px;
  border-bottom: 1px solid #eee;
`;

const StoreImgInfoDate = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 15px 20px;
`;

const StoreImgInfoDateText = styled.div`
  margin-right: 10px;
  font-weight: 600;
`;

const StoreImgInfoPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const StoreImgInfoPriceText = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
`;

const StoreTextPrice = styled.div`
  line-height: 22px;
`;

const AddStoreTextPrice = styled.div`
  margin-top: 25px;
  padding-bottom: 45px;
  line-height: 24px;
  border-bottom: 1px solid #eee;
`;

const StoreReservation = styled.div`
  width: 430px;
  margin-left: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 14px;
`;
