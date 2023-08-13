import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import useURLParse from "@/hooks/useURLParse";
import { useRecoilValue } from "recoil";
import { isDarkModeState } from "@/utils/atoms";

const IntroSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 95%;
  margin-bottom: 2rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 5px;
    width: 100%;
  }
`;

const IntroPill = styled.div`
  background-color: ${(props) =>
    props.campus
      ? props.theme.palette.secondary.main
      : props.isDarkMode
      ? props.theme.palette.primary.main
      : "#9EBAFF"};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 18px 20px;
  border-radius: 16px;
  margin: 20px 0px;
  font-size: 1.25rem;
  font-weight: 600;
  min-width: 20%;
  text-align: center;
  font-family: GmarketSansBold;

  @media (max-width: 768px) {
    min-width: 50%;
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }
`;

const IntroCard = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 24px;
  border-radius: 1rem;
  margin: 0.5rem;
  width: 85%;
  margin-left: 3rem;
  align-self: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 20px 16px;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: GmarketSansBold;
  word-break: keep-all;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    margin-left: 15px;
  }
`;

const RedSpan = styled.span`
  color: ${(props) => (props.campus ? "#00B590" : "#80A4FF")};
  word-break: keep-all;
`;

const Body = styled.div`
  font-family: Pretendard-Regular;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export default function IntroSection(props) {
  const match480 = useMediaQuery("(max-width:480px)");
  const { isSuwon } = useURLParse();
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <>
      <Title>
        안녕하세요, {match480 && <br />}동아리연합회{" "}
        <RedSpan campus={!isSuwon}>{props.data.name}</RedSpan>입니다!
      </Title>

      <IntroSectionLayout>
        <IntroPill isDarkMode={isDarkMode} campus={!isSuwon}>
          동아리연합회는 어떤 단체인가요?
        </IntroPill>
        <IntroCard>
          <Body>{props.data.section[0]}</Body>
        </IntroCard>
      </IntroSectionLayout>
      <IntroSectionLayout>
        <IntroPill isDarkMode={isDarkMode} campus={!isSuwon}>
          동아리 연합회는 무슨 일을 하나요?
        </IntroPill>
        <IntroCard>
          <Body>{props.data.section[1]}</Body>
        </IntroCard>
      </IntroSectionLayout>
      <IntroSectionLayout>
        <IntroPill isDarkMode={isDarkMode} campus={!isSuwon}>
          동아리 연합회는 어떻게 구성되어있나요?
        </IntroPill>
        <IntroCard>
          <Body>{props.data.section[2]}</Body>
        </IntroCard>
      </IntroSectionLayout>
    </>
  );
}
