import styled from "@emotion/styled";
import useURLParse from "@/hooks/useURLParse";
import { useRouter } from "next/navigation";

const ClubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #303030;
  font-family: GmarketSansBold;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 32px */
  letter-spacing: -0.4px;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  word-break: keep-all;
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  text-align: center;
  max-height: 70%;
  /* word-spacing: 100vw; */

  @media (max-width: 425px) {
    font-size: 0.875rem;
    line-height: 120%; /* 16.8px */
  }
`;

const ClubType = styled.div`
  margin-bottom: 20px;
  color: #303030;
  text-align: center;
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 25.2px */
  letter-spacing: -0.14px;

  @media (max-width: 425px) {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 151.5%; /* 18.18px */
    margin-bottom: 0;
    padding-bottom: 9px;
  }
`;

const RecommendationClub = styled.div`
  position: relative;
  width: 174px;
  height: 174px;
  background-color: rgba(80, 207, 177, 1);
  border-radius: 10px;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    background-color: #fff;
    flex: 1;
  }

  @media (max-width: 425px) {
    flex: none;
    width: 106px;
    height: 106px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 375px) {
    width: 96px;
    height: 96px;
  }
`;

export default function RecommendationClubCard({ clubData }) {
  const router = useRouter();
  const { location } = useURLParse();
  const handleCardClick = () => {
    router.push(`${location}/${clubData.id}`);
  };

  return (
    <RecommendationClub onClick={handleCardClick}>
      <ClubTitle>{clubData.name}</ClubTitle>
      <ClubType>{clubData.campus}</ClubType>
    </RecommendationClub>
  );
}
