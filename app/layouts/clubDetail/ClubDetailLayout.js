'use client';

import styled from '@emotion/styled';
import RecruitingSection from '../../components/club-detail/RecruitingSection';
import InfoSection from '../../components/club-detail/InfoSection';
import AboutSection from '../../components/club-detail/AboutSection';
import ActivitySection from '../../components/club-detail/ActivitySection';
import ClubDetailBanner from '../../components/club-detail/ClubDetailBanner';
import { getClubDetail } from '@/utils/fetch';
import { useQuery } from '@tanstack/react-query';
import LoadingLayout from '../loading/LoadingLayout';

const ClubDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1050px;
  margin: 0 auto;
  margin-top: 3rem;
  gap: 30px;
  margin-bottom: 100px;
  @media (max-width: 1200px) {
    padding: 0 1rem;
  }
  @media (max-width: 425px) {
    gap: 24px;
    margin-top: 24px;
  }
`;

const InfoNActivityWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  > div:first-of-type {
    width: 40%;
  }
  > div:last-of-type {
    width: 60%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    > div:first-of-type {
      width: 100%;
    }
    > div:last-of-type {
      width: 100%;
    }
  }
`;

export default function ClubDetailLayout({ clubId }) {
  const { data, isLoading } = useQuery({
    queryKey: ['club-detail', clubId],
    queryFn: () => getClubDetail(clubId),
  });
  return isLoading ? (
    <LoadingLayout />
  ) : (
    <>
      <ClubDetailBanner clubData={data} />
      <ClubDetailContent>
        <AboutSection description={data?.clubDescription} />
        <InfoNActivityWrap>
          <InfoSection clubData={data} />
          <ActivitySection activityDescription={data?.activityDescription} />
        </InfoNActivityWrap>
      </ClubDetailContent>
    </>
  );
}
