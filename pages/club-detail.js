import styled from "@emotion/styled";

import RecruitingSection from "../components/club-detail/RecruitingSection";
import InfoSection from "../components/club-detail/InfoSection";
import AboutSection from "../components/club-detail/AboutSection";
import ActivitySection from "../components/club-detail/ActivitySection";
import ClubDetailBanner from "../components/club-detail/ClubDetailBanner";

const ClubDetailContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  gap: 30px;
  margin-bottom: 300px;
  padding: 0 1rem;
`;

export default function ClubDetail() {
  return (
    <>
      <ClubDetailBanner />
      <ClubDetailContent>
        <RecruitingSection />
        <InfoSection />
        <AboutSection />
        <ActivitySection />
      </ClubDetailContent>
    </>
  );
}
