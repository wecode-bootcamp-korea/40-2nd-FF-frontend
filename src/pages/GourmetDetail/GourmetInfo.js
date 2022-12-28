import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GourmetInfo = props => {
  const { data } = props;
  const [like, setlike] = useState([]);

  useEffect(() => {
    fetch('/data/detailPageLikesData.json')
      .then(res => res.json())
      .then(setlike);
  }, []);

  return (
    <InfoBox>
      <Info>위치: {data.address}</Info>
      <Info>번호: {data.phone_number}</Info>
      <Info>#{data.mood}</Info>
      <Info>이 식당에 {like.likes}명의 좋아요한 사용자가 있습니다.</Info>
    </InfoBox>
  );
};

export default GourmetInfo;

const InfoBox = styled.div`
  margin: 20px;
`;

const Info = styled.p`
  font-size: 20px;
  margin: 20px auto;
`;
