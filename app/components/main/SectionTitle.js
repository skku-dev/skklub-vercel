import styled from "@emotion/styled";

const SectionTitle = styled.div`
  word-wrap: break-word;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 22px;
  font-family: GmarketSansBold;

  @media (max-width: 425px) {
    font-size: 1.25rem;
    font-style: normal;
    line-height: normal;
    margin-bottom: 16px;
  }
`;

export default SectionTitle;
