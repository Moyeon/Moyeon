import React from "react";
import styled from "styled-components";
import MyText, {FontType} from "../styles/MyText";
import { Colors } from "../styles/Colors";
import Stick from "../styles/Stick";
import LinkBox from "../core/LinkBox";

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
  position: relative;
  @media screen and (max-width: 1240px) {
    padding: 0 20px;
    box-sizing: border-box;
  }
`;

const GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 190px;
  margin: 2em 0;
  gap: 1em;
`;

const Br = styled.div`
  height: 0.4em;
`;

export default function Kids() {
  return (
    <OneScreen style={{backgroundColor: "var(--CREAM)"}}>
      <Stick color={Colors.CREAM}></Stick>
      <Box>
        <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={32}>
          KIDS
        </MyText>
        <Br></Br>
        <MyText fontType={FontType.REGULAR} color={Colors.BLACK} fontSize={18} isPretendard={1}>
          학생들을 가르칠 때 가장 중요한 것은 흥미를 끌고 충족시키며 학습에 대해 긍정적인 인상을 남기는 것입니다. 이를 위해 기본적인 이론 학습과 그를 활용한 인터랙션을 병행하였으며, 아래는 학생들과 함께 만든 웹 프로젝트들입니다. 학생의 아이디어를 학생들이 이해하기 쉬운 방법으로 구현하기 위해 순수 자바스크립트만 사용되었습니다.
        </MyText>
        <GridBox>
          <LinkBox title="PIXEL ART" subtitle="2021.05" link="https://moyeon.github.io/CodingCourses/Dylan/2021/0522pixelart.html">
            Pixel Art with Dylan.<br/>자바스크립트 이벤트를 응용해 기본적인 픽셀 아트 웹사이트를 구성함.
          </LinkBox>
          <LinkBox title="MAZE" subtitle="2021.11" link="https://moyeon.github.io/CodingCourses/Dylan/2021/1113canvasmove.html">
            Maze with Dylan.<br/>키보드와 캔버스를 이용한 탈출 게임, WASD로 동작.
          </LinkBox>
          <LinkBox title="BLACKJACK" subtitle="2021.12" link="https://moyeon.github.io/CodingCourses/Dylan/2021/1204Blackjack.html">
            Black Jack with Dylan.<br/>CSS 애니메이션과 랜덤을 사용한 카드게임.
          </LinkBox>
          <LinkBox title="BALL AND STRIKE" subtitle="2021.12" link="https://moyeon.github.io/CodingCourses/Kwonsang/2021/1218BS.html">
            Ball and Strike with Kwonsang.<br/>숫자야구 게임.
          </LinkBox>
          <LinkBox title="WHACK A MOLE" subtitle="2021.12" link="https://moyeon.github.io/CodingCourses/Dylan/2021/1225WhackaMole.html">
            Whack a Mole with Dylan.<br/>CSS 애니메이션을 활용한 두더지 잡기 게임.
          </LinkBox>
          <LinkBox bgColor={Colors.YELLOW} title="TYPING GAME" subtitle="2022." link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0108keyGame.html">
            Typing Practice Game with Kwonsang.<br/>빠르고 정확하게 타자를 쳐 떨어지는 단어를 없애자.
          </LinkBox>
          <LinkBox title="CPS TEST" subtitle="2022.02" link="https://moyeon.github.io/CodingCourses/Dylan/2022/cpstest/">
            CPS test with Dylan.<br/>당신의 클릭 속도를 확인해보세요.
          </LinkBox>
          <LinkBox title="COLOR GENERATOR" subtitle="2022.03" link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0319colorArray.html">
            Color Generator with Kwonsang.
          </LinkBox>
          <LinkBox title="GAME OF LIFE" subtitle="2022.03" link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0326LifeGame.html">
            Game of Life with Kwonsang.<br/>콘웨이의 생명 게임 시뮬레이터. +, - 키를 눌러 그리드의 크기를 바꾸고 space 키를 눌러 시작할 수 있다.
          </LinkBox>
          <LinkBox bgColor={Colors.DARKBLUE} title="WORDLE" subtitle="2022.05" link="https://moyeon.github.io/CodingCourses/Dylan/2022/wordle/">
            Wordle with Dylan.<br/>기존 Wordle의 디자인을 차용해 바닐라 js로 재구성한 워들 게임.
          </LinkBox>
          <LinkBox title="RANDOM FONT" subtitle="2022.05" link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/randomFont/">
            Random Font Generator with Kwonsang.
          </LinkBox>
          <LinkBox title="CLICKER" subtitle="2022.06" link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/Clicker/">
            Clicker Game with Kwonsang.
          </LinkBox>
          <LinkBox title="CLICKER" subtitle="2022.06" link="https://moyeon.github.io/CodingCourses/Dylan/2022/clicker/">
            Clicker Game with Dylan.
          </LinkBox>
          <LinkBox title="QUIZ" subtitle="2022.06" link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/QuizSite/index.html">
            Quiz Website with Kwonsang.
          </LinkBox>
          <LinkBox title="AIM GAME" subtitle="2023.01" link="https://caseceiling3373.github.io/osu-Remake/">
            Rythm Game with Dylan.<br/>Osu!를 자바스크립트를 이용해 구현.
          </LinkBox>
          <LinkBox title="SNAKE GAME" subtitle="2023.01" link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/snake%20game/">
            Snake Game with Kwonsang.<br/>추억의 게임을 게임기 디자인과 함께 구현. 로컬 저장소를 사용해 재화가 저장된다.
          </LinkBox>
          <LinkBox title="CELL GAME" subtitle="2022.03" link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/Agario/">
            CELL GAME with Kwonsang.<br/>Agar.io에서 영감을 얻어 제작한 2인용 세포 게임. WASD와 방향키를 사용해 두 플레이어가 동시에 조작할 수 있음.
          </LinkBox>
          <LinkBox title="2048" subtitle="2022.04" link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/Game2048/">
            2048 Game with Kwonsang.<br/>2048 게임을 순수 자바스크립트로 재구성함.
          </LinkBox>
          <LinkBox bgColor={Colors.RED} title="RUNNER" subtitle="2022.07" link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/runrun/">
            Runner Game with Kwonsang.<br/>반응형을 배운 후 제작되어 모바일 환경에서 플레이가 가능함. 모바일 환경에서는 90도 회전되어 화면 크기를 최대로 활용함.
          </LinkBox>
        </GridBox>
      </Box>
    </OneScreen>
  );
}