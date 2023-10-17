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
      {/* <Designs></Designs> */}
    </>
  );
}