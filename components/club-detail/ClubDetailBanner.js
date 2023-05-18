import styled from "@emotion/styled";
import Image from "next/image";
import clubLogoImg from "../../public/assets/images/club_logo.png";
import { useMediaQuery } from "@mui/material";

const BannerWrapper = styled.div`
  width: 100%;
  height: 378px;
  background-color: #a0211d33;
  padding: 1rem;
  display: flex;
  justify-content: center;
  padding-top: 130px;
  @media (max-width: 425px) {
    height: 160px;
    padding-top: 35px;
  }
`;

const BannerContent = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const BannerMainContent = styled.div`
  margin-bottom: 1.5rem;
  display: flex;

  @media (max-width: 425px) {
    margin-bottom: 0.75rem;
  }
`;

const ClubInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.5rem;
  @media (max-width: 425px) {
    margin-left: 0.5rem;
  }
`;

const ClubSubInfoWraper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  gap: 1rem;
`;

const RecruitStatus = styled.div`
  width: 91px;
  height: 30px;
  background: #2fb24c;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  @media (max-width: 425px) {
    width: 42px;
    height: 18px;
    font-weight: 700;
    font-size: 10px;
    line-height: 107.5%;
    border-radius: 3px;
  }
`;

const PlaceInfo = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
  }
`;

const ClubName = styled.div`
  font-weight: 500;
  font-size: 64px;
  line-height: 107.5%;

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 107.5%;
  }
`;

const BannerSubContent = styled.div`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 20px;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }
`;

export default function ClubDetailBanner() {
  const match425 = useMediaQuery("(max-width:425px)");
  return (
    <BannerWrapper>
      <BannerContent>
        <BannerMainContent>
          <Image
            src={clubLogoImg}
            alt="CLUB_LOGO"
            placeholder="blur"
            style={{
              height: match425 ? "59px" : "124px",
              width: match425 ? "59px" : "124px",
            }}
          />
          <ClubInfoWrapper>
            <ClubSubInfoWraper>
              <RecruitStatus>모집중</RecruitStatus>
              <PlaceInfo>명륜 캠퍼스</PlaceInfo>
            </ClubSubInfoWraper>
            <ClubName>못갖춘 마디</ClubName>
          </ClubInfoWrapper>
        </BannerMainContent>
        <BannerSubContent>
          어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌
        </BannerSubContent>
      </BannerContent>
    </BannerWrapper>
  );
}
