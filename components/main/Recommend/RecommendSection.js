import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import Phrase from "../Common/Phrase";
import RecommendTheme from "./RecommendTheme";
import RecommendSubTheme from "./RecommendSubThem";
import Hashtag from "./Hashtag";
import HashtagWrapper from "./HashtagWrapper";
import useCampusDetect from "../../../hooks/useCampusDetect";

const RecommendWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 17px;
  margin-top: 24px;
  padding: 0px 30px;
  @media (max-width: 1400px) {
    padding: 0;
  }
`;

const IntroCircle = styled.div`
  height: 153px;
  flex: 1;
  background-color: #fc7b95;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 68px;
`;

const ClubCircle = styled.div`
  width: 153px;
  height: 153px;
  background-color: ${(props) =>
    props.campus
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.secondary.main};
  border-radius: 80px;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClubTitle = styled.div`
  width: 135px;
  height: 93px;
  text-align: center;
  font-weight: 500;
`;

export default function RecommendSection() {
  const { isSuwon } = useCampusDetect();
  const matches_1024 = useMediaQuery("(max-width:1024px)");
  const matches_950 = useMediaQuery("(max-width:950px)");

  return (
    <RecommendWrapper>
      <Phrase>오늘의 추천동아리</Phrase>
      <CircleContainer>
        <IntroCircle>
          <RecommendTheme>인성품과 보람 동시에 잡기</RecommendTheme>
          <RecommendSubTheme>
            "뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"
          </RecommendSubTheme>
          <HashtagWrapper>
            <Hashtag>#대학생활</Hashtag>
            <Hashtag>#봉사</Hashtag>
            <Hashtag>#친구</Hashtag>
            {!matches_950 && <Hashtag>#사회공헌</Hashtag>}
          </HashtagWrapper>
        </IntroCircle>
        <ClubCircle campus={!isSuwon}>
          <ClubTitle>성균 민속 연구반 탈</ClubTitle>
        </ClubCircle>
        <ClubCircle campus={!isSuwon}>
          <ClubTitle>성균 민속 연구반 탈</ClubTitle>
        </ClubCircle>
        {!matches_1024 && (
          <ClubCircle campus={!isSuwon}>
            <ClubTitle>성균 민속 연구반 탈</ClubTitle>
          </ClubCircle>
        )}
      </CircleContainer>
    </RecommendWrapper>
  );
}
