import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useCampusDetect from "../../hooks/useCampusDetect";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import Link from "next/link";
import styles from "../../styles/hamburger.module.css";

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: end;
  height: 400px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 30px;
`;

const SidebarInner = styled.div`
  z-index: 1000;
  padding: 20px 30px 20px 20px;
  background-color: #151717;
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
  background-color: rgba(255, 255, 255, 0.2);
`;

const CampusWrap = styled.div`
  color: ${(props) =>
    props.campus
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.secondary.main};
  font-size: 1.1rem;
  font-weight: 500;
`;

export default function Sidebar({ isOpen, setOpen, navItems }) {
  const router = useRouter();
  const params = router.pathname.slice(6);
  const { isSuwon } = useCampusDetect();
  const outside = useRef();
  const toggleSide = () => {
    setOpen(false);
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
      <SidebarInner ref={outside} className={isOpen ? "open" : ""}>
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
              {item.name}
            </Link>
          ))}
          <Line />
          <CampusWrap campus={isSuwon}>
            {isSuwon ? (
              <Link href={`/seoul${params}`}>명륜 캠퍼스</Link>
            ) : (
              <Link href={`/suwon${params}`}>율전 캠퍼스</Link>
            )}
          </CampusWrap>
        </NavWrap>
      </SidebarInner>
    </>
  );
}
