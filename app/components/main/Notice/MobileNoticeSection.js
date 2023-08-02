import styled from "@emotion/styled";
import SectionTitle from "../SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getNoticeThumbnailCard } from "@/utils/fetch";
import NoticesRouterBtn from "./MoreBtn";
import NoticeCardsList from "./NoticeCardsList";

const MobileNoticeWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5.2rem;
`;

export default function MobileNoticeSection() {
  const { isLoading, data } = useQuery({
    queryKey: ["notice-thumbnail"],
    queryFn: () => getNoticeThumbnailCard(),
  });

  return (
    <MobileNoticeWrapper>
      <SectionTitle>공지사항</SectionTitle>
      <NoticesRouterBtn />
      <NoticeCardsList noticesData={data} />
    </MobileNoticeWrapper>
  );
}
