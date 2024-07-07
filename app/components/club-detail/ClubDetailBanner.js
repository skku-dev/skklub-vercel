'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useClubLike from '@/hooks/useClubLike';
import BannerSubcontent from './BannerSubcontent';
import useURLParse from '@/hooks/useURLParse';

const BannerWrapper = styled.div`
  width: 100%;
  height: 360px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  display: flex;
  justify-content: center;
  padding-top: 128px;
  @media (max-width: 425px) {
    height: 258px;
    padding-top: 16px;
    flex-direction: column;
  }
`;

const BannerContent = styled.div`
  width: 100%;
  max-width: 1050px;
  height: 174px;
  display: flex;
  gap: 30px;
  @media (max-width: 425px) {
    height: 100px;
    justify-content: center;
    gap: 16px;
  }
`;

const InfoWrapper = styled.div`
  position: relative;
  flex: 1;
  height: 174px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media (max-width: 425px) {
    height: auto;
    justify-content: end;
    padding-bottom: 9px;
  }
`;

const StatusWrapper = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  @media (max-width: 425px) {
    gap: 8px;
  }
`;

const PlaceStatus = styled.div`
  width: 100px;
  height: 34px;
  background: ${(props) =>
    props.isSuwon
      ? props.theme.palette.primary.main
      : props.theme.palette.secondary.main};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: GmarketSansBold;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  @media (max-width: 425px) {
    width: 56px;
    height: 23px;
    font-size: 0.75rem;
  }
`;

const PlaceInfo = styled.div`
  color: #fff;
  font-family: GmarketSansBold;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 28.8px */

  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: end;
  margin-top: 18px;
  @media (max-width: 425px) {
    margin-top: 8px;
  }
`;

const Heart = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isLiked ? '#da5d65' : '#b7b7b7')};
  transition: color 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;
const ClubName = styled.div`
  color: #fff;
  font-family: GmarketSansBold;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export default function ClubDetailBanner({ clubData }) {
  const match425 = useMediaQuery('(max-width:425px)');

  const [likedClubs, handleHeartClick] = useClubLike();

  const { isSuwon } = useURLParse();

  return (
    <BannerWrapper>
      <BannerContent>
        <Image
          src={clubData?.logo?.url}
          width={match425 ? 100 : 174}
          height={match425 ? 100 : 174}
          alt="CLUB_LOGO"
          style={{
            borderRadius: '10px',
          }}
        />
        <InfoWrapper>
          <StatusWrapper>
            <PlaceStatus isSuwon={isSuwon}>
              <PlaceInfo>{clubData.campus} 캠퍼스</PlaceInfo>
            </PlaceStatus>
          </StatusWrapper>
          <NameWrapper>
            <ClubName>{clubData.name}</ClubName>
            <Heart
              isLiked={likedClubs.includes(clubData.name)}
              onClick={(event) => handleHeartClick(event, clubData.name)}
            >
              <FavoriteIcon />
            </Heart>
          </NameWrapper>

          {!match425 && <BannerSubcontent headLine={clubData.headLine} establishAt={clubData.establishAt} />}
        </InfoWrapper>
      </BannerContent>
      {match425 && <BannerSubcontent weblink={clubData.webLink1} establishAt={clubData.establishAt} />}
    </BannerWrapper>
  );
}
