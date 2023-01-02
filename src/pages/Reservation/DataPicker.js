import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components/macro';
registerLocale('ko', ko);

const ResevationDataPicker = ({ title, content }) => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = ({ value, onClick }) => (
    <button class="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );

  const getDayName = date => {
    return date
      .toLocaleDateString('ko-KR', {
        weekday: 'long',
      })
      .substr(0, 1);
  };

  const createDate = date => {
    return new Date(
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  const [time, setTime] = useState();
  const onButtonClick = e => {
    setTime(e.target.innerText);
  };

  const [number, setNumber] = useState(0);

  const onNumberButtonClick = e => {
    setNumber(e.target.innerText);
  };

  const increaseNumber = () => {
    if (number === 14) return;
    setNumber(number => number + 1);
  };
  const decreaseNumber = () => {
    if (number === 0) return;
    setNumber(number => number - 1);
  };

  const reservationPriceData = 130500;

  return (
    <ReservationDate>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={startDate}
        onChange={date => setStartDate(date)}
        locale="ko"
        placeholderText="Weeks start on Monday"
        inline
        customInput={<ExampleCustomInput />}
        minDate={new Date()}
        popperModifiers={{
          preventOverflow: {
            enabled: true,
          },
        }}
        dayClassName={date =>
          getDayName(createDate(date)) === '토'
            ? 'saturday'
            : getDayName(createDate(date)) === '일'
            ? 'sunday'
            : undefined
        }
      />
      <ListInput>
        <ListCalender>
          <ItemLabel>
            <SmallItemBox></SmallItemBox>
            선택
          </ItemLabel>
          <NotItemLabel>
            <NotSmallItemBox></NotSmallItemBox>
            불가
          </NotItemLabel>
        </ListCalender>
        <InputDate>
          <InputDateKo>날짜</InputDateKo>
          <InputDateText>
            {startDate
              ? `${startDate.getMonth() + 1}월 ${startDate.getDate()}일`
              : '날짜를 선택해 주세요.'}
          </InputDateText>
        </InputDate>
        <InputTime>
          {title}
          <Time>시간</Time>
          <TimeGray>{time ? time : '시간을 선택해 주세요.'}</TimeGray>
          <TimeImg
            onClick={() => {
              setIsOpen(e => !e);
            }}
          >
            <img src="images/reservation_down-arrow.png" alt="" />
          </TimeImg>
        </InputTime>
        <SubInput>
          <SubInputTime>
            {isOpen && (
              <HideTime>
                <TimePm>오후</TimePm>
                <TimeBtn onClick={onButtonClick}>12:30</TimeBtn>
                <TimeBtn onClick={onButtonClick}>16:30</TimeBtn>
                <TimeBtn onClick={onButtonClick}>18:30</TimeBtn>
                <TimeBtn onClick={onButtonClick}>20:30</TimeBtn>
              </HideTime>
            )}
          </SubInputTime>
        </SubInput>
        <InputTime>
          {title}
          <Time>인원</Time>
          <TimeGray>{number ? number : '인원을 선택해 주세요.'}</TimeGray>
          <TimeImg
            onClick={() => {
              setIsTimeOpen(e => !e);
            }}
          >
            <img src="images/reservation_down-arrow.png" alt="" />
          </TimeImg>
        </InputTime>
        <SubInput>
          <SubInputNumber>
            {isTimeOpen && (
              <HideNumber>
                <NumberMessage>
                  <img src="images/reservation_information.png" alt="" />
                  1~14명까지 선택 가능합니다.
                </NumberMessage>
                <NumberTxtWrapper>
                  <div>
                    <NumberTxt>성인 주중 식사</NumberTxt>
                    <SubNumberTxt>성인(중학생 이상 요금)</SubNumberTxt>
                  </div>
                  <div>
                    <NumberBtn>
                      <DownNumberBtn onClick={decreaseNumber}>-</DownNumberBtn>
                      <Number onChange={onNumberButtonClick}>
                        {number}
                        <SmallNumberText>명</SmallNumberText>
                      </Number>
                      <UpNumberBtn onClick={increaseNumber}>+</UpNumberBtn>
                    </NumberBtn>
                  </div>
                </NumberTxtWrapper>
                <SumNumber>
                  <div>
                    <SumNumberPrice>
                      {(reservationPriceData * number).toLocaleString('ko-KR', {
                        style: 'currency',
                        currency: 'KRW',
                      })}
                    </SumNumberPrice>
                    <SumPriceTxt>원</SumPriceTxt>
                  </div>
                  <DiscountSumNumberPrice>
                    ( 145,000 원 / 10 % )
                  </DiscountSumNumberPrice>
                </SumNumber>
              </HideNumber>
            )}
          </SubInputNumber>
          <AllSum>
            <AllSumTxt>합계</AllSumTxt>
            <div>
              <AllSumPrice>
                {(reservationPriceData * number).toLocaleString('ko-KR', {
                  style: 'currency',
                  currency: 'KRW',
                })}
              </AllSumPrice>
              <AllSumPriceTxt>원</AllSumPriceTxt>
            </div>
          </AllSum>
        </SubInput>
        <ReservationBtn onClick={() => alert('예약이 완료되었습니다.')}>
          예약하기
        </ReservationBtn>
      </ListInput>
    </ReservationDate>
  );
};

export default ResevationDataPicker;

const ReservationDate = styled.div`
  .react-datepicker {
    width: 100%;
    border: none;
  }
  .react-datepicker__header {
    background-color: white;
  }
  .react-datepicker__month-container {
    width: 100%;
  }

  .react-datepicker__current-month {
    padding: 20px 0px;
    font-size: 28px;
    font-weight: 500;
  }

  .react-datepicker__navigation {
    margin: 25px 10px;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-around;
    padding: 10px auto;
    font-size: 16px;
  }

  .react-datepicker__day-name {
    width: 50px;
  }

  .react-datepicker__month {
    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    padding-bottom: 10px;
    width: 100%;
    font-size: 16px;
    border-bottom: 1px solid #eee;
  }

  .react-datepicker__day {
  }

  .react-datepicker__day--selected {
    background-color: rgb(12, 199, 206);
    :hover {
      background-color: rgb(12, 199, 206);
    }
  }

  .saturday {
    color: #379afc !important;
  }

  .sunday {
    color: #f82222 !important;
  }
`;

const ListInput = styled.div`
  margin-top: 10px;
`;

const ListCalender = styled.ul`
  display: flex;
  list-style: none;
`;

const ItemLabel = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 6px;
  font-size: 12px;
`;

const SmallItemBox = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: rgb(12, 199, 206);
`;

const NotItemLabel = styled.li`
  list-style: none;
  margin: 6px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;

const NotSmallItemBox = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: #eaeaea;
`;

const InputDate = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e3e3e3;
`;

const InputDateKo = styled.div`
  font-weight: 600;
`;

const InputDateText = styled.div`
  margin-left: 20px;
  color: gray;
  font-weight: 600;
`;

const InputTime = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e3e3e3;
`;

const Time = styled.div`
  width: 12%;
  display: flex;
  font-weight: 600;
`;

const TimeGray = styled.div`
  width: 100%;
  margin-left: 10px;
  font-weight: 500;
  color: gray;
`;

const TimeImg = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
  }
`;

const SubInput = styled.div``;

const SubInputTime = styled.div`
  .show-menu {
    width: 100%;
    height: 500px;
    position: absolute;
    left: 0px;
    transition: 1s;
  }

  .hide-menu {
    width: 100%;
    height: 500px;
    position: absolute;
    left: -376px;
    transition: 1s;
  }
`;

const HideTime = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-left: 10px;
  padding-bottom: 20px;
`;

const TimePm = styled.div`
  margin-right: 17px;
  color: gray;
  font-size: 14px;
  font-weight: 600;
`;

const TimeBtn = styled.button`
  margin-right: 8px;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    font-weight: 600;
    color: white;
    background-color: rgb(12, 199, 206);
  }
`;

const SubInputNumber = styled.div`
  .show-menu {
    width: 376px;
    height: 500px;
    position: absolute;
    left: 0px;
    transition: 1s;
  }

  .hide-menu {
    width: 376px;
    height: 500px;
    position: absolute;
    left: -376px;
    transition: 1s;
  }
`;

const HideNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 10px;
  padding-bottom: 50px;
  border-bottom: 1px solid #eee;
`;

const NumberMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size: 14px;
  color: #666;
  border-bottom: 1px solid #eeeeee;
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;

const NumberTxtWrapper = styled.div`
  width: 100%;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NumberTxt = styled.div`
  margin-top: 4px;
  color: #000;
  font-size: 15px;
  font-weight: 600;
`;
const SubNumberTxt = styled.div`
  margin-top: 7px;
  color: #989898;
  font-size: 14px;
  font-weight: 400;
`;

const NumberBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  background-color: #eeee;
  border-radius: 8px;
`;

const UpNumberBtn = styled.div`
  color: gray;
  font-size: 25px;
  cursor: pointer;
  :hover {
    color: rgb(12, 199, 206);
  }
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 9px;
  font-size: 17px;
`;

const SmallNumberText = styled.span`
  font-size: 15px;
  margin-left: 2px;
`;

const DownNumberBtn = styled.div`
  color: gray;
  font-size: 25px;
  cursor: pointer;
  :hover {
    color: rgb(12, 199, 206);
  }
`;

const SumNumber = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 20px;
`;

const SumNumberPrice = styled.span`
  margin-right: 4px;
  font-weight: 700;
  font-size: 17px;
`;

const SumPriceTxt = styled.span``;

const DiscountSumNumberPrice = styled.div`
  margin-top: 5px;
  font-size: 13px;
  color: gray;
`;

const AllSum = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const AllSumTxt = styled.div`
  margin-left: 10px;
  color: rgb(12, 199, 206);
  font-weight: 600;
  font-size: 17px;
`;

const AllSumPrice = styled.span`
  margin-right: 4px;
  font-weight: 700;
  font-size: 18px;
`;

const AllSumPriceTxt = styled.span``;

const ReservationBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 18px;
  margin: 40px auto 10px auto;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    font-weight: 600;
    color: white;
    background-color: rgb(12, 199, 206);
  }
`;
