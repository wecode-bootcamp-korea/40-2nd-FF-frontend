import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GourmetDetailReview from './GourmetDetailReview.js';

const GourmetReview = props => {
  const { data } = props;

  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('/data/detailPageReviewData.json')
      .then(res => res.json())
      .then(setReview);
  }, []);

  return (
    <ReviewBox>
      <ReviewTitle>{review.length}건의 방문자 평가</ReviewTitle>
      <UnderLine />
      <Rating>70점</Rating>
      <CommentBox>
        <Comment>
          맛 <Star src="/images/star.png" alt="star" /> 3
        </Comment>
        <Comment>
          가격 <Star src="/images/star.png" alt="star" /> 3.5
        </Comment>
        <Comment>
          서비스 <Star src="/images/star.png" alt="star" /> 2.5
        </Comment>
      </CommentBox>
      <Mood>
        분위기: <MoodText>{data.mood}</MoodText>
      </Mood>

      <UnderLine />
      <Mention>
        <Notice>
          <NoticeMention>
            이 음식점의 평가결과는 신뢰할 수 있을 만큼 이루어졌습니다.
          </NoticeMention>
          <NoticeMentionGrey>
            ※홍보 및 비방 등 부적절한 평가는 평점 산정에서 제외될수있습니다.
          </NoticeMentionGrey>
        </Notice>
        <Link to="/review">
          <Button>맛집 평가하기</Button>
        </Link>
      </Mention>
      <UnderLine />
      <GourmetDetailReview review={data.content} />
    </ReviewBox>
  );
};

export default GourmetReview;

const ReviewBox = styled.div`
  margin: 20px;
`;

const ReviewTitle = styled.p`
  font-size: 30px;
`;

const UnderLine = styled.div`
  margin: 20px auto;
  border-bottom: 1px solid gray;
`;

const Rating = styled.div`
  margin: 10px auto;
  font-size: 40px;
  font-weight: bold;
`;

const CommentBox = styled.div`
  display: flex;
`;

const Comment = styled.p`
  margin: 10px auto;
  font-size: 30px;
`;

const Star = styled.img`
  width: 30px;
  height: 30px;
`;

const Mood = styled.div`
  margin: 10px auto;
  font-size: 20px;
`;

const MoodText = styled.span`
  background-color: gray;
  opacity: 0.7;
  border-radius: 30px;
  padding: 5px;
`;

const Mention = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Notice = styled.div`
  flex-direction: column;
`;

const NoticeMention = styled.p`
  font-size: 15px;
`;

const NoticeMentionGrey = styled(NoticeMention)`
  opacity: 0.7;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  font-size: 20px;
  border: 0.5px solid black;
  background-color: transparent;
`;
