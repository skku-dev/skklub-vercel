"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import NoticeRadioBtns from "@/app/components/notices/NoticeRadioBtns";
import NoticeTableBody from "@/app/components/notices/NoticeTableBody";
import NoticeBanner from "../components/notices/NoticeBanner";

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
      <NoticeBanner />
      <NoticesContentWrapper>
        <NoticeRadioBtns value={role} setValue={setRole} />
        <NoticeTableBody role={role} />
      </NoticesContentWrapper>
    </>
  );
}
