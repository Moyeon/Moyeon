import styled from "styled-components";
import MyText, {FontType} from "../styles/MyText";
import { Colors } from "../styles/Colors";
import React from "react";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
`;

export default function NotFound() {
  return (
    <Wrap>
      <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={36}>
        PAGE NOT FOUND :P
      </MyText>
      <Link to="/">
        <MyText fontType={FontType.SEMIBOLD} color={Colors.GREY} fontSize={24}>
          BACK TO MAIN
        </MyText>
      </Link>
    </Wrap>
    
  );
};
  