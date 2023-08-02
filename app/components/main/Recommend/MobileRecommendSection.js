import styled from "@emotion/styled";
import SectionTitle from "../SectionTitle";
import useURLParse from "../../../../hooks/useURLParse";
import { RecommendationContent } from "./RecommendationContent";
import { getClubRecommendation } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";
import RecommendationClubCard from "./RecommendationClub";
import useRandomRecommendation from "@/hooks/useRendomRecommendation";
import ThemeContent from "./ThemeContent";
import { useMediaQuery } from "@mui/material";

const MobileRecommendWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const SmallContentContainer = styled.div`
  border-radius: 10px;
  background: #fc7b95;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
`;

export default function MobileRecommendSection() {
  const { isSuwon } = useURLParse();

  const [category, description, hashtags] = useRandomRecommendation();

  const matches_360 = useMediaQuery("(max-width:360px)");

  const { data } = useQuery({
    queryFn: () => getClubRecommendation(isSuwon ? "율전" : "명륜", category),
    queryKey: ["club-recommendation", category],
  });

  return (
    <MobileRecommendWrapper>
      <SectionTitle>오늘의 추천동아리</SectionTitle>
      <SmallContentContainer>
        <ThemeContent
          category={category}
          description={description}
          hashtags={hashtags}
        />
        <RecommendationContent>
          {data?.slice(0, matches_360 ? 2 : 3).map((club) => (
            <RecommendationClubCard key={club.id} clubData={club} />
          ))}
        </RecommendationContent>
      </SmallContentContainer>
    </MobileRecommendWrapper>
  );
}
