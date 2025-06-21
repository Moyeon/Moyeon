import { useState } from "react";
import styled from "styled-components";
import MyText, { FontType } from "../styles/MyText";
import { Colors } from "../styles/Colors";
import Kids from "./Kids";
import Stick from "../styles/Stick";
import LinkBox from "../core/LinkBox";

const OneScreen = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const OneScreen2 = styled.div`
  width: 100vw;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // background-color: var(--YELLOW);
`;

const TextShadow = styled.div<{ xOffset: number; yOffset: number }>`
  font-family: Proxima Nova;
  font-size: 80px;
  // transform: translate(${(props) => props.xOffset}px, ${(props) =>
    props.yOffset}px);
  font-weight: 900;
  position: absolute;
  text-shadow: ${(props) => props.xOffset}px ${(props) => -props.yOffset}px 0
      ${Colors.YELLOW},
    ${(props) => -props.xOffset}px ${(props) => props.yOffset}px 0 ${Colors.RED},
    ${(props) => props.yOffset}px ${(props) => props.xOffset}px 0
      ${Colors.DARKBLUE},
    ${(props) => -props.yOffset}px ${(props) => -props.xOffset}px 0
      ${Colors.GREY};
`;

const TextShadow2 = styled.div<{ xOffset: number; yOffset: number }>`
  font-family: Proxima Nova;
  font-size: 80px;
  transform: translate(
    ${(props) => props.xOffset}px,
    ${(props) => props.yOffset}px
  );
  font-weight: 900;
  position: absolute;
`;

const TextShadow3 = styled.div<{ xOffset: number; yOffset: number }>`
  font-family: Proxima Nova;
  font-size: 80px;
  transform: translate(
    ${(props) => props.xOffset}px,
    ${(props) => props.yOffset}px
  );
  font-weight: 900;
  position: absolute;
`;

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 4em;
  box-sizing: border-box;
  @media screen and (max-width: 1240px) {
  }
`;

const OneScreen3 = styled.div`
  width: 100vw;
  padding: 0 0 4em 0;
`;

const GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 240px;
  margin: 2em 0;
  gap: 1em;
`;

const Br = styled.div`
  height: 0.4em;
`;

export default function Compact() {
  const [xOffset, setXoffset] = useState(0);
  const [yOffset, setYoffset] = useState(0);

  function shadow(e) {
    if (e.target.id == "TOP") {
      calculateXoffset(e.pageX - e.target.offsetWidth / 2);
      calculateYoffset(e.pageY - e.target.offsetHeight / 2);
    } else {
      calculateXoffset(
        e.pageX - e.target.offsetWidth / 2 - e.target.offsetLeft
      );
      calculateYoffset(
        e.pageY - e.target.offsetHeight / 2 - e.target.offsetTop
      );
    }
  }
  function calculateXoffset(offset) {
    setXoffset(offset / 2);
  }
  function calculateYoffset(offset) {
    setYoffset(offset / 2);
  }

  return (
    <>
      <OneScreen id="TOP" onMouseMove={shadow}>
        <TextShadow xOffset={xOffset} yOffset={yOffset}>
          MOYEON
        </TextShadow>
      </OneScreen>

      <OneScreen3>
        <Box>
          <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={32}>
            GAMES |
          </MyText>
          <Br></Br>
          <GridBox>
            <LinkBox
              title="PIXEL ART"
              subtitle="w. Dylan, 2021.05"
              link="https://moyeon.github.io/CodingCourses/Dylan/2021/0522pixelart.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2021"
            >
              자바스크립트 이벤트를 응용해 구성한 기본적인 픽셀 아트
              웹사이트입니다.
            </LinkBox>
            <LinkBox
              title="MAZE"
              subtitle="w. Dylan, 2021.11"
              link="https://moyeon.github.io/CodingCourses/Dylan/2021/1113canvasmove.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2021"
            >
              키보드와 캔버스를 이용한 탈출 게임입니다. WASD를 이용해
              동작시키며, 벽에 닿으면 처음 위치로 되돌아갑니다.
            </LinkBox>
            <LinkBox
              title="BLACKJACK"
              subtitle="w. Dylan, 2021.12"
              link="https://moyeon.github.io/CodingCourses/Dylan/2021/1204Blackjack.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2021"
            >
              CSS 애니메이션과 랜덤을 사용한 카드게임입니다. 블랙잭의 기본
              규칙을 따르며, 딜러보다 높은 점수를 기록해야 이깁니다.
            </LinkBox>
            <LinkBox
              title="BALL AND STRIKE"
              subtitle="w. Kwonsang, 2021.12"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2021/1218BS.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2021"
            >
              숫자야구를 웹사이트로 구현하였습니다. 랜덤으로 지정되는 네 자리
              숫자를 유추해 맞춰보세요.
            </LinkBox>
            <LinkBox
              title="WHACK A MOLE"
              subtitle="w. Dylan, 2021.12"
              link="https://moyeon.github.io/CodingCourses/Dylan/2021/1225WhackaMole.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2021"
            >
              CSS 애니메이션을 활용한 두더지 잡기 게임입니다. 두더지를 클릭해
              점수를 얻을 수 있습니다. 60초 안에 최대한 많은 두더지를 잡아
              보세요.
            </LinkBox>
            <LinkBox
              bgcolor={Colors.YELLOW}
              title="TYPING GAME"
              subtitle="w. Kwonsang, 2022.01"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0108keyGame.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022"
            >
              빠르고 정확하게 타자를 쳐 떨어지는 단어를 없애 보세요. 세 번 이상
              단어가 바닥에 떨어지면 패배합니다.
            </LinkBox>
            <LinkBox
              title="CPS TEST"
              subtitle="w. Dylan, 2022.02"
              link="https://moyeon.github.io/CodingCourses/Dylan/2022/cpstest/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2022/cpstest"
            >
              CPS(Click per second) Test 웹사이트입니다. 당신의 클릭 속도를
              확인해보세요.
            </LinkBox>
            <LinkBox
              title="COLOR GENERATOR"
              subtitle="w. Kwonsang, 2022.03"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0319colorArray.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022"
            >
              색을 지정하고 Generate하면 RGB값을 랜덤으로 약간 조작해 새로운
              색상을 만들어냅니다. Sort를 통해 명도 순서대로 색을 정렬할 수
              있습니다.
            </LinkBox>
            <LinkBox
              title="GAME OF LIFE"
              subtitle="w. Kwonsang, 2022.03"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0326LifeGame.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022"
            >
              콘웨이의 생명 게임 시뮬레이터. +, - 키를 눌러 그리드의 크기를
              바꾸고 space 키를 눌러 시작/정지할 수 있습니다.
            </LinkBox>
            <LinkBox
              bgcolor={Colors.DARKBLUE}
              title="WORDLE"
              subtitle="w. Dylan, 2022.05"
              link="https://moyeon.github.io/CodingCourses/Dylan/2022/wordle/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2022/wordle"
            >
              기존 Wordle의 디자인을 차용해 재구성한 워들 게임입니다.
            </LinkBox>
            <LinkBox
              title="RANDOM FONT"
              subtitle="w. Kwonsang, 2022.05"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/randomFont/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022/randomFont"
            >
              메모를 생성하면 랜덤한 폰트를 적용해 저장해 주는 랜덤 폰트
              메모장입니다. 작성한 메모를 수정하거나 삭제할 수 있습니다.
            </LinkBox>
            <LinkBox
              title="CLICKER"
              subtitle="w. Kwonsang, 2022.06"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/Clicker/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022/Clicker"
            >
              Clicker Game with Kwonsang.
            </LinkBox>
            <LinkBox
              title="CLICKER"
              subtitle="w. Dylan, 2022.06"
              link="https://moyeon.github.io/CodingCourses/Dylan/2022/clicker/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2022/clicker"
            >
              Clicker Game with Dylan.
            </LinkBox>
            <LinkBox
              title="QUIZ"
              subtitle="w. Kwonsang, 2022.06"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/QuizSite"
              github="https://grappet-sound.github.io/Quiz-Games/"
            >
              특정 주제에 대한 퀴즈를 풀 수 있는 웹사이트입니다. 학생이 관심
              있는 퀴즈를 풀 수 있도록 되어 있습니다.
            </LinkBox>
            <LinkBox
              title="AIM GAME"
              subtitle="w. Dylan, 2023.01"
              link="https://caseceiling3373.github.io/osu-Remake/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2022/AimGame"
            >
              Osu!라는 제목의 리듬 게임을 자바스크립트를 이용해 구현했습니다.
              Python을 사용해 게임 데이터를 활용 가능한 json 형식으로 변경해
              사용하였습니다.
            </LinkBox>
            <LinkBox
              title="SNAKE GAME"
              subtitle="w. Kwonsang, 2023.01"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/snake%20game/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/snake%20game"
            >
              추억의 스네이크 게임을 게임기 디자인과 함께 구현했습니다. 로컬
              저장소를 사용해 재화가 저장됩니다.
            </LinkBox>
            <LinkBox
              title="CELL GAME"
              subtitle="w. Kwonsang, 2023.03"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/Agario/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/Agario"
            >
              Agar.io에서 영감을 얻어 제작한 2인용 세포 게임입니다. WASD와
              방향키를 사용해 두 플레이어가 동시에 조작할 수 있습니다.
            </LinkBox>
            <LinkBox
              title="2048"
              subtitle="w. Kwonsang, 2023.04"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/Game2048/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/Game2048"
            >
              2048 게임을 재구성했습니다. WASD, 방향키를 사용해 조작할 수
              있습니다.
            </LinkBox>
            <LinkBox
              bgcolor={Colors.RED}
              title="RUNNER"
              subtitle="w. Kwonsang, 2023.07"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/runrun/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/runrun"
            >
              점프(SPACE)와 슬라이드(ARROW DOWN)로 장애물을 피해 보세요.
              반응형을 배운 후 제작되어 모바일 환경에서 플레이가 가능합니다.
              모바일 환경에서는 90도 회전됩니다.
            </LinkBox>
            <LinkBox
              title="GRAVITY RUNNER"
              subtitle="w. Kwonsang, 2024.01"
              link="https://grappet-sound.github.io/GravityDash/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/Gravity"
            >
              Gravity Runner. Press SPACE KEY to change the direction of the
              gravity.
            </LinkBox>
          </GridBox>
        </Box>
      </OneScreen3>
      <OneScreen2>
        <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={20}>
          Copyright©2025 Hoyeon All rights reserved.
        </MyText>
      </OneScreen2>
    </>
  );
}
