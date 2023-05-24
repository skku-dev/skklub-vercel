import Image from "next/image";
import styled from "@emotion/styled";
import logoImg from "../public/assets/images/skklub_logo_m.png";
import {
  SeoulSelectBtn,
  SuwonSelectBtn,
} from "../components/start/LocationSelectBtn.stories";

const StartPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("/assets/animations/web_loading.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 425px) {
    background-image: url("/assets/animations/mobile-loading.gif");
  }
`;

const MainContents = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhraseBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Phrase = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 2rem;
  word-break: keep-all;
  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 8%;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export default function Home() {
  return (
    <StartPageWrapper>
      <MainContents>
        <Image
          src={logoImg}
          alt="SKKLUB LOGO"
          placeholder="blur"
          style={{
            height: "auto",
            width: "70vw",
            maxWidth: "1430px",
            minWidth: "310px",
          }}
        ></Image>
        <PhraseBtnWrapper>
          <Phrase>성균관대학교 동아리를 한눈에!</Phrase>
          <BtnWrapper>
            <SeoulSelectBtn nextLocation="seoul">명륜</SeoulSelectBtn>
            <SuwonSelectBtn nextLocation="suwon">율전</SuwonSelectBtn>
          </BtnWrapper>
        </PhraseBtnWrapper>
      </MainContents>
    </StartPageWrapper>
  );
}
