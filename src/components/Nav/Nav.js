import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
const Nav = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const onChange = e => {
    setSearch(e.target.value);
  };
  const onKeyDown = e => {
    e.preventDefault();
    if (e.key === 'Enter') {
      searchParams.set('qurey', search);
      setSearchParams(searchParams);
    }
  };

  const onClick = e => {
    e.preventDefault();
    searchParams.set('qurey', search);
    setSearchParams(searchParams);
  };

  const onClickLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div>
      <NavrBar>
        <Logo to="/">logo</Logo>
        <SearchBar>
          <Search
            type="text"
            value={search}
            onChange={onChange}
            onKeyDown={e => onKeyDown(e)}
            placeholder="지역, 음식 또는 식당명 입력"
          />
          <ClickButton onClick={e => onClick(e)}>검색</ClickButton>
        </SearchBar>

        {localStorage.getItem('token') ? (
          <JoinBox>
            <Join onClick={onClickLogout}>로그아웃</Join>
          </JoinBox>
        ) : (
          <JoinBox>
            <Join>로그인</Join>
            <Join>회원가입</Join>
          </JoinBox>
        )}
      </NavrBar>
    </div>
  );
};

export default Nav;

const NavrBar = styled.div`
  width: 1500px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;

const Logo = styled(Link)`
  font-size: 40px;
  color: black;
  text-decoration: none;
`;

const SearchBar = styled.form`
  position: relative;
`;

const Search = styled.input`
  width: 500px;
  height: 40px;
  margin: auto;
  padding: 20px;
  background-color: #f5f5f5;
  color: gray;
  border: none;
  border-radius: 20px;
`;

const ClickButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 30px;
  border: none;
  background-color: transparent;
`;

const JoinBox = styled.div`
  padding: 20px;
`;

const Join = styled(Link)`
  padding: 5px 10px;
  font-size: 20px;
  color: black;
  text-decoration: none;
`;
