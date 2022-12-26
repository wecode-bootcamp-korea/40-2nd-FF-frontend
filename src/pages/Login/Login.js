import React from 'react';
import styled from 'styled-components/macro';
import { KAKAO_AUTH_URL } from '../../components/KakaoOauth/KakaoOauth';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <LoginWrapper>
      <Header>
        <Link to="/main">logo</Link>
      </Header>
      <Container>
        <Row>
          <Form>
            <Inner>
              <Title>로그인 및 회원가입</Title>
              <SubTitle>
                로그인을 통해 파인딩푸드의 다양한 혜택을 누리세요.
              </SubTitle>
              <div>
                <TextID
                  type="text"
                  placeholder="휴대전화번호 또는 이메일 입력"
                />
                <TextPW type="password" placeholder="비밀번호 입력" />
              </div>
              <LoginOption>
                <div>
                  <input type="checkbox" />
                  <ContinueLogin>로그인상태 유지</ContinueLogin>
                </div>
                <FindPw>
                  <PwButton>비밀번호 찾기</PwButton>
                </FindPw>
              </LoginOption>
              <LoginButton>로그인</LoginButton>
              <DivisionLine>
                <Line />
                <Description>또는</Description>
                <Line />
              </DivisionLine>
              <Kakao href={KAKAO_AUTH_URL}>
                <img src="/images/kakao_login_large_wide.png" alt="" />
              </Kakao>
              <SignupBox>
                <SignText>아직 파인딩푸드 회원이 아니신가요?</SignText>
                <br />
                <SubSignText>
                  회원가입을 하시면 더 많은 정보와 혜택을 받으실 수 있습니다.
                </SubSignText>
                <SignupButton>회원가입</SignupButton>
              </SignupBox>
            </Inner>
          </Form>
        </Row>
      </Container>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
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

const Form = styled.form`
  margin: 0;
  padding: 0;
  color: #222222;
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
  padding: 24px 0;
  font-weight: bold;
  font-size: 15px;
`;

const TextID = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  border: solid #d5d5d5 1px;
  font-size: 13px;
  line-height: 1.5;
`;

const TextPW = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: solid #d5d5d5 1px;
  font-size: 13px;
  line-height: 1.5;
`;

const LoginOption = styled.div`
  padding: 26px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContinueLogin = styled.label`
  margin-left: 5px;
  font-size: 14px;
`;

const FindPw = styled.div`
  padding-top: 3px;
`;

const PwButton = styled.button`
  padding: 0;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 7px;
  background-color: black;
  color: white;
  font-size: 13px;
  cursor: pointer;
`;

const DivisionLine = styled.div`
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  border-bottom: solid #e0e0e0 1px;
  width: 180px;
  height: 7px;
`;

const Description = styled.div`
  width: 40px;
  text-align: center;
  font-size: 13px;
`;

const Kakao = styled.a`
  width: 100%;
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

const SignupBox = styled.div`
  margin: 30px 0 100px 0;
  padding: 24px 0;
  border: solid #e0e0e0 1px;
  line-height: 24px;
`;

const SignText = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const SubSignText = styled.span`
  font-size: 13px;
`;

const SignupButton = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 12px;
  border: solid #e0e0e0 1px;
  border-radius: 2px;
  background-color: #ffffff;
  color: #222222;
  font-size: 13px;
  cursor: pointer;
`;
