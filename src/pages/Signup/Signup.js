import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <SignupWrapper>
      <Header>
        <Link to="/main">logo</Link>
      </Header>
      <Container>
        <Row>
          <Inner>
            <Title>신규 회원가입</Title>
            <SubTitle>
              파인딩푸드에서는 회원님의 보안 강화 및 편리한 서비스를 제공해
              <br />
              드리기 위해 휴대전화 인증을 하고 있습니다
            </SubTitle>
            <Phone>
              <PhoneImage>
                <img src="images/message.png" alt="messageIcon" />
              </PhoneImage>
              <PhoneText>
                <PhoneTitle>휴대전화 인증 가입</PhoneTitle>
                <br />
                <PhoneSubTitle>
                  맛집검색, 좋아요, 비밀번호찾기, 정보받아보기 ,평가작성, 포인트
                  적립 및 사용, 다코박스 상품구매, 할인쿠폰 등의 모든 서비스
                  혜택을 받을 수 있습니다.
                </PhoneSubTitle>
              </PhoneText>
            </Phone>
            <Kakao>
              <KakaoImage>
                <img src="images/kakao-talk.png" alt="kakaoIcon" />
              </KakaoImage>
              <KakaoText>
                <KakaoTitle>카카오 가입</KakaoTitle>
                <br />
                <KakaoSubTitle>
                  카카오 신규 가입자도 휴대전화인증이 필요하며, 가입 후 비밀번호
                  없이 로그인하실 수 있습니다.
                </KakaoSubTitle>
              </KakaoText>
            </Kakao>
            <ButtonPhone>
              <img src="images/messageWhite.png" alt="messageWhiteIcon" />
              휴대전화 회원가입
            </ButtonPhone>
            <ButtonKakao>
              <img
                src="/images/kakao_login_large_wide.png"
                alt="kakaoLoginIcon"
              />
            </ButtonKakao>
            <ButtonLogin>
              <Link to="/">로그인 하기</Link>
            </ButtonLogin>
          </Inner>
        </Row>
      </Container>
    </SignupWrapper>
  );
};

export default Signup;

const SignupWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const Header = styled.div`
  padding: 22px 0;
  border-bottom: solid #e0e0e0 1px;
  text-align: center;
`;

const Container = styled.div`
  padding-bottom: 24px;
`;

const Row = styled.div`
  margin: 0 auto;
`;

const Inner = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.div`
  padding: 50px 12px 25px 12px;
  border-bottom: solid #e0e0e0 1px;
  font-size: 20px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  padding: 30px 0;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.5;
`;

const Phone = styled.div`
  display: flex;
  margin-top: 10px;
`;

const PhoneImage = styled.div`
  margin-right: 8px;

  img {
    width: 22px;
    height: 22px;
    object-fit: cover;
  }
`;

const PhoneText = styled.div`
  width: 360px;
  margin-left: 5px;
  text-align: left;
  align-items: center;
`;

const PhoneTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const PhoneSubTitle = styled.p`
  margin-top: 7px;
  font-size: 14px;
  line-height: 1.4;
`;

const Kakao = styled.div`
  display: flex;
  margin-top: 25px;
`;

const KakaoImage = styled.div`
  margin-right: 8px;

  img {
    width: 22px;
    height: 22px;
    object-fit: cover;
  }
`;

const KakaoText = styled.div`
  width: 360px;
  margin-left: 5px;
  text-align: left;
  align-items: center;
`;

const KakaoTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const KakaoSubTitle = styled.p`
  margin-top: 7px;
  font-size: 14px;
  line-height: 1.4;
`;

const ButtonPhone = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 50px;
  border: none;
  border-radius: 7px;
  background-color: #222222;
  color: white;
  font-size: 13px;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    object-fit: cover;
  }
`;

const ButtonKakao = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ButtonLogin = styled.button`
  margin-top: 30px;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
`;
