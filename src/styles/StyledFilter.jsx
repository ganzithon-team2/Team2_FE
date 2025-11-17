import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div``;
export const Box = styled.div``;

// Select 디자인
export const StyledSelect = styled(Select)`
  width: 100%;

  .react-select__control {
    border: 1px solid #ff8080 !important;
    box-shadow: none !important;
    border-radius: 10px !important;
    color: var(--subtle-1, #61646b) !important;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */
    letter-spacing: 0.4px;

    padding: 0 5px;
  }

  .react-select__value-container {
    //  padding: 0 8px !important;
  }

  .react-select__indicator {
    box-shadow: none !important;
    color: #ff8080 !important;
  }
`;
export const SelectWrap = styled.div`
  display: flex;
  gap: 10px;
`;

// 검색조건 설정
export const Toptitle = styled.div`
  border-bottom: 1px solid #ff8ea7;
  padding-bottom: 0.7vh;
  padding-left: 30px;
  margin-bottom: 15px;
`;
export const TopText = styled.div`
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: 0.2px;
`;

//필터 wrap
export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
  gap: 20px;
`;
// 필터박스
export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
// 설정 이름
export const Subtitle = styled.div`
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: 0.2px;
`;

// 검색 드롭다운
export const DetailBox = styled.div``;
// 검색 기간 설정
export const PeriodBox = styled.div`
  display: flex;
  gap: 20px;
`;
// 날짜 선택박스
export const DateInput = styled.input`
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: 0.2px;
  padding: 0 10px;

  border: 1.5px solid #ffadc0;
  font-size: 14px;
  width: 45%;

  &:focus {
    outline: none;
  }
`;

//보호중인 동물만 검색
export const StatusFilter = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
`;
export const StatusText = styled.div`
  color: #61646b;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.4px;
`;
// 검색하기 버튼
export const SearchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 50px;
  width: 329px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #ffadc0;
  background: #fefafb;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
  letter-spacing: 0.4px;
`;
