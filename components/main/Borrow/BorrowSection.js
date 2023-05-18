import styled from "@emotion/styled";
import useCampusDetect from "../../../hooks/useCampusDetect";

const BorrowWrapper = styled.div`
  background-color: ${(props) =>
    props.campus
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.secondary.main};

  width: 100%;
  max-width: 1182px;
  height: 160px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4rem;
  padding-right: 4.7rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }
`;

const BorrowPhrase = styled.div`
  font-weight: 500;
  font-size: 4rem;
  line-height: 4rem;
  color: #ffe195;

  @media (max-width: 1100px) {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const ComingSoon = styled.div`
  width: 230px;
  height: 60px;
  background-color: #303030;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 46px;
`;

export default function BorrowSection() {
  const { isSuwon } = useCampusDetect();
  return (
    <BorrowWrapper campus={!isSuwon}>
      <BorrowPhrase>공간대관 필요하세요?</BorrowPhrase>
      <ComingSoon>Coming Soon</ComingSoon>
    </BorrowWrapper>
  );
}
