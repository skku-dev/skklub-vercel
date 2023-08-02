import styled from "@emotion/styled";
import useURLParse from "../../../../hooks/useURLParse";

const BorrowWrapper = styled.div`
  background-color: #fc7b95;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1100px) {
    gap: 13px;
  }

  @media (max-width: 411px) {
    flex-direction: column;
    gap: 13px;
  }
`;

const BorrowPhrase = styled.div`
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 151.5%; /* 57.57px */
  letter-spacing: -1.14px;
  font-family: GmarketSansBold;

  @media (max-width: 550px) {
    font-size: 1.75rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    line-height: normal;
  }
`;

const ComingSoon = styled.div`
  width: 186px;
  height: 45px;
  background-color: #8f1a2f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 46px;
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 425px) {
    width: 145px;
    height: 28px;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export default function BorrowSection() {
  const { isSuwon } = useURLParse();
  return (
    <BorrowWrapper campus={isSuwon}>
      <BorrowPhrase>공간대관 필요하세요?</BorrowPhrase>
      <ComingSoon>Coming Soon</ComingSoon>
    </BorrowWrapper>
  );
}
