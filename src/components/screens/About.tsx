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
  flex-wrap: wrap;
  padding: 0 4em;
  box-sizing: border-box;
  @media screen and (max-width: 1240px) {
    
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
  @media screen and (max-width: 864px) {
    grid-template-columns: 1fr;
  }
`;

const Br = styled.div`
  height: 0.4em;
`;

export default function About() {
  return (
    <OneScreen id="ABOUT" style={{backgroundColor: "var(--YELLOW)"}}>
      <Stick color={Colors.YELLOW}></Stick>
      <Box>
        <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={32}>
          ABOUT |
        </MyText>
        <Flex>
          <Tab>
            <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={20}>
              WHO?
            </MyText>
            <Br/>
            <MyText fontType={FontType.BOLD} color={Colors.BLACK} fontSize={20} isPretendard={1}>
              이호연
            </MyText>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={18} isPretendard={1}>
              개발자, 그리고 UI/UX 디자이너
            </MyText>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={18} isPretendard={1}>
              카이스트 전산학부 전공
            </MyText>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={18} isPretendard={1}>
              카이스트 산업디자인과 복수전공
            </MyText>
          </Tab>

          <Tab>
            <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={20}>
              CAREER
            </MyText>
            <Br/>
            <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20} isPretendard={1}>
              코딩학원 BEYOND CODING 근무
            </MyText>
            <MyText fontType={FontType.REGULAR} color={Colors.BLACK} fontSize={14}>
              2020.09 ~ 2024.01
            </MyText>
            <Br/>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={18} isPretendard={1}>
              초, 중, 고등학교 학생 대상 강의 :
            </MyText>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={16} isPretendard={1}>
              웹디자인, 스크래치, 유니티 게임개발, MakeX Robotics, Python, C/C++, 올림피아드 대비
            </MyText>
          </Tab>

          <Tab>
            <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={20}>
              CONTACT
            </MyText>
            <Br/>
            <MyText fontType={FontType.LIGHT} color={Colors.BLACK} fontSize={20} isPretendard={1}>
              dbqld770@kaist.ac.kr
              dbqld770@gmail.com
            </MyText>
          </Tab>
        </Flex>
      </Box>
    </OneScreen>
  );
}