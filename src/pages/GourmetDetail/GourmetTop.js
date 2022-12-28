import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Scope from './Scope';

const GourmetTop = props => {
  const { data } = props;
  const [isBackground, setIsBackground] = useState(true);

  const onClick = () => {
    setIsBackground(!isBackground);
  };

  return (
    <GourmetMain>
      <ReviewImages src={data.thumbnail_Image} alt="thumbnail_Image" />
      <Infomation>
        <Name>{data.name}</Name>
        <Location>{data.type}</Location>
        <Rating>
          <Score>70점</Score>
          <Grade>3.0점</Grade>
          <Scope score="70" />
        </Rating>
        <Rating>
          <LikeButton onClick={onClick} isBackground={isBackground}>
            <Icon src="/images/list_heart.png" alt="하트" />
            좋아요
          </LikeButton>
          <Button>
            <Icon src="/images/share.png" alt="공유" />
            공유
          </Button>
          <Link to="/review">
            <Button>
              <Icon src="/images/test.png" alt="평가" />
              평가하기
            </Button>
          </Link>
        </Rating>
        <Link to="/">
          <ReservationButton>예약하기</ReservationButton>
        </Link>
      </Infomation>
    </GourmetMain>
  );
};

export default GourmetTop;

const GourmetMain = styled.div`
  display: flex;
`;

const ReviewImages = styled.img`
  width: 500px;
  height: 400px;
  margin: 20px;
`;

const Infomation = styled.div`
  width: 500px;
  height: 400px;
  margin: 20px;
`;

const Name = styled.p`
  font-size: 40px;
  margin-top: 50px;
`;

const Location = styled.p`
  margin-top: 30px;
  font-size: 25px;
  opacity: 0.7;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

const Score = styled.span`
  font-size: 40px;
`;

const Grade = styled.span`
  font-size: 30px;
  opacity: 0.7;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  background-color: transparent;
  border: 0.5px solid black;
  border-radius: 20px;

  :hover {
    border: 0.5px solid red;
  }
`;

const LikeButton = styled(Button)`
  background-color: ${props => (props.isBackground ? 'transparent' : 'red')};
`;

const Icon = styled.img`
  width: 20px;
`;

const ReservationButton = styled.button`
  width: 450px;
  height: 60px;
  margin: 20px;
  font-size: 30px;
  border: 0.5px solid black;
  border-radius: 20px;
  background-color: black;
  color: white;
  opacity: 0.7;

  &:hover {
    background-color: white;
    color: black;
  }
`;
