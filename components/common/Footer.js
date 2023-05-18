import styled from "@emotion/styled";

const FooterWrap = styled.div`
  width: 100%;
  height: 300px;
  font-size: 1rem;
  font-family: pretendard;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  text-align: center;
  background-color: #262626;
  /* margin-top: 70px; */
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: keep-all;

  @media (max-width: 768px) {
    height: 68px;
    font-size: 0.65rem;
  }
`;

export default function Footer() {
  return (
    <FooterWrap>SKKLUB - Created and Maintained by 기술지원위원회</FooterWrap>
  );
}
