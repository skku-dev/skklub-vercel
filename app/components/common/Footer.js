"use client";

import useThemeModeDetect from "@/hooks/useThemeModeDetect";
import useURLParse from "@/hooks/useURLParse";
import styled from "@emotion/styled";

const FooterWrap = styled.div`
  width: 100%;
  height: 120px;
  font-size: 1rem;
  font-family: pretendard;

  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.5)" : "#949595"};
  font-weight: 600;
  text-align: center;
  background-color: ${(props) => (props.isDarkMode ? "#2A3133" : "#E5E4DA")};
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
  const isDarkMode = useThemeModeDetect();
  const { location } = useURLParse();

  return (
    location && (
      <FooterWrap isDarkMode={isDarkMode}>
        SKKLUB - Created and Maintained by 기술지원위원회
      </FooterWrap>
    )
  );
}
