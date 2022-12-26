import React from 'react';
import styled from 'styled-components/macro';
import { FOOD_FILTER_DATA } from './FoodFilterData';
import { useSearchParams } from 'react-router-dom';

const ListFoodFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <FilterContent>
      <DistanceFilter>
        {FOOD_FILTER_DATA.map(filterData => (
          <div>
            <DistanceTitle>
              <img src={filterData.img} alt="" />
              <Text>{filterData.type}</Text>
            </DistanceTitle>
            <DistanceList>
              <FilterLi>
                <FilterLiContainer>
                  {filterData.list.map(key => (
                    <Label
                      onClick={() => {
                        searchParams.set('radius', key.params);
                        setSearchParams(searchParams);
                      }}
                    >
                      <input type="radio" name="distance" />
                      <Unit>{key.unit}</Unit>
                    </Label>
                  ))}
                </FilterLiContainer>
              </FilterLi>
            </DistanceList>
          </div>
        ))}
      </DistanceFilter>
      <AreaFilter>
        <AreaTitle>
          <AreaSmallBox />
          <Text>지역</Text>
        </AreaTitle>
        <AreaList>
          <Selection>
            <option value="1">전체</option>
            <option value="2">서울</option>
          </Selection>
          <Selection>
            <option value="1">전체</option>
            <option value="2">강남구</option>
          </Selection>
          <Selection>
            <option value="1">전체</option>
            <option value="2">강남역</option>
            <option value="3">삼성역</option>
            <option value="4">선릉역</option>
          </Selection>
        </AreaList>
      </AreaFilter>
    </FilterContent>
  );
};

export default ListFoodFilter;

const FilterContent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const DistanceFilter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const DistanceTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  padding: 3px 16px 5px;
  font-weight: 500;
  font-size: 18px;

  img {
    margin-right: 6px;
  }
`;

const Text = styled.div`
  font-weight: bold;
`;

const DistanceList = styled.ul`
  padding: 0px 12.5px 9px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(245, 245, 245);
`;

const FilterLi = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0px;
  list-style: none;
`;

const FilterLiContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Unit = styled.div`
  margin-left: 4px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 6px;
  padding-bottom: 1.5px;
  font-size: 14px;
  cursor: pointer;
`;

const AreaFilter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 146px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const AreaTitle = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 3px 16px 9px;
  font-weight: 500;
  font-size: 18px;
`;

const AreaSmallBox = styled.div`
  background-color: rgb(10, 199, 206);
  width: 13px;
  height: 13px;
  border-radius: 2px;
  margin-right: 6px;
`;

const AreaList = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
`;

const Selection = styled.select`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 4px;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 4px;
  cursor: pointer;
`;
