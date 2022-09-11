import React from "react";
import apex from "../../Resources/apex.jpg";
import apexMusic from "../../Resources/Apex.mp3";
import Logo from "../../Resources/black2.png";
import eft from "../../Resources/eft.jpg";
import eftMusic from "../../Resources/eft.mp3";
import valo from "../../Resources/valo.mp3";
import wallPaper from "../../Resources/valo.png";
import styles from "./style";

const {
  StyledDiv,
  StyledImg,
  StyledText,
  StyledText2,
  StyledImg2,
  StyledImg3,
  TetrisBoard
  // RedBlock,
} = styles;

interface Props {}

const Home: React.FC<Props> = props => {
  const [musicName, setMusicName] = React.useState("");
  const [flug, setflug] = React.useState(false);
  const interval = React.useRef<ReturnType<typeof setInterval>>();
  const [texta, setText] = React.useState<number>(0);
  const valoUseRef = React.useRef<HTMLAudioElement>(null);

  // window.onhashchange = (ev: HashChangeEvent) => {
  //   // 前回のURLに#を含んでいない場合、rootURL -> rootURL/#/ のようなhase-router遷移である
  //   if (ev.oldURL.includes("#")) {
  //     props.actions.init();
  //   }
  // };

  // React.useEffect(() => {
  //   props.actions.init();
  // }, []);

  let cnt = 0;

  console.log(texta);
  const ko = () => {
    if (!flug) {
      setflug(true);
      interval.current = setInterval(() => {
        cnt = cnt - 1;
        setText(texta + 1);
        if (texta === 3) {
          if (interval.current) {
            clearInterval(interval.current);
            console.log("clearInterval", texta);
          }
        }
        console.log("SSSSS", texta, cnt);
      }, 1000);
    }

    return (
      <>
        <div style={{ display: texta === 0 ? "inherit" : "none" }}>TIME1</div>
        <div style={{ display: texta === 1 ? "inherit" : "none" }}>TIME2</div>
        <div style={{ display: texta === 2 ? "inherit" : "none" }}>TIME3</div>
      </>
    );
  };

  return (
    <>
      <div>
        <StyledImg2 src={wallPaper} />
        <StyledDiv>
          <StyledText>iss □□□.</StyledText>
          <StyledText2>
            <div>is</div>
            <div>Man.</div>
          </StyledText2>
          <StyledImg src={Logo} />
        </StyledDiv>
      </div>
      <div>01.valorant</div>
      <StyledImg3
        src={wallPaper}
        onClick={() => {
          if (valoUseRef.current?.paused || musicName !== "valo") {
            valoUseRef.current!.src = valo;
            valoUseRef.current?.play();
            setMusicName("valo");
            valoUseRef.current!.muted = false;
          } else {
            valoUseRef.current!.muted = true;
            valoUseRef.current?.pause();
            valoUseRef.current!.currentTime = 0;
          }
        }}
      />
      <audio ref={valoUseRef} muted />
      <StyledImg3
        src={eft}
        onClick={() => {
          if (valoUseRef.current?.paused || musicName !== "eft") {
            valoUseRef.current!.src = eftMusic;
            valoUseRef.current?.play();
            setMusicName("eft");
            valoUseRef.current!.muted = false;
          } else {
            valoUseRef.current!.muted = true;
            valoUseRef.current?.pause();
            valoUseRef.current!.currentTime = 0;
          }
        }}
      />
      <StyledImg3
        src={apex}
        onClick={() => {
          if (valoUseRef.current?.paused || musicName !== "apex") {
            valoUseRef.current!.src = apexMusic;
            valoUseRef.current?.play();
            setMusicName("apex");
            valoUseRef.current!.muted = false;
          } else {
            valoUseRef.current!.muted = true;
            valoUseRef.current?.pause();
            valoUseRef.current!.currentTime = 0;
          }
        }}
      />

      <div>{ko()}</div>
      <div>02.ChelsessssaFC</div>
      <div>03.APEX</div>
      <div>04.TETRIS</div>
      <TetrisBoard>{/* <RedBlock /> */}</TetrisBoard>
    </>
  );
};

export default Home;
