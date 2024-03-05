import React from "react";
import styled from "styled-components";
import MyText, {FontType} from "../styles/MyText";
import { Colors } from "../styles/Colors";
import SkillBox from "../core/SkillBox";
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
  box-sizing: border-box;
  padding: 0 4em;
  @media screen and (max-width: 1240px) {
    
  }
`;

const FlexBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 40px;
  grid-auto-flow: dense;
  margin: 2em 0;
  position: relative;
`;

export default function Skills() {
  return (
    <OneScreen id="SKILLS" style={{backgroundColor: "var(--DARKBLUE)"}}>
      <Stick color={Colors.DARKBLUE}></Stick>
      <Box>
        <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={32}>
          SKILLS |
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={20}>
            CLICK TO VIEW DETAILS
          </MyText>
        </MyText>
        <FlexBox>
          <SkillBox bgcolor={Colors.YELLOW} fontSize={24} title="Java" subtitle="ALGORITHM">
            자료구조 구현 혹은 간단한 문제 풀이에 사용할 수 있습니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.RED} fontSize={30} rowsize={7} title="Javascript" subtitle="WEB DESIGN/GAME" styletext="@media screen and (max-width: 1087px) {grid-column-start: 1; grid-row-start: 1}">
            Vanilla JS를 사용해 복잡한 프론트엔드 구성이 가능합니다. 게임 등 상호작용 가능한 액티브 프로젝트를 주로 제작하였으며, 자바스크립트를 사용한 게임 프로젝트는 KIDS TAB에서 보실 수 있습니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.WHITE} fontSize={32} rowsize={6} title="C/C++" subtitle="ALGORITHM">
            중학생 이상의 프로그래밍 입문자 혹은 Javascript 사용 경험이 있는 학생에게 가르치는 기초적인 프로그래밍 언어입니다.<br/><br/> 간단한 자동화 프로그램부터 올림피아드 문제 풀이까지 진행합니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.CREAM} fontSize={30} rowsize={5} title="Scratch" subtitle="GAME">
            처음으로 코딩을 배우는 초등학교 저학년 학생들을 가르칠 때 사용했습니다. 간단한 클릭 게임부터 Platformer, Maze 등의 다양한 게임을 만들 수 있습니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.WHITE} fontSize={30} rowsize={5} title="HTML/CSS" subtitle="WEB DESIGN" styletext="@media screen and (max-width: 1087px) {grid-column-start: 1; grid-row-start: 8}">
            제작한 프로토타입을 기반으로 반응형 웹사이트를 구성할 수 있습니다. 프로그래밍을 처음 접하는 학생들이 실제 결과물을 바로바로 볼 수 있어 흥미를 갖게 합니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.WHITE} fontSize={30} rowsize={6} title="Python" subtitle="ALGORITHM/GAME" styletext="@media screen and (max-width: 1087px) {grid-column-start: 2; grid-row-start: 5}">
            초등학교 고학년 프로그래밍 입문자에게 가르치는 단순한 문법의 프로그래밍 언어입니다.<br/><br/>Python을 사용한 게임 개발, 자료 프로세스에 익숙합니다. 디스코드 앱 개발 및 인공지능 개발 툴로 사용하였습니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.DARKBLUE} fontSize={30} title="Figma" subtitle="DESIGN">
            디자인 및 앱&웹 프로토타입 제작에 능숙합니다. 디자인 협업 툴로 주로 사용했습니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.CREAM} fontSize={24} title="Rust" subtitle="ALGORITHM">
            Rust를 사용한 멀티 프로세서 시스템 작성 경험이 있습니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.BLACK} fontSize={30} rowsize={6} title="Unity/C#" subtitle="GAME">
            고등학교 시절 수행평가를 위해 AR 앱과 VR 앱을 만든 경험이 있습니다. 이후 유니티에 흥미를 가져 PC 게임 프로젝트를 홀로 여러 번 진행했으며, 이를 토대로 학생에게 수업을 진행할 수 있을 정도로 친숙합니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.YELLOW} fontSize={30} rowsize={5} title="React" subtitle="FRONTEND">
            React를 이용한 모바일 앱 개발과 웹 개발을 할 수 있습니다. 협업을 통해 리액트 프로젝트를 만들어 본 경험이 있으며, 이 홈페이지를 구성한 방법입니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.WHITE} fontSize={24} title="Firebase" subtitle="BACKEND">
            웹 프로젝트에 사용 가능합니다.
          </SkillBox>
          <SkillBox bgcolor={Colors.GREY} fontSize={24} title="Node.js" subtitle="BACKEND" styletext="@media screen and (max-width: 1087px) {grid-column-start: 1; grid-row-start: 13}">
            간단한 웹사이트 서버 구성이 가능합니다.
          </SkillBox>
        </FlexBox>
      </Box>
    </OneScreen>
  );
}