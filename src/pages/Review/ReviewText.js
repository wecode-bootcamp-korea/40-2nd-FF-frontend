import React from 'react';
import styled from 'styled-components';

const ReviewText = () => {
  return (
    <div>
      <Title>방문 후기</Title>
      <TextBox type="text" />
    </div>
  );
};

export default ReviewText;

const Title = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const TextBox = styled.input`
  width: 1000px;
  height: 200px;
  overflow: scroll;
  font-size: 15px;
  margin: 20px auto;
  border-bottom: 1px solid gray;
`;
