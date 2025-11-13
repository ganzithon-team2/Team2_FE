import styled from "styled-components";

export const Container = styled.div``;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const MainImg = styled.img`
  width: 100%;
  height: 290px;
  flex-shrink: 0;
`;
export const DetailBox = styled.div``;
// 기본정보
export const BagicInfo = styled.div`
  border-radius: 40px 40px 0 0;
  background: #fff;
  box-shadow: -6px 4px 20.8px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  gap: 5px;
`;
export const DesertionNo = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const DetailInfo = styled.div`
  color: #8c8098;
  //   text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  //   line-height: 0%; /* 0 */
`;
export const Mark = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
`;

//사각박스 정보
export const CheckList = styled.div`
  background: #fff;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 18px 0;
`;
export const BoxInfo = styled.div`
  display: flex;
  padding: 17px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #ccc7d1;
  background: #fff;
  gap: 10px;
  color: #200e32;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 0%; /* 0 */
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
`;
export const BtnBox = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140.5%; /* 22.48px */
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  width: 270px;
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  margin: 0 auto;
  cursor: pointer;
`;

// 건강 정보 상태
export const HealthInfo = styled.div``;

// 성격 메모
export const personality = styled.div``;

//보호소 페이지 바로가기
export const GotoPage = styled.div``;
