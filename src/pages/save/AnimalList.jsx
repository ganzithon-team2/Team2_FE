//유기동물 보러가기
import React, { useState } from "react";
import * as A from "../../styles/StyledAnimal";
import BottomCard from "../main/Component/BottomCard";
import { mock } from "../main/Component/mockData";

const AnimalList = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const tabList = [
    { key: "all", label: "전체" },
    { key: "dog", label: "강아지" },
    { key: "cat", label: "고양이" },
  ];

  const filterData =
    selectedTab === "all"
      ? mock
      : mock.filter((item) =>
          selectedTab === "dog"
            ? item.animalTypeName === "개"
            : item.animalTypeName === "고양이"
        );
  return (
    <A.Container>
      <A.Box>
        {/* 탭바 */}
        <A.TapBar>
          {tabList.map((tab) => {
            return (
              <A.TapName
                key={tab.key}
                $active={selectedTab === tab.key}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.label}
              </A.TapName>
            );
          })}
        </A.TapBar>
        <BottomCard data={filterData} />
      </A.Box>
    </A.Container>
  );
};

export default AnimalList;
