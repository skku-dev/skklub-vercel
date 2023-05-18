import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import NoticeRadioBtns from "../components/notices/NoticeRadioBtns";
import NoticeTableHeader from "../components/notices/NoticeTableHeader";
import NoticeTableBody from "../components/notices/NoticeTableBody";
import NoticeTablePagination from "../components/notices/NoticeTablePagination";

const NoticesBanner = styled.div`
  width: 100%;
  height: 378px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 72%;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 3rem;
  line-height: 2rem;
  @media (max-width: 768px) {
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 72%;
  }
`;

const NoticesContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 300px;
  @media (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export default function Notices() {
  const [page, setPage] = useState(1);
  const match768 = useMediaQuery("(max-width:768px)");
  const handlePageChange = (e, value) => {
    e.preventDefault();
    setPage(value);
  };

  return (
    <>
      <NoticesBanner>
        <SubTitle>성균관대학교 동아리연합회</SubTitle>
        <Title>공지사항</Title>
      </NoticesBanner>
      <NoticesContentWrapper>
        <NoticeRadioBtns />
        {!match768 && <NoticeTableHeader />}
        <NoticeTableBody />
        <NoticeTablePagination
          page={page}
          handlePageChange={handlePageChange}
        />
      </NoticesContentWrapper>
    </>
  );
}
