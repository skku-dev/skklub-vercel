import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { useMediaQuery } from "@mui/material";
import { SectionDivider, SectionTitle } from "./common";

const AboutContent = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 169%;
  height: 226px;

  @media (max-width: 760px) {
    height: 312px;
    overflow-y: auto;
  }
`;

const ClubPageNaviagateBtn = styled.button`
  position: absolute;
  bottom: 24px;
  right: 30px;
  width: 174px;
  height: 51px;
  background-color: #c4cbcd;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 107.5%;
  color: white;
  border: none;
  @media (max-width: 760px) {
    position: relative;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    margin-top: 2rem;
  }
`;

export default function AboutSection() {
  const match760 = useMediaQuery("(max-width:760px)");
  return (
    <SectionWrapper
      style={{
        gridColumnStart: match760 ? 1 : 2,
        gridColumnEnd: 4,
        flex: 1,
        height: match760 ? "auto" : "403px",
      }}
    >
      <SectionTitle>About</SectionTitle>
      <SectionDivider />
      <AboutContent>
        성균합창단은 54년의 전통을 잇는 중앙 합창 동아리입니다. 매주 화, 목요일
        7시 정기 연습과 뒤풀이로 단원간 화합을 도모하고, 매 학기 정기 공연을
        실시합니다. 가요, 뮤지컬 넘버, 영화 OST 등 다양한 장르로 스테이지를
        꾸미며, 원하는 스테이지에만 참여할 수 있어 비교적 부담이 적습니다.
        명륜과 율전을 오가며 다양한 연령대와 학과의 사람을 만나 친목을 다질 수
        있고, 체육대회, MT 등 여러 행사를 함께합니다. 뛰어난 노래 실력, 합창
        또는 노래 관련 경험이 없어도, 학번이 높아도 괜찮습니다. 편한 마음으로
        가볍게 놀러오세요!
      </AboutContent>
      <ClubPageNaviagateBtn>동아리 페이지</ClubPageNaviagateBtn>
    </SectionWrapper>
  );
}
