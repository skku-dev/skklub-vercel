import styled from "@emotion/styled";
import ClubCarousel from "../../components/index/ClubCarousel";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import RecommendSection from "../../components/main/Recommend/RecommendSection";
import NoticeSection from "../../components/main/Notice/NoticeSection";
import BorrowSection from "../../components/main/Borrow/BorrowSection";
import MobileRecommendSection from "../../components/main/Recommend/MobileRecommendSection";
import MobileNoticeSection from "../../components/main/Notice/MobileNoticeSection";
import CampusSwitch from "../../components/common/CampusSwitch";

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const PromotionBanner = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #ffe195;
  font-size: 4rem;
  font-weight: 500;
  line-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  padding-bottom: 14rem;
  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }
`;

export default function Seoul() {
  const matches_768 = useMediaQuery("(max-width:768px)");
  const matches_680 = useMediaQuery("(max-width:680px)");

  return (
    <>
      <HomeContainer>
        <ClubCarousel />
      </HomeContainer>
      <CampusSwitch />
      <PromotionBanner>동아리 홍보배너</PromotionBanner>
      <ContentContainer>
        {matches_768 ? <MobileRecommendSection /> : <RecommendSection />}
        {matches_680 ? <MobileNoticeSection /> : <NoticeSection />}
        <BorrowSection />
      </ContentContainer>
    </>
  );
}
