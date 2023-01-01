import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <div>
      <FooterBar>
        <Text>개인정보처리방침 | 이용약관 | 위치기반 서비스 이용약관</Text>
        <Info>
          <BordText>(주)FF(Finding Food) </BordText>{' '}
          <Text>
            | 대표이사:우리들 | 소재지: 서울특별시 강남구 테헤란로 427 10층
          </Text>
        </Info>
        <Text>이메일 문의:Finding Food@wecode.com</Text>
        <Inquiry>
          <Text>
            전화문의:010-0000-0000(평일 : 10:00 ~ 19:00, 주말/공휴일 제외)
          </Text>
          <Text>Copyright ⓒ 2023 Finding Food</Text>
        </Inquiry>
      </FooterBar>
    </div>
  );
};

export default Footer;

const FooterBar = styled.div`
  width: 1500px;
  margin: auto;
`;

const Text = styled.p`
  margin: 15px 0;
  font-size: 15px;
`;

const BordText = styled(Text)`
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
`;
const Inquiry = styled.div`
  display: flex;
  justify-content: space-between;
`;
