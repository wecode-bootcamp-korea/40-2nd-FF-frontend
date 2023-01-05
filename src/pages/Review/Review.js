import React from 'react';
import styled from 'styled-components';
import GourmetImage from './GourmetImage';
import ReviewGrade from './ReviewGrade';
import ReviewKeyword from './ReviewKeyword';
import ReviewText from './ReviewText';
import ReviewImage from './ReviewImage';

const Review = () => {
  return (
    <ReviewPage>
      <GourmetImage />
      <ReviewMain>
        <Text>
          평가를 완료하시면 최대 300포인트가 적립됩니다. <br />
          ※다코포인트는 네이버페이로 전환 가능합니다. 평가작성을 통한 다코포인트
          적립은 만 19세 미만의 가입자에게 제공해 드리지 않습니다.
        </Text>
        <ReviewGrade />
        <ReviewKeyword />
        <ReviewText />
        <ReviewImage />
        <Submission>제출 버튼</Submission>
      </ReviewMain>
    </ReviewPage>
  );
};

export default Review;

const ReviewPage = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
`;

const ReviewMain = styled.div`
  width: 1100px;
  margin: 50px;
  padding: 50px;
  background-color: white;
`;

const Text = styled.div`
  border-bottom: 1px solid gray; ;
`;

const Submission = styled.button`
  display: block;
  width: 400px;
  height: 80px;
  margin: auto;
  background-color: black;
  color: white;
  font-size: 30px;
`;
