"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import NoticeBanner from "@/app/components/notices/NoticeBanner";
import styled from "@emotion/styled";
import { getNoticeDetail } from "@/utils/fetch";
import NoticePopover from "@/app/components/notices/NoticePopover";
import { useRecoilValue } from "recoil";
import { isDarkModeState } from "@/utils/atoms";

const PageWrapper = styled.div`
  max-width: 1050px;
  width: 95%;
  margin: 1rem auto;
  margin-top: 32px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.isDarkMode ? "#2A3133" : "#E5E4DA")};
  border-radius: 10px;
  padding: 48px 30px 44px;
  @media (max-width: 425px) {
    padding: 26px 16px;
    margin-bottom: 44px;
  }
`;

const TitleBox = styled.div`
  border-radius: 10px;
  position: relative;
  padding-bottom: 64px;
  @media (max-width: 425px) {
    padding-bottom: 24px;
  }
`;

const Title = styled.div`
  font-family: GmarketSansBold;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.56px;
  margin-bottom: 1rem;
  word-break: keep-all;

  @media (max-width: 425px) {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.4px;
    margin-bottom: 0;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SubTitle = styled.div`
  text-align: center;
  font-family: Pretendard-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
  padding-right: 47px;
  border-right: 1px solid ${(props) => (props.isDarkMode ? "#fff" : "#242422")};
  margin-right: 20px;
  margin-left: 5px;
  @media (max-width: 425px) {
    margin: 0;
    padding: 0;
    border: none;
    font-size: 14px;
    margin-top: 10px;
  }
`;

const Divider = styled.hr`
  height: 3px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  border: none;
  margin-top: 22px;
  width: 100%;
  @media (max-width: 425px) {
    height: 1px;
  }
`;

const Attachment = styled.div`
  font-family: Pretendard-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  position: absolute;
  right: 46px;
  bottom: 22px;
  cursor: pointer;
  > span {
    color: #4381fb;
  }
  @media (max-width: 425px) {
    right: 0px;
    bottom: 55px;
    font-size: 14px;
  }
`;

const ContentBox = styled.div`
  padding: 0 25px;
  text-align: left;
  font-family: Pretendard-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  min-height: 760px;
  white-space: pre-line;
  word-break: keep-all;
  @media (max-width: 425px) {
    padding: 0 5px;
  }
`;

const NavWrapper = styled.div`
  margin-top: 56px;
  margin-bottom: 22px;
  @media (max-width: 425px) {
    margin-top: 32px;
  }
`;

const Navigator = styled.div`
  position: relative;
  height: 73px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 425px) {
    height: 46px;
    padding: 0;
  }
`;

const NavLabel = styled.div`
  text-align: left;
  margin-right: 30px;
  font-family: Pretendard-Regular;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 29px;
  word-break: keep-all;
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
    margin-right: 22px;
  }
`;

const NextTitle = styled.div`
  width: 100%;
  text-align: left;
  font-family: Pretendard-Regular;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BackToListBtn = styled.div`
  width: 98px;
  height: 39px;
  background: rgba(67, 76, 79, 1);
  color: #fff;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0em;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard-Regular;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  margin: 0 auto;
`;

export default function NoticePage() {
  const params = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["notice-detail", params],
    queryFn: () => getNoticeDetail(params.noticeId),
  });
  const router = useRouter();
  const pushToNotices = () => {
    router.push(`/notices`);
  };
  const pushToNotice = (id) => {
    router.push(`/notices/${id}`);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleAttachmentClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <>
      <NoticeBanner />
      <PageWrapper isDarkMode={isDarkMode}>
        <TitleBox>
          <Title>{data?.title}</Title>

          <SubTitleWrapper>
            <SubTitle isDarkMode={isDarkMode}>
              {data && data.writerName}
            </SubTitle>
            <SubTitle
              style={{
                border: "none",
              }}
            >
              {data && data.createdAt.substr(0, 10)}
            </SubTitle>
          </SubTitleWrapper>
          <Divider />
          <Attachment onClick={(e) => handleAttachmentClick(e)}>
            {data && data.extraFileDownloadDtos.length > 0 && (
              <>
                첨부파일 <span>({data.extraFileDownloadDtos.length})</span>
              </>
            )}
          </Attachment>
          <NoticePopover
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            files={data && data.extraFileDownloadDtos}
          />
        </TitleBox>
        <ContentBox>{data && data.content}</ContentBox>
        <NavWrapper>
          <Divider style={{ marginTop: 0 }} />
          <Navigator
            onClick={
              data && data.preNotice
                ? () => pushToNotice(data.preNotice.id)
                : null
            }
          >
            <NavLabel>이전글</NavLabel>
            <NextTitle>
              {data && data.preNotice
                ? data.preNotice.title
                : "이전 공지사항이 없습니다."}
            </NextTitle>
          </Navigator>
          <Divider style={{ marginTop: 0, height: "1px" }} />
          <Navigator
            onClick={
              data && data.postNotice
                ? () => pushToNotice(data.postNotice.id)
                : null
            }
          >
            <NavLabel>다음글</NavLabel>
            <NextTitle>
              {data && data.postNotice
                ? data.postNotice.title
                : "다음 공지사항이 없습니다."}
            </NextTitle>
          </Navigator>
          <Divider style={{ marginTop: 0 }} />
        </NavWrapper>
        <BackToListBtn onClick={pushToNotices}>목록으로</BackToListBtn>
      </PageWrapper>
    </>
  );
}
