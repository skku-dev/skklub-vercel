import styled from "@emotion/styled";

export const RecommendationContent = styled.div`
  display: flex;
  width: 100%;
  gap: 26px;
  margin-top: 22px;

  @media (max-width: 1400px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    gap: 24px;
    margin-top: 2rem;
    padding: 0;
  }
  @media (max-width: 425px) {
    justify-content: space-around;
    margin-top: 1.5rem;
    gap: 0;
  }
`;
