import React from "react";
import { ActionDispatcher } from "./Container";
import Logo from "../../Resources/black2.png";
import wallPaper from "../../Resources/valo.png";
import styles from "./style";

const { StyledDiv, StyledImg, StyledText, StyledText2, StyledImg2 } = styles;

interface Props {
  actions: ActionDispatcher;
}

export const App: React.FC<Props> = props => {
  window.onhashchange = (ev: HashChangeEvent) => {
    // 前回のURLに#を含んでいない場合、rootURL -> rootURL/#/ のようなhase-router遷移である
    if (ev.oldURL.includes("#")) {
      props.actions.init();
    }
  };

  React.useEffect(() => {
    props.actions.init();
  }, []);

  return (
    <>
      <div>
        <StyledImg2 src={wallPaper} />
        <StyledDiv>
          <StyledText>is □□□.</StyledText>
          <StyledText2>
            <div>is</div>
            <div>Man.</div>
          </StyledText2>
          <StyledImg src={Logo} />
        </StyledDiv>
      </div>
      <div>01.valorant</div>
      <div>02.ChelseaFC</div>
      <div>03.APEX</div>
    </>
  );
};
