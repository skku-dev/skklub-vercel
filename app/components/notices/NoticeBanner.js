import styled from "@emotion/styled";

const BannerWrapper = styled.div`
  width: 100%;
  height: 236px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const SubTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 72%;
  }
`;
const Title = styled.div`
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 72%;
  }
`;

export default function NoticeBanner() {
  return (
    <BannerWrapper>
      <SubTitle>성균관대학교 동아리연합회</SubTitle>
      <Title>공지사항</Title>
    </BannerWrapper>
  );
}
