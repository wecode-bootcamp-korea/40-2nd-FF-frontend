import React from 'react';
import styled from 'styled-components';

const ReviewKeyword = () => {
  return (
    <div>
      <Title>음식점 키워드</Title>
      <Text>이 식당의 분위기를 선택해주세요? (복수 선택 가능)</Text>
      <KeyWordList>
        {KEYWORD.map(list => {
          return (
            <KeyWord key={list.id}>
              <input type="checkbox" />
              {list.text}
            </KeyWord>
          );
        })}
      </KeyWordList>
    </div>
  );
};

export default ReviewKeyword;

const KEYWORD = [
  { id: 1, text: '숨은맛집' },
  { id: 2, text: '서민적인' },
  { id: 3, text: '캐주얼한' },
  { id: 4, text: '고급스러운' },
  { id: 5, text: '가성비좋은' },
  { id: 6, text: '푸짐한' },
];

const Text = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Title = styled(Text)`
  font-weight: bold;
`;

const KeyWord = styled.label`
  font-size: 20px;
  margin-bottom: 15px;
`;

const KeyWordList = styled.div`
  margin: 20px auto;
  border-bottom: 1px solid gray;
`;
