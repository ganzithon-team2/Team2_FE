import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Container = styled.div``;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 93px;
  height: 12.467px;
  flex-shrink: 0;
`;

const LikeBtn = styled.img`
  width: 30px;
  cursor: pointer;
`;

const BackBtn = styled.img`
  cursor: pointer;
`;

const FilterBtn = styled.img`
  width: 22px;
  cursor: pointer;
`;

const DetailSearch = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: 0.2px;
  margin-right: 45%;
`;

const Header = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFilterPage = location.pathname.startsWith("/Filter");
  return (
    <Container>
      <Box>
        {/* 헤어 로고버전 */}
        {type === "logo" && (
          <Logo src="../images/components/logo.svg" alt="logo" />
        )}

        {type === "logo" && (
          <FilterBtn
            src="../images/components/filter.svg"
            alt="filter"
            onClick={() => navigate("/Filter")}
          />
        )}
        {/* 헤더 back 버전 */}
        {type === "back" && (
          <BackBtn
            src="../images/components/Backbtn.svg"
            alt="Backbtn"
            onClick={() => navigate("/MainPage")}
          />
        )}
        {type === "back" && (
          <LikeBtn src="../images/components/LikeBtn.svg" alt="LikeBtn" />
        )}
        {/* 헤더 isOnlyBack  필터헤더 버전 */}
        {type === "onlyBack" && (
          <BackBtn
            src="../images/components/Backbtn.svg"
            alt="Backbtn"
            onClick={() => navigate(-1)}
          />
        )}
        {isFilterPage && <DetailSearch>상세페이지</DetailSearch>}
      </Box>
    </Container>
  );
};

export default Header;
