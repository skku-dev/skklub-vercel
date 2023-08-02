"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import NoticeRadioBtns from "@/app/components/notices/NoticeRadioBtns";
import NoticeTableBody from "@/app/components/notices/NoticeTableBody";

const NoticesBanner = styled.div`
  width: 100%;
  height: 236px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const SubTitle = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  text-align: center;
  line-height: normal;
`;
const Title = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 2rem;
  font-family: GmarketSansBold;
  font-style: normal;
  line-height: normal;
  @media (max-width: 768px) {
    font-weight: 500;
  }
`;

const NoticesContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 100px;
  @media (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export default function Notices() {
  const [role, setRole] = useState("");

  return (
    <>
      <NoticesBanner>
        <SubTitle>성균관대학교 동아리연합회</SubTitle>
        <Title>공지사항</Title>
      </NoticesBanner>
      <NoticesContentWrapper>
        <NoticeRadioBtns value={role} setValue={setRole} />
        <NoticeTableBody role={role} />
      </NoticesContentWrapper>
    </>
  );
}
