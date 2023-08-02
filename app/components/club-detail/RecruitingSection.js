import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionTitle } from "./common";
import { useMediaQuery } from "@mui/material";
import MobileRecruitingTabel from "./MobileRecruitingTable";

const RTable = styled.table`
  padding-top: 4px;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
`;

const RTr = styled.tr``;

const RTh = styled.th`
  @media (prefers-color-scheme: light) {
    border-color: rgba(116, 116, 116, 1);
  }
  border: 1px solid;
  border-bottom: 0.5px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  &:first-of-type {
    border-top-left-radius: 10px;
  }
  &:last-of-type {
    border-top-right-radius: 10px;
  }
  &:not(:last-child) {
    border-right: 0.5px;
  }
`;

const RTd = styled.td`
  @media (prefers-color-scheme: light) {
    border-color: rgba(116, 116, 116, 1);
  }
  border: 1px solid;
  padding-top: 33px;
  padding-bottom: 40px;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  &:first-of-type {
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    border-bottom-right-radius: 10px;
  }
  &:not(:last-child) {
    border-right: 0.5px;
  }
`;

export default function RecruitingSection({ clubData }) {
  const match620 = useMediaQuery("(max-width:620px)");
  return (
    <SectionWrapper>
      <SectionTitle>모집 정보</SectionTitle>
      {match620 ? (
        <MobileRecruitingTabel clubData={clubData} />
      ) : (
        <RTable>
          <thead>
            <RTr>
              <RTh>모집 시기</RTh>
              <RTh>모집 인원</RTh>
              <RTh>모집 방식</RTh>
              <RTh>활동 기간</RTh>
            </RTr>
          </thead>
          <tbody>
            <RTr>
              <RTd>
                {clubData.recruit.recruitStartAt?.slice(0, 10)} ~{" "}
                {clubData.recruit.recruitEndAt?.slice(0, 10)}
              </RTd>
              <RTd>{clubData.recruit.recruitQuota}</RTd>
              <RTd>{clubData.recruit.recruitProcessDescription}</RTd>
              <RTd>{clubData.mandatoryActivatePeriod}</RTd>
            </RTr>
          </tbody>
        </RTable>
      )}
    </SectionWrapper>
  );
}
