import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionTitle } from "./common";
import { useMediaQuery } from "@mui/material";

const DetailContent = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  white-space: pre-line;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  word-break: keep-all;
`;

export default function ActivitySection({ activityDescription }) {
  return (
    <SectionWrapper>
      <SectionTitle>활동 내용</SectionTitle>
      <DetailContent>
        {activityDescription || "활동 내용이 아직 없습니다."}
      </DetailContent>
    </SectionWrapper>
  );
}
