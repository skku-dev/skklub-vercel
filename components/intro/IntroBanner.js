import styled from "@emotion/styled";

const BannerWrap = styled.div`
  width: 100%;
  height: 378px;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const Detail = styled.div`
  font-size: 2rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const Name = styled.div`
  margin-top: 5px;
  font-size: 3rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default function IntroBanner({ name }) {

  return (
    <BannerWrap>
      <Detail>성균관대학교 동아리연합회</Detail>
      <Name>{`"${name}"`}</Name>
    </BannerWrap>
  );
}
