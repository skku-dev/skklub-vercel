"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import darkLogo from "@/public/assets/images/skklub_logo_dark.png";
import lightLogo from "@/public/assets/images/skklub_logo_light.png";
import LocationSelectBtn from "./components/start/LocationSelectBtn";
import useThemeModeDetect from "@/hooks/useThemeModeDetect";

const StartPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-image: url("/assets/animations/web_loading.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 425px) {
    background-image: url("/assets/animations/mobile-loading.gif");
  } */
  overflow: hidden;
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
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
  const isDarkMode = useThemeModeDetect();
  return (
    <StartPageWrapper>
      <VideoWrapper>
        <BgVideo autoPlay muted>
          <source src="/assets/animations/web_loading.mkv" type="video/mp4" />
          Browser not supported
        </BgVideo>
      </VideoWrapper>
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
