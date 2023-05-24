import styled from "@emotion/styled";

const LayoutBackground = styled.div`
  background-color: ${(props) => props.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20rem;

  @media (max-width: 1440px) {
    padding: 70px 10rem;
  }

  @media (max-width: 1024px) {
    padding: 70px 5rem;
  }

  @media (max-width: 768px) {
    padding: 30px 1rem;
  }
`;

export default function IntroLayout(props) {
  return (
    <LayoutBackground color={props.color}>{props.children}</LayoutBackground>
  );
}
