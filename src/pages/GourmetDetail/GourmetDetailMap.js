import React, { useEffect } from 'react';
import styled from 'styled-components';
const { kakao } = window;

const GourmetDetailReview = props => {
  const { data } = props;

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(data.latitude, data.longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    map.setDraggable(false);
    map.setZoomable(false);

    const markerPosition = new kakao.maps.LatLng(data.latitude, data.longitude);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  });

  return (
    <MapBackground>
      <KakaoMap id="myMap" />
    </MapBackground>
  );
};

export default GourmetDetailReview;

const MapBackground = styled.div`
  width: 400px;
  height: 400px;
  margin: 20px;
  padding-top: 25px;
  background-color: white;
`;

const KakaoMap = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: auto;
`;
