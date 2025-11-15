import React from "react";
import {
  ImageWrapper,
  WelcomeWrapper,
  WelcomeName,
  WelcomeSub,
  GoToMainButton,
} from "../../styles/StyledAuth";
import ribbonPuppys from "/images/auth/RibbonPuppys.png";
import rightImg from "/images/auth/chevron-right.png";

const WelcomePage = () => {
  return (
    <div>
      <ImageWrapper>
        <img
          src={ribbonPuppys}
          style={{
            width: "246px",
          }}
        />
      </ImageWrapper>
      <WelcomeWrapper>
        <WelcomeName>리본님</WelcomeName>
        <WelcomeSub>가입을 환영합니다</WelcomeSub>
        <GoToMainButton>
          🐾 동물 보러가기
          <img src={rightImg} style={{ width: "22px" }} />
        </GoToMainButton>
      </WelcomeWrapper>
    </div>
  );
};

export default WelcomePage;
