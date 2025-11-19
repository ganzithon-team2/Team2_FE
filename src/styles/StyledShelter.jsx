import styled from "styled-components";

export const Container = styled.div``;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  jutify-content: center;
  gap: 5px;
  padding: 20px 20px;
`;
export const ShelerName = styled.div`
  color: #010101;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
`;

export const InfoWrap = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const ShlterInfo = styled.div`
  color: #010101;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;
export const MapWrap = styled.div`
  height: 250px;
  width: 100%;
  background: #eee;
  color: #010101;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding: 10px 20px;
`;
export const GotoHomePage = styled.div`
  width: 154px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #00000042;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #200e32;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140.5%; /* 18.265px */
  margin: 0 auto;
  cursor: pointer;
`;
