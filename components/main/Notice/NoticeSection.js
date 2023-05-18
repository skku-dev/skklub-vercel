import styled from "@emotion/styled";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";
import Phrase from "../Common/Phrase";
import NoticeCard from "./NoticeCard";

const NoticeWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10rem;
`;

const NoticeHeader = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const MoreBtn = styled.button`
  background-color: #4e5353;
  width: 104px;
  height: 33px;
  font-weight: 400;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 104px;
  color: white;
`;

const CarouselContainer = styled.div`
  height: 346px;
  width: 1182px;
  background-color: transparent;
  margin: 0 auto;
  margin-top: 2rem;
  @media (max-width: 1400px) {
    width: 910px;
  }
  @media (max-width: 950px) {
    width: 638px;
  }
  @media (max-width: 425px) {
    width: 638px;
  }
`;

const DefaultSettingsT = {
  autoPlay: false,
  animation: "slide",
  indicators: false,
  duration: 500,
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: true,
};

const CardRow = styled.div`
  height: 346px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 28px;
`;

const CardDate = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
  font-weight: 400;
  font-size: 1rem;
  color: white;
`;

//제목이 길경우 짧게 파싱해주어야함
const CardTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  width: 224px;
  margin-bottom: 0.75rem;
`;

const CardClubName = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: white;
  margin-bottom: 17px;
`;

export default function NoticeSection() {
  const matches_1400 = useMediaQuery("(max-width:1400px)");
  const matches_950 = useMediaQuery("(max-width:950px)");
  return (
    <NoticeWrapper>
      <NoticeHeader>
        <Phrase>공지사항</Phrase>
        <MoreBtn>MORE</MoreBtn>
      </NoticeHeader>
      <CarouselContainer>
        <Carousel
          {...DefaultSettingsT}
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
          fullHeightHover={false}
        >
          <CardRow>
            <NoticeCard imageUrl="/assets/images/one.png">
              <CardDate>JAN 9, 2021</CardDate>
              <CardTitle>하반기 수선관 운동장 예약어쩌구</CardTitle>
            </NoticeCard>
            <NoticeCard imageUrl="/assets/images/two.png">
              <CardDate>JAN 9, 2021</CardDate>
              <CardTitle>
                [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
              </CardTitle>
              <CardClubName>스꾸모터</CardClubName>
            </NoticeCard>
            {!matches_950 && (
              <NoticeCard imageUrl="/assets/images/three.png">
                <CardDate>JAN 9, 2021</CardDate>
                <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                <CardClubName>성골퍼</CardClubName>
              </NoticeCard>
            )}
            {!matches_1400 && (
              <NoticeCard imageUrl="/assets/images/four.png">
                <CardDate>JAN 9, 2021</CardDate>
                <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                <CardClubName>못갖춘 마디</CardClubName>
              </NoticeCard>
            )}
          </CardRow>
          <CardRow>
            <NoticeCard imageUrl="/assets/images/one.png">
              <CardDate>JAN 9, 2021</CardDate>
              <CardTitle>하반기 수선관 운동장 예약어쩌구</CardTitle>
            </NoticeCard>
            <NoticeCard imageUrl="/assets/images/two.png">
              <CardDate>JAN 9, 2021</CardDate>
              <CardTitle>
                [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
              </CardTitle>
              <CardClubName>스꾸모터</CardClubName>
            </NoticeCard>
            {!matches_950 && (
              <NoticeCard imageUrl="/assets/images/three.png">
                <CardDate>JAN 9, 2021</CardDate>
                <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                <CardClubName>성골퍼</CardClubName>
              </NoticeCard>
            )}
            {!matches_1400 && (
              <NoticeCard imageUrl="/assets/images/four.png">
                <CardDate>JAN 9, 2021</CardDate>
                <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                <CardClubName>못갖춘 마디</CardClubName>
              </NoticeCard>
            )}
          </CardRow>
          <CardRow>
            <NoticeCard imageUrl="/assets/images/one.png">
              <CardDate>JAN 9, 2021</CardDate>
              <CardTitle>하반기 수선관 운동장 예약어쩌구</CardTitle>
            </NoticeCard>
            <NoticeCard imageUrl="/assets/images/two.png">
              <CardDate>JAN 9, 2021</CardDate>
              <CardTitle>
                [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
              </CardTitle>
              <CardClubName>스꾸모터</CardClubName>
            </NoticeCard>
            {!matches_950 && (
              <NoticeCard imageUrl="/assets/images/three.png">
                <CardDate>JAN 9, 2021</CardDate>
                <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                <CardClubName>성골퍼</CardClubName>
              </NoticeCard>
            )}
            {!matches_1400 && (
              <NoticeCard imageUrl="/assets/images/four.png">
                <CardDate>JAN 9, 2021</CardDate>
                <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                <CardClubName>못갖춘 마디</CardClubName>
              </NoticeCard>
            )}
          </CardRow>
        </Carousel>
      </CarouselContainer>
    </NoticeWrapper>
  );
}
