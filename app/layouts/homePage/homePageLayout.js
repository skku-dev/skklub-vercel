"use client";

import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import RecommendSection from "@/app/components/main/Recommend/RecommendSection";
import NoticeSection from "@/app/components/main/Notice/NoticeSection";
import BorrowSection from "@/app/components/main/Borrow/BorrowSection";
import MobileRecommendSection from "@/app/components/main/Recommend/MobileRecommendSection";
import MobileNoticeSection from "@/app/components/main/Notice/MobileNoticeSection";
import ClubCarousel from "@/app/components/main/ClubCarousel";
import useScreenHeight from "@/hooks/useScreenHeight";
import Fadeinout from "@/app/components/main/Fadeinout";

const FullScreenWrapper = styled.div`
  width: 100%;
  min-height: ${(props) => props.height};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    height: 600px;
  }
`;

const PromotionBanner = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${(props) =>
    props.isSuwon
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.secondary.main};
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

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  padding-bottom: 100px;
  @media (max-width: 990px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: 425px) {
    padding: 0 1rem;
    padding-bottom: 100px;
  }
`;

export default function HomePageLayout() {
  const matches_768 = useMediaQuery("(max-width:768px)");
  const matches_680 = useMediaQuery("(max-width:680px)");
  const [homeContainerHeight] = useScreenHeight();
  const [showFadeinout, setFadeinout] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeinout(false);
    }, 750);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Fadeinout showFadeinout={showFadeinout} />
      <FullScreenWrapper height={`${homeContainerHeight}px`}>
        <ClubCarousel />
      </FullScreenWrapper>
      {/* <PromotionBanner isSuwon={isSuwon}>동아리 홍보배너</PromotionBanner> */}
      <ContentWrapper>
        {matches_768 ? <MobileRecommendSection /> : <RecommendSection />}
        {matches_680 ? <MobileNoticeSection /> : <NoticeSection />}
        <BorrowSection />
      </ContentWrapper>
    </>
  );
}
