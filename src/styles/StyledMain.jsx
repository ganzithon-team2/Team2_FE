import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  // height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* Optional: iOS smooth */
  -webkit-overflow-scrolling: touch;
`;

export const Box = styled.div`
  width: 100%;
`;

export const TopBox = styled.div`
  transition: opacity 0.3s cubic-bezier(0.33, 0.01, 0.67, 1.01),
    transform 0.3s cubic-bezier(0.33, 0.01, 0.67, 1.01);
  opacity: ${({ $hide }) => ($hide ? 0 : 1)};
  transform: translateY(${({ $hide }) => ($hide ? "-24px" : "0")});
  will-change: opacity, transform;
  .wrapper {
    transition: inherit;
  }
`;

//테스트
export const TestBox = styled.div`
  width: 100%;

  border: 1px solid #333;
`;
// 기능버튼
export const StikyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
`;

// 탭바

export const TapBar = styled.div`
  display: flex;
  gap: 16px;
  padding: 5px 24px;
  height: 50px;
  border-bottom: 1px solid #f0b2c0;
  position: relative;
`;
// 필터버튼
export const FilterBtn = styled.img`
  margin-left: auto;
  width: 20px;
  cursor: pointer;
`;

export const TapName = styled.div`
  display: flex;
  jutify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#868da6" : "#b7c0d2")};
  font-family: Pretendard;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 150%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: ${({ $active }) => ($active ? "#FF5E82" : "transparent")};
    transition: all 0.2s ease;
    border-radius: 80px;
  }

  &:hover {
    color: var(--Neutral-Colors-500, #868da6);
  }

  &:hover::after {
    // background: #ff5e82;
  }
`;

export const BottomBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 10px;

  min-height: calc(100vh - 200px);
  height: auto;
  padding-bottom: 20%;
  overflow-y: ${({ $scroll }) => ($scroll ? "auto" : "hidden")};
  scroll-behavior: smooth;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* Optional: iOS smooth */
  -webkit-overflow-scrolling: touch;
`;
