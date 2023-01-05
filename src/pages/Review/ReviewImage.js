import React from 'react';
import styled from 'styled-components';

const ReviewImage = () => {
  return (
    <div>
      <Title>음식 사진</Title>
      <ImageBox>
        <Text>
          - 본인이 직접 촬영하지 않은 사진 <br />- 1000 * 1000미만 해상도의
          사진은 통보없이 삭제될 수 있습니다.
        </Text>
        <input type="file" />
      </ImageBox>
    </div>
  );
};

export default ReviewImage;

const Text = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Title = styled(Text)`
  font-weight: bold;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  border-bottom: 1px solid gray;
`;
