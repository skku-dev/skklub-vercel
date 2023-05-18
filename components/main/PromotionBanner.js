import styled from "@emotion/styled";

const PromotionBanner = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${({ isSuwon, theme }) =>
    isSuwon ? theme.palette.secondary.main : theme.palette.primary.main};
  color: #ffe195;
  font-size: 4rem;
  font-weight: 500;
  line-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

export default PromotionBanner;
