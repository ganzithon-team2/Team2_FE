import React, { useState, useEffect, useCallback } from "react";
import * as S from "../../styles/StyledSearch";
import BottomCard from "../main/Component/BottomCard";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import API from "../../api/axiosInstance";

const SearchPage = () => {
  const { state } = useLocation();

  const { startDate, endDate, checked, area, city, type, sex, neuter } =
    state || {};

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const size = 20;
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const fetchAnimals = useCallback(
    async (pageNum) => {
      try {
        setIsFetching(true);

        const res = await API.get("/api/animals", {
          params: {
            startDate: startDate?.replace(/-/g, ""),
            endDate: endDate?.replace(/-/g, ""),

            province: area?.label || null,
            city: city?.label || null,

            animalType:
              type?.value === "dog"
                ? "DOG"
                : type?.value === "cat"
                ? "CAT"
                : null,

            sex:
              sex?.label === "암컷"
                ? "FEMALE"
                : sex?.label === "수컷"
                ? "MALE"
                : null,

            neuterStatus:
              neuter?.label === "중성화"
                ? "YES"
                : neuter?.label === "중성화 안 함"
                ? "NO"
                : null,

            onlyProtecting: checked || false,
            isLatest: true,

            page: pageNum,
            size: size,
          },
        });

        const result = res.data.data;

        if (pageNum === 0) {
          setData(result.content);
        } else {
          setData((prev) => [...prev, ...result.content]);
        }

        setTotalPages(result.totalPages);
      } catch (err) {
        console.error("검색 결과 조회 실패:", err);
      } finally {
        setLoading(false);
        setIsFetching(false);
      }
    },
    [startDate, endDate, area, city, type, sex, neuter, checked]
  );

  useEffect(() => {
    setPage(0);
    fetchAnimals(0);
  }, [startDate, endDate, area, city, type, sex, neuter, checked]);

  const handleScroll = (e) => {
    const target = e.target;
    const bottom =
      target.scrollTop + target.clientHeight >= target.scrollHeight - 10;

    if (bottom && !isFetching && page + 1 < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (page !== 0) {
      fetchAnimals(page);
    }
  }, [page]);

  return (
    <S.Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <S.Box onScroll={handleScroll}>
          {data.length === 0 ? (
            <div>검색 결과가 없습니다.</div>
          ) : (
            data.map((item) => (
              <BottomCard key={item.desertionNo} item={item} />
            ))
          )}

          {isFetching && (
            <div style={{ textAlign: "center" }}>불러오는 중...</div>
          )}
        </S.Box>
      )}
    </S.Container>
  );
};

export default SearchPage;
