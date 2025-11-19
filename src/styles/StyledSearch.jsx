import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Box = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 36vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 10px;
  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* Optional: iOS smooth */
  -webkit-overflow-scrolling: touch;
  padding-top: 20px;
`;
