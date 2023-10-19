import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import '../../index.css';
import { Colors } from "../styles/Colors";
import MyText, { FontType } from "../styles/MyText";

const Wrapper = styled.div`
  width: 90%;
  max-width: 900px;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  margin-left: auto;
  grid-template-columns: 250px 2fr;
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const Br = styled.div`
  height: 0.6em;
`;

const LeftBox = styled.div`
  @media screen and (max-width: 550px) {
    border: none;
  }
`;

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const ProjBox = ({children, title, subtitle}: Props) => {

  return (
    <Wrapper className="projBox">
      <LeftBox>
        <MyText fontSize={20} fontType={FontType.BLACK} color={Colors.YELLOW}>
          {title}
        </MyText>
        <MyText fontSize={14} fontType={FontType.BOLD} isPretendard={1} color={Colors.GREY}>
          {subtitle}
        </MyText>
      </LeftBox>
      <div className="projText">
        {children}
      </div>
    </Wrapper>
    );
}

export default ProjBox;
