import styled from "@emotion/styled";

const LogoWrap = styled.div`
  width: 100%;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
`;

const SkklubLogo = styled.img`
  width: 300px;
  margin: 60px;
`;

export default function HomePageLogo({ location }) {
  return (
    <LogoWrap>
      {location === "suwon" ? (
        <SkklubLogo src="/assets/images/skklub_명륜.png" />
      ) : (
        <SkklubLogo src="/assets/images/skklub_율전.png" />
      )}
    </LogoWrap>
  );
}
