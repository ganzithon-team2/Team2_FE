import styled from "styled-components";

// --- 페이지 전체 레이아웃 ---

// 페이지 전체를 감싸는 컨테이너
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// 하단 입력창을 제외한 스크롤 영역
export const ContentArea = styled.div`
  padding: 50px;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// --- 상단 컨텐츠 (인사말, 이미지, 카드) ---

export const GreetingText = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ImageOverlapContainer = styled.div`
  position: relative;
  width: 230px;
  height: 230px;
  display: flex; /* 내부 아이템 중앙 정렬용 */
  justify-content: center;
  align-items: center;
`;

export const PinkCircleImage = styled.img`
  width: 393px; /* ImageOverlapContainer에 꽉 채움 */
  height: 852px; /* ImageOverlapContainer에 꽉 채움 */

  postion: absolute; /* CharacterImage에 겹쳐지게 */
  object-fit: contain; /* 비율 유지 */
  z-index: 1; /* 강아지 이미지보다 아래 */
`;

export const CharacterImage = styled.img`
  position: absolute; /* ImageOverlapContainer에 겹쳐지게 */
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); /* 정확히 중앙에 배치 */
  width: 210px; /* 강아지 이미지 크기 */
  height: 210px; /* 강아지 이미지 크기 */
  object-fit: contain;
  z-index: 2; /* 핑크색 원 이미지보다 위 */
`;

export const CtaText = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.236%; /* 24.703px */
`;

export const SectionWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 11px;

  width: 100%;
`;

export const SectionTitle = styled.h3`
  color: #000;
  text-align: left;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.236%; /* 17.841px */
  margin-top: 67px;
  margin-left: 12px;
`;

export const FaqCard = styled.div`
  width: 165px;
  height: 67px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid #fff;
  opacity: 0.7;
  margin: 8px;
  display: flex;
  flex-direction: column;
  padding: 14px;
  background: rgba(255, 248, 207, 0.9);
  box-shadow: 1px 2px 7.8px 1px rgba(0, 0, 0, 0.25);

  color: #000;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
`;

export const AiCard = styled.div`
  width: 165px;
  height: 99px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  border-radius: 14px;
  border: 1px solid #fff;
  opacity: 0.7;
  margin: 8px;
  padding: 14px;
  background: rgba(255, 248, 207, 0.9);
  box-shadow: 1px 2px 7.8px 1px rgba(0, 0, 0, 0.25);

  color: #000;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
`;

export const Button = styled.button`
  display: flex;
  width: 83px;
  height: 21px;
  padding: 8px 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid #fbe5e9;
  background: #fff;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;

  align-self: flex-end;
`;
// --- 하단 고정 입력창 ---

export const InputWrapper = styled.div`
  /* Layout의 Box 하단에 고정 */
  position: relative;

  display: flex;
  justify-content: space-between;
  margin-right: 25px;
  margin-left: 25px;
  bottom: 44px;
`;

export const InputArea = styled.div`
  position: relative; /* 돋보기 아이콘을 겹치기 위함 */
`;

export const ChatInput = styled.input`
  width: 278px;
  height: 48px;
  border-radius: 80px;
  border: 0.2px solid #f0b2c0;
  background-color: transparent;

  padding: 8px 4px 8px 24px;
  align-items: center;
  flex-shrink: 0;

  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #000000; /* 플레이스홀더 색상 */
  }
  &:focus {
    outline: none;
    border-color: #ff8080;
  }
`;

export const MicInput = styled.button`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 0.5px solid #f0b2c0;
  background: transparent;
  cursor: pointer;

  /* 이미지 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  /* 이미지(자식)에 padding을 주기 위해 padding을 버튼으로 이동 */
  padding: 12px;
  box-sizing: border-box;
`;

export const SearchIcon = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 13px;
  background: transparent;

  /* 이미지 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
`;
