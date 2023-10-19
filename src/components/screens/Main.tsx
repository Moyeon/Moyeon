import React from "react";
import styled from "styled-components";
import MyText, {FontType} from "../styles/MyText";
import { Colors } from "../styles/Colors";
import TopBar from "../TopBar";
import About from "./About";
import Skills from "./Skills";
import Kids from "./Kids";
import Projects from "./Projects";

const OneScreen = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export default function Main() {
  return (
    <>
      <TopBar></TopBar>
      <OneScreen>
        <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={80}>
          HELLO!
        </MyText>
        <MyText fontType={FontType.BLACK} color={Colors.GREY} fontSize={80}>
          HELLO!
        </MyText>
        <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={80}>
          HELLO!
        </MyText>
      </OneScreen>
      <About></About>
      <Skills></Skills>
      <Kids></Kids>
      <Projects></Projects>
      <OneScreen2>
        <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={20}>
          Copyright©2023 Hoyeon All rights reserved.
        </MyText>
      </OneScreen2>
    </>
  );
}