import React, { useCallback, useEffect, useRef, useState } from 'react';
import MainTop from './MainTop';
import MainSlick from './MainSlick';
import styled from 'styled-components';

const Main = () => {
  const [list, setList] = useState([]);
  const moreRender = useRef(null);
  const [path, setPath] = useState(1);

  const handlerEvent = useCallback(
    entries => {
      if (entries[0].isIntersecting) {
        setPath(path + 1);
        fetch(`/data/mainSlickData${path}.json`)
          .then(res => res.json())
          .then(data => setList(prev => [...prev, ...data]));
      }
    },
    [path]
  );
  useEffect(() => {
    const scroll = new IntersectionObserver(handlerEvent);
    if (path < 7) {
      if (moreRender.current) {
        scroll.observe(moreRender.current);
      }
      return () => {
        scroll.disconnect();
      };
    }
  }, [handlerEvent]);
  return (
    <>
      <MainPage>
        <MainTop />
        <MoreLike>
          좋아요와 평가를 통해서 회원님의 취향을 더 알려주세요. 회원님께 딱 맞는
          맛집을 추천해드립니다.
        </MoreLike>
        {list.map(data => {
          return <MainSlick key={data.type} {...data} />;
        })}
      </MainPage>
      <div ref={moreRender} />
    </>
  );
};

export default Main;

const MainPage = styled.div`
  background-color: #f0f0f0;
`;

const MoreLike = styled.div`
  width: 1100px;
  height: 30px;
  padding: 5px;
  margin: auto;
  background-color: white;
  font-size: 20px;
  text-align: center;
`;
