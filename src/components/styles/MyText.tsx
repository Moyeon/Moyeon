import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import '../../index.css';
import { Colors } from "./Colors";

export enum FontType {
  THIN,
  LIGHT,
  REGULAR,
  MEDIUM,
  SEMIBOLD,
  BOLD,
  EXTRABOLD,
  BLACK,
}

const StyledText = styled.div<{size: string, fontWeight: string, color: string, fontFamily: string}>`
  font-size: ${props => props.size};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;

interface Props {
  fontType: FontType;
  color?: string;
  isPretendard?: number;
  fontSize: number;
  children: ReactNode;
}

const MyText = ({fontType, color = Colors.BLACK, isPretendard = 0, fontSize, children}: Props) => {
  const getFontWeight = (type: FontType) => {
    switch (type) {
      case FontType.THIN:
        return '200';
      case FontType.LIGHT:
        return '300';
      case FontType.REGULAR:
        return '400';
      case FontType.MEDIUM:
        return '500';
      case FontType.SEMIBOLD:
        return '600';
      case FontType.BOLD:
        return '700';
      case FontType.EXTRABOLD:
        return '800';
      case FontType.BLACK:
        return '900';
    }
  }
  const getFontFamily = (isPretendard: Number) => {
    return isPretendard === 1?"Pretendard":"Proxima Nova";
  }

  return (<StyledText fontWeight={getFontWeight(fontType)} color={color} size={`${fontSize}px`} fontFamily={getFontFamily(isPretendard)}>{children}</StyledText>);
}

export default MyText;
