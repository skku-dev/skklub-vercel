import { useState } from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getNoticeListwithRole } from "@/utils/fetch";
import NoticeTableHeader from "./NoticeTableHeader";
import NoticeTablePagination from "./NoticeTablePagination";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { isDarkModeState } from "@/utils/atoms";

const TableWrapper = styled.div`
  width: 100%;
  padding: 27px 44px;
  background-color: ${(props) =>
    props.isDarkMode
      ? "#2A3133"
      : ({ theme }) => theme.palette.background.paper};
  margin-top: 18px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  @media (max-width: 768px) {
    padding: 19px 13px;
    margin-top: 10px;
    gap: 10px;
  }
`;

const NoticeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  gap: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 80px;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
`;
const NoticeRowItem = styled.div`
  font-size: 18px;
  line-height: 40px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard-Regular;

  &.first-row {
    flex: 0.5;
    @media (max-width: 768px) {
      color: ${(props) => (props.isDarkMode ? "#DFE3E4" : "#585858")};
    }
  }
  &.second-row {
    cursor: pointer;
    display: block;
    flex: 5;
    justify-content: flex-start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
  }
  &.third-row {
    flex: 2;
    font-size: 16px;
  }
  &.last-row {
    flex: 1.2;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    &.second-row {
      padding-left: 0px;
    }
  }
`;

const MobileItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MobileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const MobileInfoWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 8px;
    margin-bottom: 10px;
  }
`;

const MobileItem = styled.div`
  font-weight: 400;
  font-size: 0.75px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const MobileDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.isDarkMode ? "#fff" : "#242422")};
`;

export default function NoticeTableBody({ role }) {
  const router = useRouter();
  const pushToNoticeDetail = (nextLocation) => {
    router.push(`${nextLocation}`);
  };
  const match768 = useMediaQuery("(max-width:768px)");
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery({
    queryKey: ["notices", role, page],
    queryFn: () => getNoticeListwithRole({ role, page }),
  });
  const handlePageChange = (e, value) => {
    e.preventDefault();
    setPage(value);
  };
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <TableWrapper isDarkMode={isDarkMode}>
      {!match768 && <NoticeTableHeader />}
      {data &&
        data.content.map((item) => (
          <NoticeRow
            key={item.noticeId}
            onClick={() => pushToNoticeDetail(`/notices/${item.noticeId}`)}
          >
            {match768 ? (
              <>
                <MobileItemWrapper>
                  <NoticeRowItem
                    isDarkMode={isDarkMode}
                    className="first-row"
                    style={{ alignItems: "start" }}
                  >
                    {item.noticeId}
                  </NoticeRowItem>
                  <MobileContentWrapper>
                    <NoticeRowItem className="second-row">
                      {item.title}
                    </NoticeRowItem>
                    <MobileInfoWrapper>
                      <MobileItem>{item.writerName}</MobileItem>
                      <MobileItem>{item.createdAt.substr(0, 10)}</MobileItem>
                    </MobileInfoWrapper>
                  </MobileContentWrapper>
                </MobileItemWrapper>

                <MobileDivider isDarkMode={isDarkMode} />
              </>
            ) : (
              <>
                <NoticeRowItem className="first-row">
                  {item.noticeId}
                </NoticeRowItem>
                <NoticeRowItem className="second-row">
                  {item.title}
                </NoticeRowItem>
                <NoticeRowItem className="third-row">
                  {item.writerName}
                </NoticeRowItem>
                <NoticeRowItem className="last-row">
                  {item.createdAt.substr(0, 10)}
                </NoticeRowItem>
              </>
            )}
          </NoticeRow>
        ))}
      <NoticeTablePagination
        totalPages={data && data.totalPages}
        page={page}
        handlePageChange={handlePageChange}
      />
    </TableWrapper>
  );
}
