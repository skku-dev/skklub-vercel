import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 10px;
  padding-top: 34px;
  padding-left: 32px;
  padding-right: 30px;
  padding-bottom: 2rem;
`;

export default function dSectionWrapper({ children, style }) {
  return <Wrapper style={{ ...style }}>{children}</Wrapper>;
}
