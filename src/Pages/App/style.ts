import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 65px;
  position: absolute;
  top: 9px;
`;

const StyledImg = styled.img`
  width: 70px;
  height: 65px;
  background-color: white;
  position: relative;
`;

const StyledText = styled.div`
  font-family: Hiragino Kaku Gothic ProN;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
  height: 30px;
  position: absolute;
  animation: slide 0.5s linear;
  animation-fill-mode: forwards;
  white-space: nowrap;

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateX(0px);
    }

    100% {
      opacity: 100;
      transform: translateX(85px);
    }
  }
`;

const StyledText2 = styled.div`
  font-family: Hiragino Kaku Gothic ProN;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
  height: 30px;
  position: absolute;
  bottom: -6px;
  animation: slide2 0.5s linear;
  animation-fill-mode: forwards;

  @keyframes slide2 {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }

    100% {
      opacity: 100;
      transform: translateY(40px);
    }
  }

  & > :nth-child(2) {
    margin-top: 8px;
  }
`;

const StyledImg2 = styled.img`
  width: 100%;
  min-width: 1000px;
  position: relative;
`;

export default { StyledDiv, StyledImg, StyledText, StyledText2, StyledImg2 };
