import styled from "@emotion/styled";

const ThemeTitle = styled.div`
  color: #303030;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
  font-family: GmarketSansBold;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
    line-height: 151.5%; /* 24.24px */
    margin-bottom: 8px;
  }
`;

export default ThemeTitle;
