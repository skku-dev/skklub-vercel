import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionTitle } from "./common";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";

const InfoContentWrapper = styled.div`
  padding-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoContentRow = styled.div`
  display: flex;
  gap: 12px;
`;

const BoldLabel = styled.div`
  width: 40%;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  word-break: keep-all;
`;

const Label = styled.div`
  width: 60%;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
`;

const IGAdressContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export default function InfoSection({ clubData }) {
  console.log(clubData);
  const isIGUrl = (url) => (url ? url.includes("instagram") : false);
  const isIGAccount = (url) => (url ? url[0] === "@" : false);
  const getIGID = (url) => {
    if (isIGUrl(url)) {
      return url.split("/")[3];
    } else if (isIGAccount(url)) {
      return url;
    } else {
      return clubData.name;
    }
  };

  return (
    <SectionWrapper>
      <SectionTitle>동아리 정보</SectionTitle>

      <InfoContentWrapper>
        <InfoContentRow>
          <BoldLabel>중분류</BoldLabel>
          <Label>{clubData.clubType}</Label>
        </InfoContentRow>
        <InfoContentRow>
          <BoldLabel>소속 캠퍼스</BoldLabel>
          <Label>{clubData.campus}캠퍼스</Label>
        </InfoContentRow>
        <InfoContentRow>
          <BoldLabel>위치</BoldLabel>
          <Label>{clubData.roomLocation}</Label>
        </InfoContentRow>
        <InfoContentRow>
          <BoldLabel>활동인원</BoldLabel>
          <Label>{clubData.memberAmount}</Label>
        </InfoContentRow>
        <InfoContentRow>
          <BoldLabel>모임시간</BoldLabel>
          <Label>{clubData.regularMeetingTime}</Label>
        </InfoContentRow>
        <InfoContentRow>
          <BoldLabel>대표자 이름</BoldLabel>
          <Label>{clubData.presidentName}</Label>
        </InfoContentRow>
        <InfoContentRow>
          <BoldLabel>대표자 연락처</BoldLabel>
          <Label>{clubData.presidentContact}</Label>
        </InfoContentRow>
        <InfoContentRow>
          <BoldLabel>동아리 페이지</BoldLabel>
          <Label>
            <Link
              href={
                isIGAccount(clubData.webLink1)
                  ? `https://www.instagram.com/${clubData.webLink1.slice(1)}`
                  : clubData.webLink1 ||
                    "https://skklub-vercel.vercel.app/seoul"
              }
              style={{ width: "100%", wordBreak: "break-all" }}
            >
              {isIGUrl(clubData.webLink1) ? (
                <IGAdressContainer>
                  <InstagramIcon /> {"@" + getIGID(clubData.webLink1)}
                </IGAdressContainer>
              ) : isIGAccount(clubData.webLink1) ? (
                <IGAdressContainer>
                  <InstagramIcon /> {clubData.webLink1}
                </IGAdressContainer>
              ) : (
                clubData.webLink1
              )}
            </Link>
          </Label>
        </InfoContentRow>
      </InfoContentWrapper>
    </SectionWrapper>
  );
}
