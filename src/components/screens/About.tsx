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

const Tab = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
`;

export default function About() {
  return (
    <OneScreen style={{backgroundColor: "var(--YELLOW)"}}>
      <Stick color={Colors.YELLOW}></Stick>
      <Box>
        <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={32}>
          ABOUT
        </MyText>
        <Flex>
          <Tab>
            <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={20}>
              WHO?
            </MyText>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={20} isPretendard={1}>
              이호연, 개발자이자 디자이너<br/>카이스트 전산학부 전공 산업디자인과 복수전공
            </MyText>
          </Tab>

          <Tab>
            <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={20}>
              CAREER
            </MyText>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={20} isPretendard={1}>
              코딩학원 BEYOND CODING 근무 2020.09 ~ 2023.10 (38개월)
              http://www.beyondcoding.kr/index.php
              초, 중, 고등학교 학생 대상 교습 : 웹디자인, 스크래치, 유니티 게임개발, MakeX Robotics, Python, C++, 올림피아드
            </MyText>
          </Tab>

          <Tab>
            <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={20}>
              INTEREST
            </MyText>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={20} isPretendard={1}>
              내가 디자인하고, 내가 만드는 게임.
            </MyText>
          </Tab>
        </Flex>
      </Box>
    </OneScreen>
  );
}