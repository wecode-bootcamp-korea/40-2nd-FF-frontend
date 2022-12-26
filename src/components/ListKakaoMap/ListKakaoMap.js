import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components/macro';
const { kakao } = window;

const ListKakaoMap = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.506277, 127.053651),
      level: 3,
    };

    const displayMarker = (locPosition, message) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      const iwContent = message,
        iwRemoveable = true;

      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      infowindow.open(map, marker);
      map.setCenter(locPosition);
    };
    fetch(`http://10.58.52.218:3000/store/list?${searchParams.toString()}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(setSearchParams());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude,
          lon = position.coords.longitude;
        searchParams.set('lat', lon);
        searchParams.set('lon', lat);
        setSearchParams(searchParams);

        const locPosition = new kakao.maps.LatLng(lat, lon),
          message = '<div style="padding:5px;">현재 나의 위치</div>';

        displayMarker(locPosition, message);
      });
    } else {
      const locPosition = new kakao.maps.LatLng(37.506277, 127.053651),
        message = 'geolocation을 사용할수 없어요..';

      displayMarker(locPosition, message);
    }

    const map = new kakao.maps.Map(container, options);

    const positions = [
      {
        title: '저스트코',
        latlng: new kakao.maps.LatLng(37.506496, 127.054225),
      },
      {
        title: '현대타워',
        latlng: new kakao.maps.LatLng(37.506217, 127.053051),
      },
      {
        title: '수림복국',
        latlng: new kakao.maps.LatLng(37.506764, 127.053504),
      },
    ];

    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    for (let i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      const marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        title: positions[i].title,
        image: markerImage,
      });
    }

    // // TODO: 검색기능 추가 예정
    // const ps = new kakao.maps.services.Places();
    // const placesSearchCB = (data, status, pagination) => {
    //   if (status === kakao.maps.services.Status.OK) {
    //     let bounds = new kakao.maps.LatLngBounds();

    //     for (let i = 0; i < data.length; i++) {
    //       displayMarker(data[i]);
    //       bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
    //     }
    //     map.setBounds(bounds);
    //   }
    // };
    // ps.keywordSearch('이태원 맛집', placesSearchCB);

    // console.log(placesSearchCB);

    // // const displayMarker = place => {
    // //    marker = new kakao.maps.Marker({
    // //     map: map,
    // //     position: new kakao.maps.LatLng(place.y, place.x),
    // //   });

    // //   kakao.maps.event.addListener(marker, 'click', function () {
    // //     infowindow.setContent(
    // //       '<div style="padding:5px;font-size:12px;">' +
    // //         place.place_name +
    // //         '</div>'
    // //     );
    // //     infowindow.open(map, marker);
    // //   });
    // // };
  }, []);

  return <StyledMap id="map" />;
};

export default ListKakaoMap;

const StyledMap = styled.div`
  width: 100%;
  height: 275px;
  border-radius: 14px;
`;
