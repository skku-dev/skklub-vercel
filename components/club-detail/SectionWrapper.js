import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: #2c2c2c;
  height: 264px;
  border-radius: 10px;
  padding-top: 1.75rem;
  padding-left: 2.125rem;
  padding-right: 2.125rem;
  position: relative;

  @media (max-width: 760px) {
    grid-column-start: 1;
    grid-column-end: 4;
    height: auto;
    padding-bottom: 2rem;
  }
`;

export default function SectionWrapper({ children, style }) {
  return <Wrapper style={{ ...style }}>{children}</Wrapper>;
}
