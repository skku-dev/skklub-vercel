import styled from "@emotion/styled";

const BannerWrapper = styled.div`
  width: 100vw;
  height: 378px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  margin-bottom: 1.25rem;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
`;

export default function UpperBanner() {
  return (
    <BannerWrapper>
      <div>
        <SubTitle>명륜 캠퍼스</SubTitle>
        <Title>중앙동아리</Title>
      </div>
    </BannerWrapper>
  );
}
