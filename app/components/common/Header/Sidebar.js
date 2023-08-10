import { useEffect, useRef } from "react";
import useURLParse from "../../../../hooks/useURLParse";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import Link from "next/link";
import styles from "./hamburger.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkModeState } from "@/utils/atoms";
import { useMediaQuery } from "@mui/material";
import ModeSwitch from "./ModeSwitch";

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: end;
  height: 450px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 30px;
`;

const NavButtonFont = styled.div`
  color: ${(props) =>
    props.isMatch
      ? props.isSuwon
        ? props.theme.palette.primary.main
        : props.theme.palette.secondary.main
      : "inherit"};
`;

const SidebarInner = styled.div`
  z-index: 1000;
  padding: 20px 30px 20px 20px;
  background-color: ${(props) => (props.isDarkMode ? "#2A3133" : "#F5F4EA")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#585858")};
  height: 100%;
  width: 50%;
  max-width: 250px;
  right: -50%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.2)" : "#585858"};
`;

const CampusWrap = styled.div`
  color: ${(props) => (props.campus ? "#50CFB1" : "#80A4FF")};
  font-size: 1.1rem;
  font-weight: 500;
  text-align: end;
`;

export default function Sidebar({ isOpen, setOpen, navItems }) {
  const { isSuwon, type } = useURLParse();
  const isDarkMode = useRecoilValue(isDarkModeState);
  const outside = useRef();
  const toggleSide = () => {
    setOpen(false);
  };
  const match1023 = useMediaQuery("(max-width:1023px)");
  const setIsDarkMode = useSetRecoilState(isDarkModeState);

  const handleModeSwitchToggle = (event) => {
    if (event.target.checked) {
      window.localStorage.setItem("skklubMode", "dark");
    } else {
      window.localStorage.setItem("skklubMode", "light");
    }
    setIsDarkMode(event.target.checked);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  });

  const handleOutside = (e) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  return (
    <>
      <SidebarInner
        isDarkMode={isDarkMode}
        ref={outside}
        className={isOpen ? "open" : ""}
      >
        <IconButton
          className={`${styles.menutrigger} ${styles.type7} ${
            isOpen ? styles.active7 : ""
          }`}
          onClick={toggleSide}
          onKeyDown={toggleSide}
        >
          <span></span>
          <span></span>
          <span></span>
        </IconButton>

        <NavWrap onClick={toggleSide}>
          {navItems.map((item) => (
            <Link href={`/${item.path}`} key={item.name}>
              <NavButtonFont
                isDarkMode={isDarkMode}
                isSuwon={isSuwon}
                isMatch={type === item.check}
              >
                {item.name}
              </NavButtonFont>
            </Link>
          ))}
          <Line isDarkMode={isDarkMode} />
          <CampusWrap campus={isSuwon}>
            {isSuwon ? (
              <Link href={type === undefined ? "/seoul" : `/seoul/${type}`}>
                명륜 캠퍼스 가기
              </Link>
            ) : (
              <Link href={type === undefined ? "/suwon" : `/suwon/${type}`}>
                율전 캠퍼스 가기
              </Link>
            )}
          </CampusWrap>
          {match1023 && <ModeSwitch />}
        </NavWrap>
      </SidebarInner>
    </>
  );
}
