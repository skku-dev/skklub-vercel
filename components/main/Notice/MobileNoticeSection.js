import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import Phrase from "../Common/Phrase";
import NoticeCard from "./NoticeCard";

const MobileNoticeWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5.2rem;
`;

const SmallMoreBtn = styled.div`
  background-color: #4e5353;
  width: 73px;
  height: 25px;
  font-weight: 400;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 40px;
  color: white;
`;
const SmallCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const CardDate = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
  font-weight: 400;
  font-size: 1rem;
  color: white;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 151.5%;
    top: 9px;
    right: 10px;
  }
`;

//제목이 길경우 짧게 파싱해주어야함
const CardTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  width: 224px;
  margin-bottom: 0.75rem;

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 15px;
    line-height: 151.5%;
    width: 150px;
    margin: 0 auto;
    margin-bottom: 2px;
  }
`;

const CardClubName = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: white;
  margin-bottom: 17px;

  @media (max-width: 425px) {
    font-weight: 400;
    line-height: 151.5%;
    font-size: 14px;
    margin-bottom: 0.75rem;
  }
`;

export default function MobileNoticeSection() {
  const matches_560 = useMediaQuery("(max-width:560px)");
  return (
    <MobileNoticeWrapper>
      <Phrase>공지사항</Phrase>
      <SmallMoreBtn>More</SmallMoreBtn>
      <SmallCardContainer>
        <NoticeCard imageUrl="/assets/images/one.png">
          <CardDate>Jan 9, 2021</CardDate>
          <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
          <CardClubName>못갗춘마디</CardClubName>
        </NoticeCard>
        <NoticeCard imageUrl="/assets/images/one.png">
          <CardDate>Jan 9, 2021</CardDate>
          <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
          <CardClubName>못갗춘마디</CardClubName>
        </NoticeCard>
        {!matches_560 && (
          <NoticeCard imageUrl="/assets/images/one.png"></NoticeCard>
        )}
      </SmallCardContainer>
    </MobileNoticeWrapper>
  );
}
