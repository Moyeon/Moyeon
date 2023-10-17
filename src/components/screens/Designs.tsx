import React from "react";
import styled from "styled-components";
import { ReactElement, ReactNode } from "react";
import MyText, {FontType} from "../styles/MyText";
import { Colors } from "../styles/Colors";
import TopBar from "../TopBar";

const OneScreen = styled.div`
  width: 100vw;
  padding: 4em 0;
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

export default function Designs() {
  return (
    <OneScreen style={{backgroundColor: "var(--YELLOW)"}}>
      <Box>
        <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={32}>
          DESIGNS
        </MyText>
      </Box>
    </OneScreen>
  );
}