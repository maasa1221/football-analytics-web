import styled from "styled-components";
const LogoCanvasWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const LogoCanvas = styled.canvas`
  padding-top: 200px;
  width: 800px;
  @keyframes open-keyanime1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: open-keyanime1 4s infinite;
`;
const LoadingCanvas = styled.canvas`
  margin-top: -180px;
  position: fixed;
  @keyframes open-keyanime2 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: open-keyanime2 4s linear infinite;
`;
const LoadingText = styled.div`
  position: fixed;
  padding: 0 10px;
  font-size: 35px;
  font-weight: bold;
  font-family: Bahnschrift, sans-serif;
  background-color: #e2e2e2ee;
  white-space: nowrap;
  overflow: hidden;
  @keyframes open-keyanime3 {
    0% {
      width: 0;
    }
    100% {
      width: 0;
    }
  }
  animation-fill-mode: backwards;
  animation: open-keyanime3 0.2s backwards;
`;
const MenuWrapper = styled.div`
  margin-top: -180px;
  position: fixed;
  width: 100%;
  display: flex;
`;
const LeftMenuWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 0;
`;
const RightMenuWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;
const MenuOption = styled.div`
  padding: 0 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: Bahnschrift, sans-serif;
  background-color: #e2e2e2ee;
  white-space: nowrap;
  margin-bottom: 10px;
`;
export default {
  LogoCanvasWrapper,
  LogoCanvas,
  LoadingCanvas,
  LoadingText,
  MenuWrapper,
  LeftMenuWrapper,
  RightMenuWrapper,
  MenuOption
};
