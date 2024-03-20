import styled from "styled-components";
import MyText, {FontType} from "./styles/MyText";
import { Colors } from "./styles/Colors";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
      }} className="topbar">
      <FlexDivPC>
        <HashLink smooth to="/#TOP" className="TopBarMain">
          <MyText fontType={FontType.BLACK} color={Colors.BLACK} fontSize={36}>
            HOYEON
          </MyText>
        </HashLink>
        <Empty></Empty>
        <HashLink smooth to="/#ABOUT" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            ABOUT
          </MyText>
        </HashLink>
        <HashLink smooth to="/#SKILLS" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            SKILLS
          </MyText>
        </HashLink>
        <HashLink smooth to="/#KIDS" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            KIDS
          </MyText>
        </HashLink>
        <HashLink smooth to="/#PROJECTS" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            PROJECTS
          </MyText>
        </HashLink>
        {/* <Link to="/" className="TopBarBtn">
          <MyText fontType={FontType.SEMIBOLD} color={Colors.BLACK} fontSize={20}>
            DESIGNS
          </MyText>
        </Link> */}
      </FlexDivPC>
    </div>
    
  );
};