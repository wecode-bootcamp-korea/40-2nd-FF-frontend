import React from 'react';
import styled from 'styled-components';

const ReviewGrade = () => {
  return (
    <div>
      <Include>
        <Text>전체 평점</Text>
        <Text>전체 별점</Text>
      </Include>
      <Include>
        <Text>항목별 평점</Text>
        <Text>항목별 별점</Text>
      </Include>
    </div>
  );
};

export default ReviewGrade;

const Include = styled.div`
  justify-content: space-around;
  display: flex;
  border-bottom: 1px solid gray;
`;

const Text = styled.div`
  margin: 20px;
`;
