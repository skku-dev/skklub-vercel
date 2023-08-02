"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import useURLParse from "@/hooks/useURLParse";

const LoadingBanner = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingLabel = styled.div`
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 425px) {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export default function LoadingLayout() {
  const { isSuwon } = useURLParse();
  return (
    <LoadingBanner>
      {isSuwon ? (
        <Image
          src="/assets/animations/loading_icon_suwon.gif"
          width={100}
          height={100}
          alt="Loading Icon"
        />
      ) : (
        <Image
          src="/assets/animations/loading_icon_seoul.gif"
          width={100}
          height={100}
          alt="Loading Icon"
        />
      )}

      <LoadingLabel>Loading...</LoadingLabel>
    </LoadingBanner>
  );
}
