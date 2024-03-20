import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import '../../index.css';
import { Colors } from "../styles/Colors";
import MyText, { FontType } from "../styles/MyText";

const Wrapper = styled.div<{bgcolor: string}>`
  width: calc(100% - 4em);
  height: calc(100% - 4em);
  padding: 2em;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  // box-sizing: border-box;
  background-color: ${props => props.bgcolor};
  position: relative;
  transition: all ease 0.2s;
  &:hover{
    transform: translateY(-10px);
    box-shadow: inset 0 -10px 0 0 rgba(0,0,0,0.2);
    border-radius: 10px 10px 0 0;
    padding-bottom: calc(2em + 10px);
  }
`;

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const Br = styled.div`
  height: 0.4em;
`;

const Box = styled.div<{bgcolor: string}>`
  background-color: ${props => props.bgcolor};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  box-sizing: border-box;
`;

const Box2 = styled.div<{bgcolor: string}>`
  border: 2px solid ${props => props.bgcolor};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  box-sizing: border-box;
`;

const A = styled.a`
  display: inline-block;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  gap: 0.5em;
  margin-top: auto;
`;

const Gap = styled.div`
  height: 100%;
`;

interface Props {
  bgcolor?: string;
  children: ReactNode;
  title: string;
  subtitle: string;
  link: string;
  github?: string;
}

const LinkBox = ({bgcolor = Colors.WHITE, children, title, subtitle, link, github}: Props) => {
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
      case Colors.YELLOW:
        return Colors.BLACK;
    }
  }

  return (
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
        <FlexBox>
          <A href={github}><Box bgcolor={getTextColor(bgcolor)}>
            <MyText fontSize={14} fontType={FontType.BOLD} color={bgcolor} isPretendard={1}>
              GitHub
            </MyText>
          </Box></A>
          <A href={link}><Box2 bgcolor={getTextColor(bgcolor)}>
            <MyText fontSize={14} fontType={FontType.BOLD} color={getTextColor(bgcolor)} isPretendard={1}>
              Play
            </MyText>
          </Box2></A>
        </FlexBox>
      </Wrapper>
    </GridItem>
  );
}

export default LinkBox;
