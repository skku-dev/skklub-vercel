import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionDivider, SectionTitle } from "./common";

const RecruitContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.875rem;
  gap: 15px;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const RecruitContent = styled.div`
  flex: 1;
`;

const RecruitSubTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  margin-bottom: 0.25rem;
`;

const RecruitInfoBox = styled.div`
  height: 112px;
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function RecruitingSection() {
  return (
    <SectionWrapper
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 4,
      }}
    >
      <SectionTitle>Recruiting</SectionTitle>
      <SectionDivider />
      <RecruitContentWrapper>
        <RecruitContent>
          <RecruitSubTitle>모집 시기</RecruitSubTitle>
          <RecruitInfoBox>3.13(월) ~ 3.27(월)</RecruitInfoBox>
        </RecruitContent>
        <RecruitContent>
          <RecruitSubTitle>모집 시기</RecruitSubTitle>
          <RecruitInfoBox>3.13(월) ~ 3.27(월)</RecruitInfoBox>
        </RecruitContent>
        <RecruitContent>
          <RecruitSubTitle>모집 시기</RecruitSubTitle>
          <RecruitInfoBox>3.13(월) ~ 3.27(월)</RecruitInfoBox>
        </RecruitContent>
        <RecruitContent>
          <RecruitSubTitle>모집 시기</RecruitSubTitle>
          <RecruitInfoBox>3.13(월) ~ 3.27(월)</RecruitInfoBox>
        </RecruitContent>
      </RecruitContentWrapper>
    </SectionWrapper>
  );
}
