"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import darkLogo from "@/public/assets/images/skklub_logo_dark.png";
import lightLogo from "@/public/assets/images/skklub_logo_light.png";
import LocationSelectBtn from "./components/start/LocationSelectBtn";
import { useRecoilValue } from "recoil";
import { initialIsLoadingState, isDarkModeState } from "@/utils/atoms";
import { useMediaQuery } from "@mui/material";
import LoadingLayout from "./layouts/loading/LoadingLayout";
import { useEffect, useRef, useState } from "react";

const StartPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Mp4 = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const BgVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const MainContents = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Phrase = styled.h2`
  text-align: center;
  font-family: GmarketSansBold;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-bottom: 20px;
  word-break: keep-all;
  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

const Intro = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;
  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

const BtnContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 40px;
  margin-top: 65px;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
  }
`;

export default function Home() {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const initialIsLoading = useRecoilValue(initialIsLoadingState);
  const match425 = useMediaQuery("(max-width:425px)");
  const [videoPlayed, setVideoPlayed] = useState(false);
  const vidRef = useRef();

  useEffect(() => {
    if (vidRef.current && !videoPlayed) {
      // 사용자 상호 작용 후에 비디오를 재생
      const playVideo = () => {
        vidRef.current.play();
      };

      // 모바일 디바이스에서 자동 재생을 음소거로 설정
      if (match425) {
        vidRef.current.muted = true;
        // 사용자 상호 작용 후에 비디오를 재생
        window.addEventListener("focus", playVideo);
      } else {
        playVideo();
      }
    }
  }, [vidRef.current, videoPlayed, match425]);

  if (initialIsLoading) {
    return <LoadingLayout />;
  }
  return (
    <StartPageWrapper isDarkMode={isDarkMode}>
      {match425 ? (
        <Mp4 autoPlay={true} muted={true} controls="" ref={vidRef}>
          <source
            src={
              isDarkMode
                ? "/assets/animations/mob_loading_dark.mp4"
                : "/assets/animations/mob_loading_light.mp4"
            }
            type="video/mp4"
          />
        </Mp4>
      ) : (
        <Mp4 autoPlay={true} muted={true} controls="" ref={vidRef}>
          <source
            src={
              isDarkMode
                ? "/assets/animations/web_loading_dark.mp4"
                : "/assets/animations/web_loading_light.mp4"
            }
            type="video/mp4"
          />
        </Mp4>
      )}
      <MainContents>
        <Phrase>성균관대학교 동아리를 한눈에!</Phrase>
        <Image
          src={isDarkMode ? darkLogo : lightLogo}
          alt="SKKLUB LOGO"
          placeholder="blur"
          style={{
            height: "auto",
            width: "70vw",
            maxWidth: "1430px",
            minWidth: "310px",
          }}
        />
        <Intro>{`동아리 안내 서비스 '스클럽'`}</Intro>

        <BtnContainer>
          <LocationSelectBtn
            label="명륜"
            nextLocation="seoul"
            hoverColor="#50CFB1"
          />
          <LocationSelectBtn
            label="율전"
            nextLocation="suwon"
            hoverColor="#80A4FF"
          />
        </BtnContainer>
      </MainContents>
    </StartPageWrapper>
  );
}
