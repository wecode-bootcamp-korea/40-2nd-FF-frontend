import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { API } from '../../../src/config';

const KakaoCode = () => {
  const location = useLocation();
  const kakaoCode = location.search.split('=')[1];
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API.signin, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: kakaoCode,
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.accessToken) {
          localStorage.setItem('token', response.accessToken);
          navigate('/Main');
        }
      });
  }, []);
  return <h1>redirecting...</h1>;
};

export default KakaoCode;
