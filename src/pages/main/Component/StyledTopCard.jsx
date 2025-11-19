import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  position: relative;
`;

export const Box = styled.div`
  width: 150%;
  height: 121px;
  aspect-ratio: 16 / 7; /* 16:10 비율 유지 */
  border: 1.5px solid #f86f8e;
  border-radius: 30px;
  display: flex;
  padding: 13px 10px;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 20px;
  box-shadow: 1px 3px 7.3px 0 rgba(0, 0, 0, 0.25);
`;
export const Info = styled.div`
  font-family: "Pretendard", sans-serif;
  color: #200e32;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  top: 0px;
  // right: 0px;
  // text-align: right;
  padding-left: 105px;
`;

export const Name = styled.div`
  font-weight: 500;
`;
export const Code = styled.div`
  font-size: 11px;
`;
export const ShelterName = styled.div`
  font-size: 11px;
  color: #8c8098;
`;
export const Date = styled.div`
  color: #f86f8e;
  border: 1px solid #f0b2c0;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 540;
  padding: 1px 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  margin-left: 10px;
  margin-top: 9px;
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

// 보러가기
export const GotoDetail = styled.div`
  width: 70px;
  height: 10px;
  border: 1px solid #f86f8e;
  color: #f86f8e;
  border-radius: 50px;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  padding: 15px 0;
  background: #fff;
  margin-top: -3.8vh;
  z-index: 999;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.8;
  }
`;
export const AgeText = styled.div`
  color: #8c8098;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DateText = styled.div`
  color: #000;
  // text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 9px */
`;
