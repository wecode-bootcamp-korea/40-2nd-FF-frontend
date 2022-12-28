import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GourmetDetailReview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/detailPageReviewData.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      {data.map(info => (
        <DetailReview key={info.id}>
          <NickName>{info.name}</NickName>
          <Grade>{info.rating}점</Grade>
          <CommentBox>
            <Comment>
              맛 <Star src="/images/star.png" alt="star" /> {info.taste}
            </Comment>
            <Comment>
              가격 <Star src="/images/star.png" alt="star" /> {info.price}
            </Comment>
            <Comment>
              서비스 <Star src="/images/star.png" alt="star" /> {info.service}
            </Comment>
          </CommentBox>
          <TextReview>{info.text}</TextReview>
          <ImageBox>
            <img src={info.img} alt="rivewImg" />
          </ImageBox>
        </DetailReview>
      ))}
    </div>
  );
};

export default GourmetDetailReview;

const DetailReview = styled.div`
  margin: 30px;
  padding: 15px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

const NickName = styled.p`
  margin: 10px auto;
  font-size: 30px;
  font-weight: bold;
`;

const Grade = styled.div`
  margin: 10px auto;
  font-size: 40px;
`;

const CommentBox = styled.div`
  display: flex;
`;

const Comment = styled.p`
  display: flex;
  margin: 10px 20px 10px 0;
  font-size: 20px;
`;

const Star = styled.img`
  width: 20px;
  height: 20px;
`;

const TextReview = styled.p`
  font-size: 30px;
  margin: 20px 0;
`;

const ImageBox = styled.div`
  width: 960px;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
