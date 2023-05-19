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
import Image from "next/image";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh; //모바일 적용해야함
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  /* height: 1440px; */
  padding: 0 1rem;
  margin: 0 auto;
  padding-bottom: 14rem;
  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }
  /* background-color: grey; */
`;

export const useCustomMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function Seoul() {
  // const matches_950 = useCustomMediaQuery(950);

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