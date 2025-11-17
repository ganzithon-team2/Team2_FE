import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "../../styles/StyledShelter";

const Shelter = () => {
  const { state } = useLocation();
  const address = state?.shelterAddress;

  useEffect(() => {
    console.log("window.kakao:", window.kakao);
    console.log("window.kakao?.maps:", window.kakao?.maps);
    if (!address) return;
    if (window.kakao && window.kakao.maps) {
      loadMap();
      return;
    }

    // 스크립트 추가
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=bfd45bedd8c43ce5c4c2c2d6a45e9fc7&autoload=false&libraries=services";
    script.onload = () => {
      window.kakao.maps.load(() => {
        loadMap();
      });
    };
    document.head.appendChild(script);

    function loadMap() {
      const kakao = window.kakao;
      const container = document.getElementById("map");

      const map = new kakao.maps.Map(container, {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      });

      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result, status) => {
        console.log("입력 주소:", address);
        console.log("지오코더 결과:", result, status);
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          map.setCenter(coords);
        }
      });
    }
  }, [address]);

  if (!state) return <div>보호소 정보가 없습니다.</div>;

  return (
    <S.Container>
      <S.Box>
        <S.ShelerName>{state.shelterName}</S.ShelerName>
        <S.ShlterInfo>📍 {state.shelterAddress}</S.ShlterInfo>
        <S.ShlterInfo>☎️ {state.shelterTel}</S.ShlterInfo>
        <S.ShlterInfo>
          ({state.province} {state.city})
        </S.ShlterInfo>
        <S.MapWrap id="map">지도 불러오는 중</S.MapWrap>
        <S.GotoHomePage>
          홈페이지 가기{" "}
          <img src="../images/components/rightBtn.svg" alt="Btn" />
        </S.GotoHomePage>
      </S.Box>
    </S.Container>
  );
};

export default Shelter;
