"use client";

import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../SectionTitle";
import SectionDesc from "../SectionDesc";
import { getNoticeThumbnailCard } from "@/utils/fetch";
import NoticesRouterBtn from "./MoreBtn";
import NoticeCardsList from "./NoticeCardsList";

const NoticeWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10rem;
`;

const NoticeDescWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export default function NoticeSection() {
  const { isLoading, data } = useQuery({
    queryKey: ["notice-thumbnail"],
    queryFn: () => getNoticeThumbnailCard(),
  });

  return (
    <NoticeWrapper>
      <SectionTitle>공지사항</SectionTitle>
      <NoticeDescWrap>
        <SectionDesc>
          성균관대학교 동아리연합회에서 공지사항을 알려드립니다! <br />
          동아리와 학교에 관한 새로운 소식들을 들어보세요!
        </SectionDesc>
        <NoticesRouterBtn />
      </NoticeDescWrap>
      <NoticeCardsList noticesData={data} />
    </NoticeWrapper>
  );
}
