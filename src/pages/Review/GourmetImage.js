import React from 'react';
import styled from 'styled-components';

const GourmetImage = () => {
  return (
    <ImageBox>
      <Info>
        <Title>'식당 이름' 평가하기</Title>
        <Image src="/images/acorn.jpeg" alt="식당 사진" />
        <Text>식당 설명</Text>
      </Info>
    </ImageBox>
  );
};

export default GourmetImage;

const ImageBox = styled.div`
  width: 400px;
  height: 400px;
  margin: 30px;
  position: relative;
  flex-direction: column;
  background-color: white;
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;
const Text = styled.p`
  font-size: 15px;
`;
