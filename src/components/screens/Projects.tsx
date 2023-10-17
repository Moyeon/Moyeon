import React from "react";
import styled from "styled-components";
import MyText, {FontType} from "../styles/MyText";
import { Colors } from "../styles/Colors";
import Stick from "../styles/Stick";

const OneScreen = styled.div`
  width: 100vw;
  padding: 0 0 4em 0;
`;

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1240px) {
    padding: 0 20px;
    box-sizing: border-box;
  }
`;

export default function Projects() {
  return (
    <OneScreen id="PROJECTS" style={{backgroundColor: "var(--DARKBLUE)"}}>
      <Stick color={Colors.DARKBLUE}></Stick>
      <Box>
        <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={32}>
          PROJECTS |
        </MyText>
        <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={20} isPretendard={1}>
          Personal Quiz Website : https://id311.vercel.app/ 3인 프로젝트, React, Next.js 기반
        </MyText>
        <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={20} isPretendard={1}>
          ODOKWAN : 4인 프로젝트, 디자인 담당, 클라이언트 롤, 기획
        </MyText>
        <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={20} isPretendard={1}>
          Club Social Network : https://www.youtube.com/watch?v=rPf9PiCmifQ 프론트엔드 개발자 & UI 디자이너
        </MyText>
        <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={20} isPretendard={1}>
          PLOG : https://plog-project-jade.vercel.app/ UI 디자이너 & 프론트엔드 적용
        </MyText>
        {/* <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width={800} height={450} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmdbOCBkYIRGUABxTopFHkN%2FPLOG%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-3%26viewport%3D448%252C376%252C0.56%26t%3DenquB28bMCSbNI0m-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A3%26mode%3Ddesign" allowFullScreen /> */}
        <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={20} isPretendard={1}>
          KSCIA : UI 디자이너
        </MyText>
        
      </Box>
    </OneScreen>
  );
}