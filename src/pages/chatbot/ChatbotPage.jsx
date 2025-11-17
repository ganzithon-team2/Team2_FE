import React from "react";
// 1. 방금 만든 스타일 컴포넌트들을 import 합니다.
import * as C from "../../styles/StyledChat";
import pinkCircle from "/images/chatbot/pink-circle.png"; // (이미지 경로 예시)
import chatbotCharacter from "/images/chatbot/boni-character.png"; // (이미지 경로 예시)
import search from "/images/chatbot/search.png";
import mic from "/images/chatbot/mic.png";

export default function ChatbotPage() {
  const nickname = localStorage.getItem("nickname") || "리본";

  return (
    <C.Container>
      <C.ContentArea>
        <C.GreetingText>안녕하세요, {nickname}님</C.GreetingText>
        <C.ImageOverlapContainer>
          <C.PinkCircleImage src={pinkCircle} alt="핑크색 원 배경" />
          <C.CharacterImage src={chatbotCharacter} alt="챗봇 캐릭터 보니" />
        </C.ImageOverlapContainer>

        <C.CtaText>
          보니에게
          <br />
          무엇이든 물어보세요!
        </C.CtaText>

        {/* 자주 묻는 질문 섹션 */}
        <C.SectionWrapper>
          <C.Section>
            <C.SectionTitle>자주 묻는 질문</C.SectionTitle>
            <C.FaqCard>
              <span>🐾 유기동물 입양 절차 알려줘!</span>
              <C.Button>채팅하러 가기</C.Button>
            </C.FaqCard>
            <C.FaqCard>
              <span>🐾 입양 전 방문이 가능한가요?</span>
              <C.Button>채팅하러 가기</C.Button>
            </C.FaqCard>
          </C.Section>

          <C.Section>
            <C.SectionTitle>AI 기반 유기동물 추천</C.SectionTitle>
            <C.AiCard>
              <span>
                🔍 행동 기반 추천 AI를 이용해
                <br />
                {nickname}님에게 꼭 맞는 반려동물을 만나보세요!
              </span>
              <C.Button>추천 받으러 가기</C.Button>
            </C.AiCard>
          </C.Section>
        </C.SectionWrapper>
      </C.ContentArea>

      {/* 하단 고정 입력창 */}
      <C.InputWrapper>
        <C.InputArea>
          <C.ChatInput placeholder="무엇이든 물어보세요." />
          <C.SearchIcon>
            <img src={search} style={{ width: "20px", height: "20px" }} />
          </C.SearchIcon>
        </C.InputArea>

        <C.MicInput>
          <img src={mic} style={{ width: "15px", height: "20px" }} />
        </C.MicInput>
      </C.InputWrapper>
    </C.Container>
  );
}
