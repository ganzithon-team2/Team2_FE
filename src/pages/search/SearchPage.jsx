import React from "react";
import * as S from "../../styles/StyledSearch";
import BottomCard from "../main/Component/BottomCard";
import { useLocation } from "react-router-dom";
import { mock } from "../main/Component/mockData";
// import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SearchPage = () => {
  const { state } = useLocation();
  // const [data, setData] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);

  // // 페이징
  // const [page, setPage] = useState(0);
  // const size = 20;
  // const fetchAnimals = async () => {
  //     try {
  //       const res = await axios.get(`${API_BASE_URL}/api/animals`, {
  //         params: {
  //           startDate: state.startDate || null,
  //           endDate: state.endDate || null,
  //           province: state.province || null,
  //           city: state.city || null,
  //           animalType: state.animalType || null,
  //           sex: state.sex || null,
  //           neuterStatus: state.neuterStatus || null,
  //           onlyProtecting: state.onlyProtecting,
  //           isLatest: state.isLatest,

  //           page,
  //           size,
  //           sort: "foundDate,desc",
  //         },
  //       });

  //       setData(res.data.data.content);
  //       setTotalPages(res.data.data.totalPages);
  //     } catch (e) {
  //       console.log("검색 실패:", e);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchAnimals();
  //   }, [page]);

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
        {filteredData.map((item) => (
          <BottomCard key={item.desertionNo} item={item} />
        ))}
      </S.Box>
    </S.Container>
  );
};

export default SearchPage;
