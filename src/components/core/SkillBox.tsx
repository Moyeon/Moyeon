import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import '../../index.css';
import { Colors } from "../styles/Colors";
import MyText, { FontType } from "../styles/MyText";

const Wrapper = styled.div<{bgColor: string, filter: string}>`
  background-color: ${props => props.bgColor};
  cursor: pointer;
  filter: brightness(${props => props.filter});
  width: 100%;
  height: 100%;
  padding: 2em;
  diplay: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: all ease 0.2s;
  &:hover{
    transform: translateY(-10px);
    height: calc(100% + 10px);
    box-shadow: inset 0 -10px 0 0 rgba(0,0,0,0.2);
    border-radius: 5px 5px 0 0;
  }
  &:active{
    filter: invert(10%);
    transform: translateY(0);
    height: 100%;
    box-shadow: inset 0 0 0 0 rgba(0,0,0,0.2);
  }
`;

const GridItem = styled.div<{rowSize: number, styleText: string}>`
  width: 100%;
  height: 100%;
  grid-row: auto / span ${props => props.rowSize};
  ${props => props.styleText};
`;

const VerticalCenter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

interface Props {
  bgColor?: string;
  fontSize: number;
  children: ReactNode;
  title: string;
  rowSize?: number
  subtitle: string;
  styleText?: string;
}

const SkillBox = ({bgColor = Colors.WHITE, fontSize, children, title, rowSize = 4, subtitle, styleText = ""}: Props) => {
  const [clicked, setClicked] = useState(false);
  const getFilter = (isClicked: boolean) => {
    if(!isClicked){
      return "100%";
    }else{
      return "100%";
    }
  }
  const getTextColor = (bgColor: string) => {
    switch (bgColor){
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
  <GridItem onClick={() => setClicked(!clicked)} rowSize={rowSize} styleText={styleText}>
    <Wrapper bgColor={bgColor} filter={getFilter(clicked)}>
      {!clicked &&<>
        <MyText fontSize={14} fontType={FontType.BLACK} color={getTextColor(bgColor)}>
        {subtitle}
        </MyText>
        <MyText fontSize={fontSize} fontType={FontType.BOLD} color={getTextColor(bgColor)} isPretendard={1}>
          {title}
        </MyText></>}
      {clicked &&
        <VerticalCenter>
          <MyText fontSize={16} fontType={FontType.REGULAR} color={getTextColor(bgColor)} isPretendard={1}>
            {children}
          </MyText>
        </VerticalCenter>
        }
    </Wrapper>
  </GridItem>);
}

export default SkillBox;
