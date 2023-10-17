import React from "react";
import styled from "styled-components";
import MyText, {FontType} from "../styles/MyText";
import { Colors } from "../styles/Colors";
import SkillBox from "../core/SkillBox";
import Stick from "../styles/Stick";

const OneScreen = styled.div`
  width: 100vw;
  padding: 0 0 4em 0;
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

const FlexBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 40px;
  margin: 2em 0;
  position: relative;
`;

export default function Skills() {
  return (
    <OneScreen id="SKILLS" style={{backgroundColor: "var(--DARKBLUE)"}}>
      <Stick color={Colors.DARKBLUE}></Stick>
      <Box>
        <MyText fontType={FontType.BLACK} color={Colors.WHITE} fontSize={32}>
          SKILLS |
          <MyText fontType={FontType.SEMIBOLD} color={Colors.WHITE} fontSize={20}>
            CLICK TO VIEW DETAILS
          </MyText>
        </MyText>
        <FlexBox>
          <SkillBox bgColor={Colors.CREAM} fontSize={40} rowSize={7} title="C++" subtitle="ALGORITHM">
            고등학교 때 처음으로 접한 프로그래밍 언어입니다. 대부분의 알고리즘 문제 풀이에 C++을 사용하는 것이 친숙합니다. 올림피아드 대비에 주로 사용합니다.
          </SkillBox>
          <SkillBox bgColor={Colors.YELLOW} fontSize={30} title="Python" subtitle="ALGORITHM/GAME">
            Python을 사용한 게임 개발, 자료 프로세스에 익숙합니다. 디스코드 앱 개발 및 인공지능 개발 툴로 사용하였습니다.
          </SkillBox>
          <SkillBox bgColor={Colors.WHITE} fontSize={24} title="Java" subtitle="ALGORITHM">
            자료구조 구현 등 간단한 프로젝트에 사용할 수 있습니다.
          </SkillBox>
          <SkillBox bgColor={Colors.YELLOW} fontSize={30} title="Scratch" subtitle="GAME">
            처음으로 코딩을 배우는 학생들을 가르칠 때 사용했습니다. 간단한 클릭 게임부터 Platformer, Maze 등의 다양한 게임을 만들 수 있습니다.
          </SkillBox>
          <SkillBox bgColor={Colors.WHITE} fontSize={24} title="Scala" subtitle="ALGORITHM">
            스칼라를 사용한 프로그래밍 언어 작성 경험이 있습니다.
          </SkillBox>
          <SkillBox bgColor={Colors.DARKBLUE} fontSize={30} rowSize={7} title="RPG Maker" subtitle="GAME">
            중학교 때 가족이 rpg maker 툴을 알려주며, 이걸 통해 해리포터 게임을 함께 만들자고 제안했습니다. 완성은 하지 못했지만 여러 버튼을 눌러보며 스스로 게임 개발 방법을 배웠고, 간단한 이벤트 기반 쯔꾸르 앱을 만들 수 있었습니다.<br/><br/>코딩에 익숙해지고 나서 다시 사용했을 때는 텍스트 코딩을 통한 더 세세한 조정법을 배워 학생과 함께 게임을 만들어 보기도 했습니다.
          </SkillBox>
          <SkillBox bgColor={Colors.BLACK} fontSize={30} rowSize={7} title="Unity" subtitle="GAME">
            고등학교 1학년 때 화학 수행평가를 위해 AR 앱과 VR 앱을 만든 경험이 있습니다. 이후 유니티에 흥미를 가져 PC 게임 프로젝트를 홀로 여러 번 진행했으며, 이를 토대로 학생에게 수업을 진행할 수 있을 정도로 친숙합니다.
          </SkillBox>
          <SkillBox bgColor={Colors.WHITE} fontSize={24} title="Unreal Engine" subtitle="GAME">
            존재하는 프로젝트를 수정하고 새로운 이벤트를 추가하거나 맵을 바꾸는 정도의 활동을 할 수 있습니다.
          </SkillBox>
          <SkillBox bgColor={Colors.RED} fontSize={30} rowSize={7} title="HTML/CSS/JS" subtitle="ALGORITHM/GAME">
            순수 Javascript를 사용하는 프로젝트 작성에 능숙합니다. 주로 가르치는 과목 중 하나이며 웹 게임 개발에 사용하는 방법입니다. 자바스크립트를 사용한 게임 프로젝트는 KIDS TAB에서 보실 수 있습니다.
          </SkillBox>
          <SkillBox bgColor={Colors.GREY} fontSize={30} title="React" subtitle="FRONTEND">
            협업이 필요하거나 홀로 하는 프로젝트에 자주 사용합니다. React를 이용한 모바일 앱 개발과 웹 개발 모두 경험이 있으며, 이 홈페이지를 구성한 방법입니다.
          </SkillBox>
          <SkillBox bgColor={Colors.WHITE} fontSize={30} title="Firebase" subtitle="BACKEND">
            웹 프로젝트에 사용 가능합니다.
          </SkillBox>
          <SkillBox bgColor={Colors.WHITE} fontSize={30} title="Figma" subtitle="DESIGN">
            디자인 및 앱&웹 프로토타입 제작에 능숙합니다.
          </SkillBox>
        </FlexBox>
      </Box>
    </OneScreen>
  );
}