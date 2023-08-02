"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 202px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img404 = styled.img`
  width: 330px;
  margin-left: -10px;
`;

const ErrorMessage = styled.div`
  font-size: 24px;
  margin: 0 15px;
  word-break: keep-all;
  text-align: center;
  margin: 20px 0;
  > p {
    font-size: 16px;
  }
`;

const Styledbtn = styled.div`
  width: 180px;
  height: 50px;
  line-height: 50px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    > a {
      color: #fff;
    }
  }
  > a {
    color: #000;
    font-size: 20px;
    font-weight: 500;
  }
`;

export default function NotFoundPage() {
  return (
    <Container>
      <Img404 src="/assets/images/404.png" />
      <ErrorMessage>
        Page Not Found <p>요청하신 페이지가 존재하지 않습니다.</p>
      </ErrorMessage>
      <Styledbtn>
        <Link href="/">{`홈으로 이동 >`}</Link>
      </Styledbtn>
    </Container>
  );
};