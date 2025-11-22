import React, { useEffect, useRef } from "react";
import axios from "axios";
import InputBar from "./InputBar";
import * as C from "../../styles/StyledChat";
import sparkle from "../../../public/images/chatbot/sparkle-icon.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function ChatPage({
  messages,
  setMessages,
  inputValue,
  setInputValue,
  autoSend,
}) {
  const lastAutoSentRef = useRef(null);
  const listRef = useRef(null);

  const sendMessage = async (text) => {
    if (!text || !text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    try {
      const accessToken = localStorage.getItem("access");

      const res = await axios.post(
        `${API_BASE_URL}/api/rag/query`,
        { query: text },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: res.data.data.answer,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg = {
        id: Date.now() + 2,
        sender: "bot",
        text: "오류가 발생했어요. 다시 시도해주세요 😭",
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  useEffect(() => {
    if (!autoSend || !autoSend.trim()) return;
    if (lastAutoSentRef.current === autoSend) return;

    lastAutoSentRef.current = autoSend;
    sendMessage(autoSend);
  }, [autoSend]);

  useEffect(() => {
    if (!listRef.current) return;
    const bottomOffset = 120; // 필요하면 100~150 사이 조정 가능
    listRef.current.scrollTop = listRef.current.scrollHeight + bottomOffset;
  }, [messages]);

  return (
    <C.ChatContainer
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
      }}
    >
      {/* 메시지가 들어갈 영역 – InputBar 높이를 제외한 영역 */}
      <div
        style={{
          height: "calc(100% - 80px)", // ← InputBar 실제 높이로 설정
          overflowY: "auto",
        }}
        ref={listRef}
      >
        <C.MessageList>
          {messages.map((msg) => {
            const isMine = msg.sender === "user";
            return (
              <C.MessageGroup key={msg.id} $isMine={isMine}>
                <C.SenderName $isMine={isMine}>
                  {isMine ? "ME" : "보니"}
                </C.SenderName>

                <C.BubbleRow $isMine={isMine}>
                  <C.MessageBubble $isMine={isMine}>
                    {!isMine && (
                      <img
                        src={sparkle}
                        alt="sparkle"
                        style={{
                          width: 20,
                          height: 20,
                          marginRight: 6,
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                      />
                    )}
                    <C.MessageText>{msg.text}</C.MessageText>
                  </C.MessageBubble>
                </C.BubbleRow>
              </C.MessageGroup>
            );
          })}
        </C.MessageList>
      </div>

      {/* 아래 고정 InputBar */}
      <C.IntroInputArea>
        <InputBar
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSend={sendMessage}
        />
      </C.IntroInputArea>
    </C.ChatContainer>
  );
}
