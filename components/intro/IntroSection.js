import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import useCampusDetect from "../../hooks/useCampusDetect";

const IntroSectionLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 2rem 0;
  }
`;

const IntroPill = styled.div`
  background-color: ${(props) =>
    props.campus
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 1.5rem 1rem;
  border-radius: 50px;
  margin: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  min-width: 20%;
  text-align: center;

  @media (max-width: 768px) {
    min-width: 50%;
    font-size: 1.2rem;
    padding: 0.7rem 1rem;
    position: absolute;
    top: -2rem;
  }
`;

const IntroCard = styled.div`
  background-color: ${(props) => props.theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 1.5rem 2.5rem;
  border-radius: 1rem;
  margin: 0.5rem;
  width: 70%;
  margin-left: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 1.5rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
`;

const RedSpan = styled.span`
  color: ${(props) =>
    props.campus
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.secondary.main};
  word-break: keep-all;
`;

const Body = styled.p`
  font-family: pretendard;
  font-size: 1.3rem;
  line-height: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function IntroSection(props) {
  const match480 = useMediaQuery("(max-width:480px)");
  const { isSuwon } = useCampusDetect();

  return (
    <>
      <IntroSectionLayout>
        <IntroPill campus={!isSuwon}>Who we are</IntroPill>
        <IntroCard>
          <Title>
            안녕하세요, 동아리연합회 {match480 && <br />}
            <RedSpan campus={!isSuwon}>{props.data.name}</RedSpan>입니다!
          </Title>
          <Body>{props.data.section[0]}</Body>
        </IntroCard>
      </IntroSectionLayout>
      <IntroSectionLayout>
        <IntroPill campus={!isSuwon}>What we do</IntroPill>
        <IntroCard>
          <Title>저희는 {match480 && <br />}이런 활동을 해요!</Title>
          <Body>{props.data.section[1]}</Body>
        </IntroCard>
      </IntroSectionLayout>
      <IntroSectionLayout>
        <IntroPill campus={!isSuwon}>How we work</IntroPill>
        <IntroCard>
          <Title>
            동아리연합회는 {match480 && <br />}이렇게 구성되어 있어요!
          </Title>
          <Body>{props.data.section[2]}</Body>
        </IntroCard>
      </IntroSectionLayout>
    </>
  );
}
