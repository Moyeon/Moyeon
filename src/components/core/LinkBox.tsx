import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import '../../index.css';
import { Colors } from "../styles/Colors";
import MyText, { FontType } from "../styles/MyText";

const Wrapper = styled.div<{bgcolor: string}>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 2em;
  diplay: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: ${props => props.bgcolor};
`;

const GridItem = styled.div`
  width: 100%;
  height: 100%;
`;

const Br = styled.div`
  height: 0.4em;
`;

interface Props {
  bgcolor?: string;
  children: ReactNode;
  title: string;
  subtitle: string;
  link: string;
}

const LinkBox = ({bgcolor = Colors.WHITE, children, title, subtitle, link}: Props) => {
  const getTextColor = (bgcolor: string) => {
    switch (bgcolor){
      case Colors.BLACK:
        return Colors.WHITE;
      case Colors.DARKBLUE:
        return Colors.WHITE;
      case Colors.WHITE:
        return Colors.DARKBLUE;
      case Colors.RED:
        return Colors.WHITE;
    }
  }

  return (
  <a className="linkBox" href={link}>
    <GridItem>
      <Wrapper bgcolor={bgcolor}>
        <MyText fontSize={20} fontType={FontType.BLACK} color={getTextColor(bgcolor)}>
          {title}
        </MyText>
        <MyText fontSize={14} fontType={FontType.BOLD} color={Colors.BLACK} isPretendard={1}>
          {subtitle}
        </MyText>
        <Br></Br>
        <MyText fontSize={16} fontType={FontType.REGULAR} color={getTextColor(bgcolor)} isPretendard={1}>
          {children}
        </MyText>
      </Wrapper>
    </GridItem>
  </a>);
}

export default LinkBox;
