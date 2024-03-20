import React, { useState } from "react";
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

const TextShadow = styled.div<{xOffset: number, yOffset: number}>`
  font-family: Proxima Nova;
  font-size: 80px;
  // transform: translate(${props => props.xOffset}px, ${props => props.yOffset}px);
  font-weight: 900;
  position: absolute;
  text-shadow: ${props => props.xOffset}px ${props => - props.yOffset}px 0 ${Colors.YELLOW},
                ${props => - props.xOffset}px ${props => props.yOffset}px 0 ${Colors.RED},
                ${props => props.yOffset}px ${props => props.xOffset}px 0 ${Colors.DARKBLUE},
                ${props => - props.yOffset}px ${props => - props.xOffset}px 0 ${Colors.GREY};
`;

const TextShadow2 = styled.div<{xOffset: number, yOffset: number}>`
  font-family: Proxima Nova;
  font-size: 80px;
  transform: translate(${props => props.xOffset}px, ${props => props.yOffset}px);
  font-weight: 900;
  position: absolute;
`;

const TextShadow3 = styled.div<{xOffset: number, yOffset: number}>`
  font-family: Proxima Nova;
  font-size: 80px;
  transform: translate(${props => props.xOffset}px, ${props => props.yOffset}px);
  font-weight: 900;
  position: absolute;
`;

export default function Main() {
  const [xOffset, setXoffset] = useState(0);
  const [yOffset, setYoffset] = useState(0);

  function shadow(e){
      if(e.target.id == "TOP"){
        calculateXoffset(e.pageX - e.target.offsetWidth / 2);
        calculateYoffset(e.pageY - e.target.offsetHeight / 2);
      }
      else{
        calculateXoffset(e.pageX - e.target.offsetWidth / 2 - e.target.offsetLeft);
        calculateYoffset(e.pageY - e.target.offsetHeight / 2 - e.target.offsetTop);
      }
  }
  function calculateXoffset(offset){
    setXoffset((offset) / 2);
  }
  function calculateYoffset(offset){
    setYoffset((offset) / 2);
  }
  
  return (
    <>
      <TopBar></TopBar>
      <OneScreen id="TOP" onMouseMove={shadow}>
        <TextShadow xOffset={xOffset} yOffset={yOffset}>
          MOYEON
        </TextShadow>
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