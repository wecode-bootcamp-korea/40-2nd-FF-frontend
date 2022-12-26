import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import MapFoodList from './MapFoodList';

const FoodList = () => {
  return (
    <FoodData>
      <FoodOl>
        <FoodContainer>
          <MapFoodList />
        </FoodContainer>
      </FoodOl>
    </FoodData>
  );
};

export default FoodList;

const FoodData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 14px;
`;

const FoodOl = styled.ol`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

const FoodContainer = styled.li`
  list-style: none;
`;
