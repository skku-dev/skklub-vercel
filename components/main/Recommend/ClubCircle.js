import styled from "@emotion/styled";

const ClubCircle = styled.div`
  width: 153px;
  height: 153px;
  background-color: ${({ isSuwon, theme }) =>
    isSuwon ? theme.palette.secondary.main : theme.palette.primary.main};
  border-radius: 80px;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    border-radius: 90px;
    font-size: 14px;
    line-height: 120%;
  }
  @media (max-width: 425px) {
    width: 98px;
    height: 98px;
    border-radius: 50px;
  }
`;

export default ClubCircle;
