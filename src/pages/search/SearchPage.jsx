import React from "react";
import * as S from "../../styles/StyledSearch";
import BottomCard from "../main/Component/BottomCard";
import { useLocation } from "react-router-dom";
import { mock } from "../main/Component/mockData";

const SearchPage = () => {
  const { state } = useLocation();

  const { startDate, endDate, checked, area, city, type, sex, neuter } =
    state || {};

  const filteredData = mock.filter((item) => {
    console.log("---- CHECKING ITEM ----");
    console.log("province:", item.province);
    console.log("city:", item.city);
    console.log("type:", item.animalTypeName);
    console.log("sex:", item.sex);
    console.log("neuter:", item.neuterStatus);
    console.log("status:", item.status);
    console.log(
      "start:",
      item.noticeStartDate,
      ">= ",
      startDate?.replace(/-/g, "")
    );
    console.log("end:", item.noticeEndDate, "<= ", endDate?.replace(/-/g, ""));
    // 지역 조건
    const matchProvince =
      area?.value && area.value !== "all"
        ? item.province.includes(area.label)
        : true;

    const matchCity =
      city?.value && area?.value !== "all"
        ? item.city.includes(city.label)
        : true;

    // 축종
    const matchType =
      type?.value !== "all" ? item.animalTypeName === type.label : true;

    // 성별
    const matchSex = sex?.value !== "all" ? item.sex === sex.label : true;

    // 중성화
    const matchNeuter =
      neuter?.value !== "all" ? item.neuterStatus.includes(neuter.label) : true;

    // 보호중
    const matchProtection = checked ? item.status === "보호중" : true;

    // 날짜 범위
    const start = startDate?.replace(/-/g, "");
    const end = endDate?.replace(/-/g, "");

    const matchStart = start ? item.noticeStartDate >= start : true;
    const matchEnd = end ? item.noticeEndDate <= end : true;

    return (
      matchProvince &&
      matchCity &&
      matchType &&
      matchSex &&
      matchNeuter &&
      matchProtection &&
      matchStart &&
      matchEnd
    );
  });

  console.log("STATE:", state);
  console.log("MOCK:", mock);
  console.log("FILTERED:", filteredData);

  return (
    <S.Container>
      <S.Box>
        <BottomCard data={filteredData} />
      </S.Box>
    </S.Container>
  );
};

export default SearchPage;
