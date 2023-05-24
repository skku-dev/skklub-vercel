import styled from "@emotion/styled";
import { CLUBS_DUMMY_DATA } from "../../utils/constants";
import { useRouter } from "next/router";

const BoardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ClubCard = styled.div`
  width: 276px;
  height: 276px;
  background-color: #303030eb;
  border-radius: 1rem;
  position: relative;
  padding-left: 22px;
  padding-right: 20px;
  padding-bottom: 18px;
  display: flex;
  align-items: end;
  @media (max-width: 930px) {
    width: 163px;
    height: 163px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ClubCardName = styled.div`
  font-weight: 500;
  font-size: 3rem;
  line-height: 120%;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ClubCardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ClubCardType = styled.div`
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 160%;
`;

const Heart = styled.div`
  width: 22px;
  height: 20px;
  background-color: red;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  row-gap: 30px;
  column-gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    gap: 15px;
  }
`;

export default function CardBoard({ cardsData }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [_, location, a] = currentPath.split("/");
  const handleCardClick = (clubId) => {
    router.push(`/${location}/${clubId}`);
  };
  return (
    <BoardWrapper>
      <CardGrid>
        {cardsData.map((club) => (
          <ClubCard
            key={club.clubName}
            onClick={() => handleCardClick(club.clubId)}
          >
            <ClubCardName>{club.clubName}</ClubCardName>
            <ClubCardFooter>
              <ClubCardType>{club.categories.join("/")}</ClubCardType>
              <Heart />
            </ClubCardFooter>
          </ClubCard>
        ))}
      </CardGrid>
    </BoardWrapper>
  );
}
