import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionTitle } from "./common";

const AboutContent = styled.div`
  min-height: 226px;
  word-break: keep-all;
  font-family: Pretendard-Regular;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  height: auto;
  white-space: pre-line;
`;

export default function AboutSection({ description }) {
  return (
    <SectionWrapper>
      <SectionTitle>동아리 설명</SectionTitle>
      <AboutContent>{description || "설명이 아직 없습니다."}</AboutContent>
    </SectionWrapper>
  );
}
