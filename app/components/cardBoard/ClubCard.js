import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import ClubCardHeart from "./ClubCardHeart";
import { useEffect } from "react";

const CustomCard = styled.div`
  width: 174px;
  border-radius: 1rem;
  position: relative;
  @media (max-width: 425px) {
    width: 164px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding: 0 0px;
`;

const ClubName = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: GmarketSansBold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  

  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

const CardType = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
  margin-top: 0.5rem;

  @media (max-width: 425px) {
    margin-top: 0;
    padding: 0 10px;
  }
`;

export default function ClubCard({ club }) {
  const router = useRouter();
  const pathname = usePathname();
  const match425 = useMediaQuery("(max-width:425px)");

  const [_, location, a] = pathname.split("/");

  const handleCardClick = (clubId) => {
    router.push(`/${location}/${clubId}`);
  };


  return (
    <CustomCard key={club.name} onClick={() => handleCardClick(club.id)}>
      <Image
        src={club.logo.url}
        width={match425 ? 164 : 174}
        height={match425 ? 164 : 174}
        alt="notice thumbnail"
        style={{
          borderRadius: "10px",
        }}
      />
      <CardHeader>
        <ClubName>{club.name}</ClubName>
        <ClubCardHeart clubName={club.name} />
      </CardHeader>
      <CardType>{`${club.belongs}/${club.briefActivityDescription}`}</CardType>
    </CustomCard>
  );
}