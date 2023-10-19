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
            - 앱의 UI/UX 디자인, 프론트엔드 개발 담당
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - React Native, Nest.js, Firebase
          </MyText>
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={18}>
            <A href="https://github.com/Gabul99/CS350_CSN"><GitHub className="gitHub"></GitHub><div className="linkLogo"/></A>
            <A href="https://www.figma.com/file/Fhz4OcD9Igjxj9KUm6MY4o/CS350_Club?type=design&node-id=492%3A488&mode=design&t=Mix6Ix3cMElUqguj-1"><GitHub className="figma"></GitHub><div className="linkLogo fig"/></A>
            <A href="https://youtu.be/rPf9PiCmifQ"><GitHub className="link"></GitHub><div className="linkText">DEMO</div></A>
          </MyText>
        </ProjBox>
        <ProjBox title="PLOG" subtitle="2023.09 ~ 2023.10">
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 플로깅 데이터를 합산해 맵으로 보여주는 웹사이트
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 기능이 완성된 상태에서 UI/UX 디자인, 추가
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - React, Firebase
          </MyText>
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={18}>
            <A href="https://www.figma.com/proto/mdbOCBkYIRGUABxTopFHkN/PLOG?page-id=&type=design&node-id=1-3&viewport=448%2C376%2C0.56&t=HbtEcZHQsOigo5Dk-1&scaling=min-zoom&starting-point-node-id=1%3A3&mode=design"><GitHub className="figma"></GitHub><div className="linkLogo fig"/></A>
            <A href="https://plog-project-jade.vercel.app/"><GitHub className="link"></GitHub><div className="linkText">VISIT</div></A>
          </MyText>
        </ProjBox>
        <ProjBox title="KSCIA" subtitle="2023.09">
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 척수장애인 협회 관리앱
          </MyText>
          <MyText fontType={FontType.LIGHT} color={Colors.WHITE} fontSize={18} isPretendard={1}>
            - 앱의 UI/UX 디자인
          </MyText>
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={18}>
            <A href="https://www.figma.com/proto/wwYGAc4PeE7qjX3Gy7dLQk/KSCIA---Design?page-id=0%3A1&type=design&node-id=26-6237&viewport=-62%2C327%2C0.34&t=yL5qmIzdWidFVsPJ-1&scaling=scale-down&starting-point-node-id=26%3A6237&show-proto-sidebar=1&mode=design"><GitHub className="figma"></GitHub><div className="linkLogo fig"/></A>
          </MyText>
        </ProjBox>
      </Box>
    </OneScreen>
  );
}