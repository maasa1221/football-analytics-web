import React from "react";
import styles from "./style";

const SC = styles;

interface Props {}

const Gourd: React.FC<Props> = () => {
  window.onload = function () {
    const logoCanvas = document.getElementById("logoCanvas");
    const logoCtx = logoCanvas!.getContext("2d");
    const centerX = 500;
    const startY = 0;
    const lineWidth = 15;
    logoCtx.shadowBlur = 4;
    logoCtx.shadowColor = "#9d9d9ded";
    logoCtx.strokeStyle = "#e2e2e2ee";
    logoCtx.lineWidth = lineWidth;
    logoCtx.beginPath();
    logoCtx.moveTo(centerX, startY);
    logoCtx.lineTo(centerX, startY + 30);
    logoCtx.moveTo(centerX + 80, startY + 110);
    logoCtx.arc(centerX, startY + 110, 80, 0, Math.PI, true);
    logoCtx.moveTo(centerX + 50, startY + 110);
    logoCtx.arc(centerX, startY + 110, 50, 0, 2 * Math.PI);
    logoCtx.moveTo(centerX - 50, startY + 110);
    logoCtx.lineTo(centerX + 50, startY + 110);
    logoCtx.moveTo(centerX + 50, startY + 210);
    logoCtx.arc(centerX, startY + 210, 50, 0, 2 * Math.PI);
    logoCtx.moveTo(centerX - 50, startY + 210);
    logoCtx.lineTo(centerX + 50, startY + 210);
    logoCtx.stroke();
    const loadingCanvas = document.getElementById("loadingCanvas");
    const loadingCtx = loadingCanvas.getContext("2d");
    const centerX2 = 500;
    const startY2 = 500;
    const lineWidth2 = 15;
    loadingCtx.shadowBlur = 4;
    loadingCtx.shadowColor = "#e2e2e2ee";
    loadingCtx.strokeStyle = "#807f7f51";
    loadingCtx.lineWidth = 30;
    loadingCtx.beginPath();
    loadingCtx.arc(centerX2, startY2, 220, 0, Math.PI, true);
    loadingCtx.stroke();
    loadingCtx.strokeStyle = "#e2e2e2ee";
    loadingCtx.lineWidth = lineWidth2;
    loadingCtx.beginPath();
    loadingCtx.arc(centerX2, startY2, 200, 0, Math.PI + 30, true);
    loadingCtx.stroke();
    loadingCtx.strokeStyle = "#b2b2b293";
    loadingCtx.lineWidth = 25;
    loadingCtx.beginPath();
    loadingCtx.arc(centerX2, startY2, 180, 0, Math.PI - 30, false);
    loadingCtx.stroke();
    loadingCtx.strokeStyle = "#e2e2e2ee";
    loadingCtx.lineWidth = 10;
    loadingCtx.beginPath();
    loadingCtx.arc(centerX2, startY2, 480, 0, 2 * Math.PI);
    loadingCtx.stroke();
  };

  return (
    <>
      <SC.LogoCanvasWrapper>
        <SC.LogoCanvas id="logoCanvas" width="1000" height="300" />
        <SC.LoadingCanvas id="loadingCanvas" width="1000" height="1000" />
        {/* <SC.LoadingText>WELCOME TO MR.GORDON</SC.LoadingText> */}
      </SC.LogoCanvasWrapper>
      <SC.MenuWrapper>
        <SC.LeftMenuWrapper>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
        </SC.LeftMenuWrapper>
        <SC.RightMenuWrapper>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
          <SC.MenuOption>!Not implemented</SC.MenuOption>
        </SC.RightMenuWrapper>
      </SC.MenuWrapper>
    </>
  );
};
export default Gourd;
