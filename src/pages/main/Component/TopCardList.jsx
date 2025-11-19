import React, { useEffect, useRef, useState } from "react";
import TopCard from "./TopCard";
import styled from "styled-components";
// import { mock } from "./mockData";
import API from "../../../api/axiosInstance";

//  스타일
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 5px 0;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 80%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Ment = styled.div`
  color: #868da6;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  //   line-height: 150%; /* 21px */
  margin: 0 30px;
`;

const TopCardList = () => {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  const [animals, setAnimals] = useState([]);
  const [original, setOriginal] = useState([]);
  useEffect(() => {
    async function load() {
      try {
        const res = await API.get("/api/animals", {
          params: { page: 0, size: 200, isLatest: false },
        });

        const list = res.data.data.content;
        const five = list.sort(() => Math.random() - 0.5).slice(0, 5);
        setOriginal(five);

        // 처음 3세트로 구성해서 자연스럽게 시작
        setAnimals([...five, ...five, ...five]);

        // 초기 위치 중앙 세트로 이동
        setTimeout(() => {
          const container = scrollRef.current;
          const width = cardRef.current.offsetWidth + 12;

          container.style.scrollBehavior = "auto";
          container.scrollLeft = width * five.length; // index 5부터
          container.style.scrollBehavior = "smooth";
        }, 30);
      } catch (e) {
        console.error(e);
      }
    }

    load();
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = cardRef.current.offsetWidth + 12;

    // 오른쪽 끝 가까움 → 뒤에 추가
    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - cardWidth * 2
    ) {
      setAnimals((prev) => [...prev, ...original]);
    }

    // 왼쪽 끝 가까움 → 앞에 추가
    if (container.scrollLeft <= cardWidth * 2) {
      const prevScrollLeft = container.scrollLeft;

      setAnimals((prev) => [...original, ...prev]);

      // 앞에 추가했으므로 scrollLeft 보정
      requestAnimationFrame(() => {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = prevScrollLeft + cardWidth * original.length;
        container.style.scrollBehavior = "smooth";
      });
    }
  };
  return (
    <Wrapper>
      <Ment>오늘의 인연을 만나보세요</Ment>
      <ScrollContainer ref={scrollRef} onScroll={handleScroll}>
        {animals.map((item, idx) => (
          <CardWrapper key={idx} ref={idx === 0 ? cardRef : null}>
            <TopCard data={item} />
          </CardWrapper>
        ))}
      </ScrollContainer>
    </Wrapper>
  );
};

export default TopCardList;
