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
              A basic pixel art website created using JavaScript events.
            </LinkBox>
            <LinkBox
              title="MAZE"
              subtitle="w. Dylan, 2021.11"
              link="https://moyeon.github.io/CodingCourses/Dylan/2021/1113canvasmove.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2021"
            >
              An escape game using the keyboard and canvas. Use WASD to move;
              touching a wall resets your position.
            </LinkBox>
            <LinkBox
              title="BLACKJACK"
              subtitle="w. Dylan, 2021.12"
              link="https://moyeon.github.io/CodingCourses/Dylan/2021/1204Blackjack.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2021"
            >
              A card game using CSS animations and randomness. Follow basic
              Blackjack rules and beat the dealer's score to win.
            </LinkBox>
            <LinkBox
              title="BALL AND STRIKE"
              subtitle="w. Kwonsang, 2021.12"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2021/1218BS.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2021"
            >
              A web version of number baseball. Guess the randomly chosen
              4-digit number.
            </LinkBox>
            <LinkBox
              title="WHACK A MOLE"
              subtitle="w. Dylan, 2021.12"
              link="https://moyeon.github.io/CodingCourses/Dylan/2021/1225WhackaMole.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2021"
            >
              A whack-a-mole game using CSS animations. Click moles to score.
              Catch as many as you can in 60 seconds.
            </LinkBox>
            <LinkBox
              bgcolor={Colors.YELLOW}
              title="TYPING GAME"
              subtitle="w. Kwonsang, 2022.01"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0108keyGame.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022"
            >
              Type fast and accurately to eliminate falling words. Lose if more
              than three words hit the ground.
            </LinkBox>
            <LinkBox
              title="CPS TEST"
              subtitle="w. Dylan, 2022.02"
              link="https://moyeon.github.io/CodingCourses/Dylan/2022/cpstest/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2022/cpstest"
            >
              CPS (Clicks Per Second) Test website. Measure your click speed.
            </LinkBox>
            <LinkBox
              title="COLOR GENERATOR"
              subtitle="w. Kwonsang, 2022.03"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0319colorArray.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022"
            >
              Generate new colors by slightly modifying RGB values. You can sort
              them by brightness.
            </LinkBox>
            <LinkBox
              title="GAME OF LIFE"
              subtitle="w. Kwonsang, 2022.03"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/0326LifeGame.html"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022"
            >
              Conway's Game of Life simulator. Use + and - to resize the grid,
              and spacebar to start/stop.
            </LinkBox>
            <LinkBox
              bgcolor={Colors.DARKBLUE}
              title="WORDLE"
              subtitle="w. Dylan, 2022.05"
              link="https://moyeon.github.io/CodingCourses/Dylan/2022/wordle/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2022/wordle"
            >
              A recreated Wordle game modeled after the original design.
            </LinkBox>
            <LinkBox
              title="RANDOM FONT"
              subtitle="w. Kwonsang, 2022.05"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2022/randomFont/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2022/randomFont"
            >
              A memo pad app that applies a random font when you create a note.
              You can edit or delete notes.
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
              A quiz site with topics tailored to students’ interests.
            </LinkBox>
            <LinkBox
              title="AIM GAME"
              subtitle="w. Dylan, 2023.01"
              link="https://caseceiling3373.github.io/osu-Remake/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Dylan/2022/AimGame"
            >
              A rhythm game inspired by Osu!, implemented with JavaScript. Game
              data was processed using Python into JSON.
            </LinkBox>
            <LinkBox
              title="SNAKE GAME"
              subtitle="w. Kwonsang, 2023.01"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/snake%20game/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/snake%20game"
            >
              A nostalgic snake game with a handheld console design. Uses local
              storage to save in-game currency.
            </LinkBox>
            <LinkBox
              title="CELL GAME"
              subtitle="w. Kwonsang, 2023.03"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/Agario/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/Agario"
            >
              A 2-player cell game inspired by Agar.io. Two players can control
              simultaneously using WASD and arrow keys.
            </LinkBox>
            <LinkBox
              title="2048"
              subtitle="w. Kwonsang, 2023.04"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/Game2048/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/Game2048"
            >
              A remake of the 2048 game. Use WASD or arrow keys to play.
            </LinkBox>
            <LinkBox
              bgcolor={Colors.RED}
              title="RUNNER"
              subtitle="w. Kwonsang, 2023.07"
              link="https://moyeon.github.io/CodingCourses/Kwonsang/2023/runrun/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/runrun"
            >
              Avoid obstacles by jumping (SPACE) and sliding (ARROW DOWN). Built
              after learning responsive design, playable on mobile with 90°
              rotation.
            </LinkBox>
            <LinkBox
              title="GRAVITY RUNNER"
              subtitle="w. Kwonsang, 2024.01"
              link="https://grappet-sound.github.io/GravityDash/"
              github="https://github.com/Moyeon/CodingCourses/tree/main/Kwonsang/2023/Gravity"
            >
              Gravity Runner. Press the SPACE key to flip the direction of
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
