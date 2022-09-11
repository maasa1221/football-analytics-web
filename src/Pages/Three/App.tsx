import React from "react";
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

const Three: React.FC<Props> = props => {
  // const [musicName, setMusicName] = React.useState("");
  // const [flug, setflug] = React.useState(false);
  // const interval = React.useRef<ReturnType<typeof setInterval>>();
  // const [texta, setText] = React.useState<number>(0);
  // const valoUseRef = React.useRef<HTMLAudioElement>(null);

  // window.onhashchange = (ev: HashChangeEvent) => {
  //   // 前回のURLに#を含んでいない場合、rootURL -> rootURL/#/ のようなhase-router遷移である
  //   if (ev.oldURL.includes("#")) {
  //     props.actions.init();
  //   }
  // };

  // React.useEffect(() => {
  //   props.actions.init();
  // }, []);

  // let cnt = 0;

  // console.log(texta);
  // const ko = () => {
  //   if (!flug) {
  //     setflug(true);
  //     interval.current = setInterval(() => {
  //       cnt = cnt - 1;
  //       setText(texta + 1);
  //       if (texta === 3) {
  //         if (interval.current) {
  //           clearInterval(interval.current);
  //           console.log("clearInterval", texta);
  //         }
  //       }
  //       console.log("SSSSS", texta, cnt);
  //     }, 1000);
  //   }

  //   return (
  //     <>
  //       <div style={{ display: texta === 0 ? "inherit" : "none" }}>TIME1</div>
  //       <div style={{ display: texta === 1 ? "inherit" : "none" }}>TIME2</div>
  //       <div style={{ display: texta === 2 ? "inherit" : "none" }}>TIME3</div>
  //     </>
  //   );
  // };

  return <div>a</div>;
};

export default Three;
