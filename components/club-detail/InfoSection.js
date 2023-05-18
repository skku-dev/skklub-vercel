import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionDivider, SectionTitle } from "./common";

const InfoContentWrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

const InfoContentRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const InfoCategory = styled.div`
  font-weight: 700;
  font-size: 1rem;
`;

const Info = styled.div`
  font-weight: 300;
  font-size: 1rem;
`;

export default function InfoSection() {
  return (
    <SectionWrapper
      style={{
        height: "403px",
      }}
    >
      <SectionTitle>Info</SectionTitle>
      <SectionDivider />
      <InfoContentWrapper>
        <InfoContentRow>
          <InfoCategory>중분류</InfoCategory>
          <Info>중앙동아리</Info>
        </InfoContentRow>
        <InfoContentRow>
          <InfoCategory>중분류</InfoCategory>
          <Info>중앙동아리</Info>
        </InfoContentRow>
        <InfoContentRow>
          <InfoCategory>중분류</InfoCategory>
          <Info>중앙동아리</Info>
        </InfoContentRow>
        <InfoContentRow>
          <InfoCategory>중분류</InfoCategory>
          <Info>중앙동아리</Info>
        </InfoContentRow>
        <InfoContentRow>
          <InfoCategory>중분류</InfoCategory>
          <Info>중앙동아리</Info>
        </InfoContentRow>
        <InfoContentRow>
          <InfoCategory>중분류</InfoCategory>
          <Info>중앙동아리</Info>
        </InfoContentRow>
        <InfoContentRow>
          <InfoCategory>중분류</InfoCategory>
          <Info>중앙동아리</Info>
        </InfoContentRow>
        <InfoContentRow>
          <InfoCategory>중분류</InfoCategory>
          <Info>중앙동아리</Info>
        </InfoContentRow>
      </InfoContentWrapper>
    </SectionWrapper>
  );
}
