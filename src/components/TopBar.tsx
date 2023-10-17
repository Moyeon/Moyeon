import styled from "styled-components";
import MyText, {FontType} from "./styles/MyText";
import { Colors } from "./styles/Colors";
import React from "react";
import { Link } from "react-router-dom";

const FlexDivPC = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1240px) {
    padding: 0 20px;
    box-sizing: border-box;
  }
`;

const Empty = styled.div`
  margin: auto;
`;

export default function TopBar(){
  return (
    <div style={{
      position: "fixed",
      width: "100%",
      backgroundColor: "transparent",
      zIndex: 10,
      height: "75px",
      }}>
      <FlexDivPC>
        <Link to="/" className="TopBarMain">
          <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={36}>
            HOYEON
          </MyText>
        </Link>
        <Empty></Empty>
        <Link to="/" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            ABOUT
          </MyText>
        </Link>
        <Link to="/" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            SKILLS
          </MyText>
        </Link>
        <Link to="/" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            KIDS'
          </MyText>
        </Link>
        <Link to="/" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            PROJECTS
          </MyText>
        </Link>
        {/* <Link to="/" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            DESIGNS
          </MyText>
        </Link> */}
      </FlexDivPC>
    </div>
    
  );
};