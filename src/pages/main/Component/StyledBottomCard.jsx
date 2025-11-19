import styled from "styled-components";

export const Container = styled.div`
  // display: flex;
  // grid-template-columns: repeat(2, 1fr);
  // margin-top: 10px;
`;
export const Box = styled.div`
  // border: 1px solid #333;
  // margin: 0 auto;
  // padding: 10px 10px;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  cursor: pointer;

  // border-radius: 24px;
  // margin-top: 10px;
  margin-bottom: 30px;
`;
export const Img = styled.img`
  width: 80%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 30px;
  object-fit: cover;
  object-position: center;
  box-shadow: 3px 2px 6.6px rgba(0, 0, 0, 0.25);
  margin-bottom: 7px;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-4px); /* 위로 4px 떠오름 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* 그림자 더 진하게 */
  }
`;
export const Code = styled.div`
  overflow: hidden;
  color: var(--Neutral-Colors-500, #868da6);
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 15px */
`;

export const Info = styled.div`
  margin-top: 5px;
  color: var(--Neutral-Colors-500, #868da6);

  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 450;

  width: 80%;
`;

export const InfoName = styled.div`
  overflow: hidden;
  color: #868da6;
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 18px */
`;
