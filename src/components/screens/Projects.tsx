import React from "react";
import styled from "styled-components";
import MyText, {FontType} from "../styles/MyText";
import { Colors } from "../styles/Colors";
import Stick from "../styles/Stick";
import ProjBox from "../core/ProjectBox";

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

const GitHub = styled.div`
  
`;

const A = styled.a`
  display: inline-block;
`;

const Br = styled.div`
  height: 0.6em;
`;

export default function Projects() {
  return (
    <OneScreen id="PROJECTS" style={{backgroundColor: "var(--DARKBLUE)"}}>
      <Stick color={Colors.DARKBLUE}></Stick>
      <Box>
        <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={32}>
          PROJECTS |
        </MyText>
        <Br></Br>
        <ProjBox title="ODokWan" subtitle="2023.03 ~ 2023.04">
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 독서 시간을 기록하고 그에 따른 이미지와 통계를 생성하는 앱
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 5인 프로젝트, 의뢰자 입장에서 프로젝트 작성
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 앱의 UI 담당
          </MyText>
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={18}>
            <A href="https://www.figma.com/proto/Vq8miFw1Ja067gnJLBjhnz/cs350-odokwan?page-id=0%3A1&type=design&node-id=1-2&viewport=46%2C201%2C0.07&t=Hqj1ilU1gKjQagXu-1&scaling=contain&mode=design"><GitHub className="figma"></GitHub><div className="linkLogo fig"/></A>
          </MyText>
        </ProjBox>
        <ProjBox title="Personal Quiz" subtitle="2022.05 ~ 2022.06">
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - Personal Quiz를 생성하고, 코드를 공유해 다른 사람의 퀴즈를 풀 수 있는 웹
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 3인 프로젝트, 디자인 및 프론트엔드 작성
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - React, Next.js, Node.js
          </MyText>
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={18}>
            <A href="https://github.com/yumin-jung/ID311-Final-Project"><GitHub className="gitHub"></GitHub><div className="linkLogo"/></A>
            <A href="https://id311.vercel.app/"><GitHub className="link"></GitHub><div className="linkText">VISIT</div></A>
          </MyText>
        </ProjBox>
        <ProjBox title="CSN" subtitle="2023.03 ~ 2023.06">
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - Club Social Network, 동아리 SNS 앱
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 5인 프로젝트, 개발자 입장에서 의뢰 완수
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 앱의 UI/UX 디자인, 프론트엔드 개발
          </MyText>
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={18}>
            <A href=""><GitHub className="gitHub"></GitHub><div className="linkLogo"/></A>
            <A href="https://www.figma.com/proto/Vq8miFw1Ja067gnJLBjhnz/cs350-odokwan?page-id=0%3A1&type=design&node-id=1-2&viewport=46%2C201%2C0.07&t=Hqj1ilU1gKjQagXu-1&scaling=contain&mode=design"><GitHub className="figma"></GitHub><div className="linkLogo fig"/></A>
            <A href=""><GitHub className="link"></GitHub><div className="linkText">DEMO</div></A>
          </MyText>
        </ProjBox>



        <ProjBox title="Personal Quiz" subtitle="2023.03 ~ 2023.04">
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 독서 시간을 기록하고 그에 따른 이미지와 통계를 생성하는 앱
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 5인 프로젝트, 개발자 입장에서 의뢰 작성
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 앱의 UI 담당
          </MyText>
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={18}>
            <A href=""><GitHub className="gitHub"></GitHub><div className="linkLogo"/></A>
            <A href="https://www.figma.com/proto/Vq8miFw1Ja067gnJLBjhnz/cs350-odokwan?page-id=0%3A1&type=design&node-id=1-2&viewport=46%2C201%2C0.07&t=Hqj1ilU1gKjQagXu-1&scaling=contain&mode=design"><GitHub className="figma"></GitHub><div className="linkLogo fig"/></A>
            <A href=""><GitHub className="link"></GitHub><div className="linkText">VISIT</div></A>
          </MyText>
        </ProjBox>

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