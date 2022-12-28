import React from 'react';
import styled from 'styled-components';

const Scope = props => {
  const { score } = props;

  return (
    <Box>
      <Blue score={score}>
        <BlueStar src="/images/bluestar.png" alt="bluestar" />
      </Blue>
      <Graystar src="/images/graystar.png" alt="graystar" />
    </Box>
  );
};

export default Scope;

const Box = styled.div`
  position: relative;
  width: 150px;
  height: 30px;
`;

const Blue = styled.div`
  position: absolute;
  width: ${props => props.score * 1.5}px;
  height: 30px;
  overflow: hidden;
`;

const BlueStar = styled.img`
  z-index: 10;
  position: absolute;
  height: 30px;
  width: 150px;
`;

const Graystar = styled.img`
  position: absolute;
  height: 30px;
  width: 150px;
`;
