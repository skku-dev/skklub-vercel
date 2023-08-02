import styled from "@emotion/styled";

const RTable = styled.table`
  padding-top: 4px;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
`;

const RTr = styled.tr`
  &:last-of-type {
    td:first-of-type {
      border-bottom-left-radius: 10px;
    }
    td:last-of-type {
      border-bottom-right-radius: 10px;
    }
  }
`;

const RTh = styled.th`
  @media (prefers-color-scheme: light) {
    border-color: rgba(116, 116, 116, 1);
  }
  border: 1px solid;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: Pretendard;
  font-style: normal;
  line-height: 160%;
  height: 76px;

  &:first-of-type {
    border-top-left-radius: 10px;
    font-weight: 600;
    border-right: 0.5px;
  }
  &:last-of-type {
    border-top-right-radius: 10px;
    font-weight: 400;
  }
`;

const RTd = styled.td`
  @media (prefers-color-scheme: light) {
    border-color: rgba(116, 116, 116, 1);
  }
  border: 1px solid;
  border-top: 0.5px;
  padding-top: 33px;
  padding-bottom: 40px;
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  line-height: 160%; /* 25.6px */
  font-size: 14px;

  &:first-of-type {
    font-weight: 600;
    border-right: 0.5px;
  }
  &:last-of-type {
    font-weight: 400;
  }
`;

export default function MobileRecruitingTabel({ clubData }) {
  return (
    <RTable>
      <thead>
        <RTr>
          <RTh>모집 시기</RTh>
          <RTh>
            {clubData.recruit.recruitStartAt?.slice(0, 10)} ~{" "}
            {clubData.recruit.recruitEndAt?.slice(0, 10)}
          </RTh>
        </RTr>
      </thead>
      <tbody>
        <RTr>
          <RTd>모집 인원</RTd>
          <RTd>{clubData.recruit.recruitQuota}</RTd>
        </RTr>
        <RTr>
          <RTd>모집 방식</RTd>
          <RTd>{clubData.recruit.recruitProcessDescription}</RTd>
        </RTr>
        <RTr>
          <RTd>활동 기간</RTd>
          <RTd>{clubData.mandatoryActivatePeriod}</RTd>
        </RTr>
      </tbody>
    </RTable>
  );
}
