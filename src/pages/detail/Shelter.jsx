import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "../../styles/StyledShelter";

const Shelter = () => {
  const { state } = useLocation();

  if (!state) return <div>보호소 정보가 없습니다.</div>;

  return (
    <S.Container>
      <S.Box>
        <S.ShelerName>{state.shelterName}</S.ShelerName>
        <S.InfoWrap>
          <S.ShlterInfo>
            📍 {state.shelterAddress} ({state.province} {state.city})
          </S.ShlterInfo>
          <S.ShlterInfo>☎️ {state.shelterTel}</S.ShlterInfo>
        </S.InfoWrap>

        <S.MapWrap id="map">지도 서비스 준비중입니다.</S.MapWrap>
        <S.GotoHomePage
          onClick={() => {
            const query = encodeURIComponent(state.shelterName);
            const url = `https://search.naver.com/search.naver?query=${query}`;
            window.open(url, "_blank");
          }}
        >
          홈페이지 가기{" "}
          <img src="../images/components/rightBtn.svg" alt="Btn" />
        </S.GotoHomePage>
      </S.Box>
    </S.Container>
  );
};

export default Shelter;
