import React, { useState, useEffect } from "react";
import * as R from "../../styles/StyledRecommend";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosInstance";

const PreferenceAnalysis = () => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");

  const [summary1, setSummary1] = useState(""); // data1
  const [summary2, setSummary2] = useState(""); // data2
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          console.warn("userId가 없습니다. 로그인 후 이용해주세요.");
          setLoading(false);
          return;
        }

        const res = await API.get(`/api/recommendations/summary`, {
          params: { userId },
        });

        console.log("요약 정보 응답:", res.data);

        if (res.data?.success && res.data?.data) {
          setSummary1(res.data.data.data1 || "");
          setSummary2(res.data.data.data2 || "");
        } else {
          console.warn("요약 정보 형식이 올바르지 않습니다.");
        }
      } catch (err) {
        console.error("요약 정보 API 호출 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return (
    <R.Container>
      <R.Box>
        {/* 상단 타이틀 */}
        <R.PageTitle>{nickname}님의 취향을 분석해보았어요!</R.PageTitle>

        {/* 대표 아이콘 */}
        <R.Illustration src="/images/components/likedLogo.svg" />

        {/* 분석 완료 카드 */}
        <R.SummaryCard>
          <R.Title>분석완료!</R.Title>
          <R.InfoText>
            {loading
              ? "취향 분석을 불러오는 중입니다..."
              : summary1 || "아직 분석 결과가 없습니다."}
          </R.InfoText>
        </R.SummaryCard>

        {/* 요약 섹션 */}
        <R.SubHeading>나의 반려동물 취향 요약</R.SubHeading>

        <R.InfoList>
          {loading ? (
            <R.InfoItem>불러오는 중입니다...</R.InfoItem>
          ) : summary2 ? (
            summary2
              .split("\n")
              .map((line, idx) => <R.InfoItem key={idx}>{line}</R.InfoItem>)
          ) : (
            <R.InfoItem>요약 정보가 없습니다.</R.InfoItem>
          )}
        </R.InfoList>

        {/* 이동 버튼 */}
        <R.GotoMainBtn onClick={() => navigate("/AIRecommList")}>
          AI 추천 동물 만나러 가기
          <img src="/images/components/rightBtn.svg" />
        </R.GotoMainBtn>

        <R.BottomSpacer />
      </R.Box>
    </R.Container>
  );
};

export default PreferenceAnalysis;
