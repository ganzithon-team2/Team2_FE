import React from "react";
import * as B from "./StyledBottomCard";
import { useNavigate } from "react-router-dom";

const BottomCard = ({ data }) => {
  const navigate = useNavigate();

  // 버튼 클릭 시 상세페이지로 이동
  //   const handleClick = () => {
  //     navigate(`/detail/${item.desertionNo}`);
  //   };

  return (
    <B.Container>
      {data.map((item, idx) => (
        <B.Box
          key={`${item.desertionNo}-${idx}`}
          onClick={() => navigate(`/detail/${item.desertionNo}`)}
        >
          <B.Img src={item.images} alt={item.breedName} />
          <B.Code>
            보호번호 <br />
            {item.desertionNo}
          </B.Code>
          <B.Info>
            {item.breedName} {item.age} {item.sex}
          </B.Info>
        </B.Box>
      ))}
    </B.Container>
  );
};

export default BottomCard;
