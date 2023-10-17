import React from "react";
import styled from "styled-components";
import { Colors } from "./Colors";


const StickyBox = styled.div<{color: string}>`
  height: 72.5px;
  position: sticky;
  background-color: ${props => props.color};
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
`;

interface Props {
  color?: string;
}

const Stick = ({color = Colors.BLACK}: Props) => {
  return (<StickyBox color={color}></StickyBox>);
}

export default Stick;
