import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import NoticeCard from "./NoticeCard";

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 812px) {
    gap: 20px;
  }
  @media (max-width: 680px) {
    justify-content: space-around;
    gap: 16px;
  }
`;

export default function NoticeCardsList({ noticesData }) {
  const match1024 = useMediaQuery("(max-width:1024px)");
  const match768 = useMediaQuery("(max-width:768px)");
  const match680 = useMediaQuery("(max-width:680px)");
  return (
    <CardsWrapper>
      {noticesData?.content
        .slice(0, match680 ? 2 : match768 ? 3 : match1024 ? 4 : 5)
        .map((item) => (
          <NoticeCard key={item.noticeId} item={item} />
        ))}
    </CardsWrapper>
  );
}
