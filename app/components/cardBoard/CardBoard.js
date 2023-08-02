"use client";

import { categoryState } from "@/utils/atoms";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import ClubCard from "./ClubCard";
import useClubLike from "@/hooks/useClubLike";

const BoardWrapper = styled.div`
  max-width: 990px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  row-gap: 30px;
  column-gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 819px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    gap: 16px;
  }
`;

export default function CardBoard({ cardsData }) {
  const category = useRecoilValue(categoryState);
  const [likedClubs, _] = useClubLike();

  const filteredClubs = (category) => {
    if (category === "전체보기") {
      return cardsData;
    } else if (category === "하트") {
      return cardsData.filter((card) => likedClubs.includes(card.name));
    } else {
      return cardsData.filter((card) => card.belongs === category);
    }
  };

  return (
    <BoardWrapper>
      <CardGrid>
        {filteredClubs(category).map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </CardGrid>
    </BoardWrapper>
  );
}
