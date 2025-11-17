import React, { useState, useEffect } from "react";
import * as F from "../../styles/StyledFilter";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const regionData = {
  Seoul: ["강남구", "마포구", "서초구"],
  Suwon: ["장안구", "팔달구", "영통구"],
  Pusan: ["해운대구", "수영구", "중구"],
};

const filterConfig = {
  area: [
    { value: "all", label: "전체" },
    { value: "Seoul", label: "서울특별시" },
    { value: "Suwon", label: "수원" },
    { value: "Pusan", label: "부산" },
  ],
  type: [
    { value: "all", label: "전체" },
    { value: "dog", label: "개" },
    { value: "cat", label: "고양이" },
  ],
  sex: [
    { value: "all", label: "전체" },
    { value: "female", label: "암컷" },
    { value: "male", label: "수컷" },
  ],
  neuter: [
    { value: "all", label: "전체" },
    { value: "yes", label: "중성화" },
    { value: "no", label: "중성화 안 함" },
  ],
};
const commonFilterList = [
  { key: "type", title: "축종 설정" },
  { key: "sex", title: "성별 설정" },
  { key: "neuter", title: "중성화" },
];
const Filter = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    area: filterConfig.area[0],
    city: null,
    type: filterConfig.type[0],
    sex: filterConfig.sex[0],
    neuter: filterConfig.neuter[0],
  });

  const [cities, setCities] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [checked, setChecked] = useState(false);

  // 기본 날짜: 오늘 ~ 한 달 뒤
  useEffect(() => {
    const today = new Date();
    const end = today.toISOString().slice(0, 10);

    const past = new Date();
    past.setMonth(past.getMonth() - 3);
    const start = past.toISOString().slice(0, 10);

    setStartDate(start);
    setEndDate(end);
  }, []);

  // 지역 변경 시 시/군/구 옵션 세팅
  const handleAreaChange = (v) => {
    setSelected((prev) => ({
      ...prev,
      area: v,
      city: null,
    }));
    setCities(regionData[v.value] || []);
  };

  const handleCityChange = (v) => {
    setSelected((prev) => ({
      ...prev,
      city: v,
    }));
  };

  const goSearch = () => {
    navigate("/SearchPage", {
      state: {
        startDate,
        endDate,
        checked,
        ...selected,
      },
    });

    //    navigate("/SearchPage", {
    //   state: {
    //     startDate: startDate.replace(/-/g, ""), // yyyy-MM-dd → yyyyMMdd
    //     endDate: endDate.replace(/-/g, ""),

    //     province: selected.area?.label || null,
    //     city: selected.city?.label || null,

    //     animalType:
    //       selected.type?.value === "dog"
    //         ? "DOG"
    //         : selected.type?.value === "cat"
    //         ? "CAT"
    //         : null,

    //     sex:
    //       selected.sex?.label === "암컷"
    //         ? "FEMALE"
    //         : selected.sex?.label === "수컷"
    //         ? "MALE"
    //         : "UNKNOWN",

    //     neuterStatus:
    //       selected.neuter?.label === "중성화"
    //         ? "YES"
    //         : selected.neuter?.label === "중성화 안 함"
    //         ? "NO"
    //         : "UNKNOWN",

    //     onlyProtecting: checked,
    //     isLatest: true,
    //   },
    // });
  };

  return (
    <F.Container>
      <F.Box>
        <F.Toptitle>
          <F.TopText>검색조건 설정</F.TopText>
        </F.Toptitle>

        <F.FilterBox>
          {/* 기간 설정 */}
          <F.Filter>
            <F.Subtitle>기간 설정</F.Subtitle>
            <F.PeriodBox>
              <F.DateInput
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span>~</span>
              <F.DateInput
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </F.PeriodBox>
          </F.Filter>

          {/* 지역 설정 */}
          <F.Filter>
            <F.Subtitle>지역 설정</F.Subtitle>
            <F.SelectWrap>
              <F.StyledSelect
                classNamePrefix="react-select"
                options={filterConfig.area.filter((op) => op.value !== "all")}
                placeholder="시/도"
                onChange={handleAreaChange}
              />

              <F.StyledSelect
                classNamePrefix="react-select"
                placeholder="시/군/구"
                isDisabled={!selected.area || selected.area.value === "all"}
                options={cities.map((c) => ({ value: c, label: c }))}
                onChange={handleCityChange}
                value={selected.city}
              />
            </F.SelectWrap>
          </F.Filter>

          {/* 축종 / 성별 / 중성화 */}
          {commonFilterList.map((filter) => (
            <F.Filter key={filter.key}>
              <F.Subtitle>{filter.title}</F.Subtitle>
              <F.StyledSelect
                classNamePrefix="react-select"
                options={filterConfig[filter.key]}
                defaultValue={filterConfig[filter.key][0]}
                onChange={(v) =>
                  setSelected((prev) => ({
                    ...prev,
                    [filter.key]: v,
                  }))
                }
              />
            </F.Filter>
          ))}

          {/* 보호중만 */}
          <F.StatusFilter>
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <F.StatusText>보호중만 보기</F.StatusText>
          </F.StatusFilter>
        </F.FilterBox>

        <F.SearchBtn onClick={goSearch}>검색하기</F.SearchBtn>
      </F.Box>
    </F.Container>
  );
};

export default Filter;
