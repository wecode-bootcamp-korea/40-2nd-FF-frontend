import React, { useEffect, useState } from 'react';
import GourmetDetailMap from './GourmetDetailMap.js';
import GourmetTop from './GourmetTop.js';
import GourmetInfo from './GourmetInfo.js';
import GourmetReview from './GourmetReview.js';
import styled from 'styled-components';

const GourmetDetail = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/data/detailPageData.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <GourmetDetailMain>
      <GourmetDetailMap data={data} />
      <DetailMain>
        <GourmetTop data={data} />
        <UnderLine />
        <GourmetInfo data={data} />
        <UnderLine />
        <GourmetReview data={data} />
      </DetailMain>
    </GourmetDetailMain>
  );
};

export default GourmetDetail;

const GourmetDetailMain = styled.div`
  margin: auto;
  padding: 40px;
  display: flex;
  background-color: #f0f0f0;
`;

const DetailMain = styled.div`
  width: 1100px;
  background-color: white;
`;

const UnderLine = styled.div`
  margin: 20px;
  border-bottom: 1px solid gray;
`;
