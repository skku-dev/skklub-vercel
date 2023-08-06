import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import styles from "./hamburger.module.css";
import Link from "next/link";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, isDarkModeState } from "@/utils/atoms";
import CampusSwitch from "../CampusSwitch/CampusSwitch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ModeSwitch from "./ModeSwitch";

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: ${(props) => (props.isDarkMode ? "#2A3133" : "#F5F4EA")};
  width: 100%;
  height: 60px;
  padding: 20px 30px;

  @media (max-width: 480px) {
    height: 80px;
  }
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const HomeImgWrap = styled.div`
  width: 120px;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 110px;
  }

  @media (max-width: 768px) {
    margin-right: 40px;
    width: 90px;
  }
  @media (max-width: 480px) {
    width: 120px;
  }
`;

const NavButtonFont = styled.div`
  font-weight: 600;
  line-height: 16px;

  color: ${(props) =>
    props.isMatch
      ? props.isSuwon
        ? props.theme.palette.primary.main
        : props.theme.palette.secondary.main
      : props.isDarkMode
      ? props.theme.palette.text.primary
      : "#585858"};
  &:hover {
    color: ${(props) =>
      props.isSuwon
        ? props.theme.palette.primary.main
        : props.theme.palette.secondary.main};
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const NavWrap = styled.div`
  display: flex;
  width: 50%;
  min-width: 500px;
  justify-content: space-between;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const IconButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 1.25rem;
`;

const ResponsiveMargin = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
`;

const HamburgerWrap = styled.div`
  margin-left: 15px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

function HomeButton({ location }) {
  return (
    <Link href={`/${location}`}>
      <HomeImgWrap>
        {location === "suwon" ? (
          <img src="/assets/images/skklub_명륜.png" />
        ) : (
          <img src="/assets/images/skklub_율전.png" />
        )}
      </HomeImgWrap>
    </Link>
  );
}

function NavButton({ item, isDarkMode, isSuwon, type }) {
  const setCategory = useSetRecoilState(categoryState);

  const onLinkClick = () => {
    setCategory("전체보기");
  };
  return (
    <Link href={`/${item.path}`}>
      <NavButtonFont
        isDarkMode={isDarkMode}
        isSuwon={isSuwon}
        isMatch={type === item.check}
        onClick={onLinkClick}
      >
        {item.name}
      </NavButtonFont>
    </Link>
  );
}

export default function HeaderBar({ location, isSuwon, type }) {
  const isDarkMode = useRecoilValue(isDarkModeState);

  const [isOpen, setOpen] = useState(false);
  const toggleSide = (e) => {
    setOpen(true);
  };

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const match1023 = useMediaQuery("(max-width:1023px)");
  const match760 = useMediaQuery("(max-width:760px)");

  const navItems = [
    { name: "동아리연합회", path: location + "/intro", check: "intro" },
    {
      name: "중앙동아리",
      path: location + "/central-clubs",
      check: "central-clubs",
    },
    {
      name: "기타동아리",
      path: location + "/independent-clubs",
      check: "independent-clubs",
    },
    { name: "소모임", path: location + "/groups", check: "groups" },
    {
      name: "학회",
      path: location + "/academic-clubs",
      check: "academic-clubs",
    },
    {
      name: "학생단체",
      path: location + "/student-org",
      check: "student-org",
    },
  ];

  return (
    <>
      <HeaderWrap isDarkMode={isDarkMode}>
        <HeaderInner>
          <HomeButton location={location} />
          <NavWrap>
            {navItems.map((item) => (
              <NavButton
                item={item}
                isDarkMode={isDarkMode}
                isSuwon={isSuwon}
                type={type}
                key={item.name}
              />
            ))}
          </NavWrap>

          <IconButtonsWrap>
            {type !== "notices" && !match760 && isNaN(type) && <CampusSwitch />}
            <IconButton onClick={handleSearchClick}>
              {isSearchVisible ? (
                <CloseIcon
                  sx={{
                    fontSize: "35px",
                    color: isDarkMode ? "#fff" : "#585858",
                  }}
                />
              ) : (
                <SearchIcon
                  sx={{
                    fontSize: "35px",
                    color: isDarkMode ? "#fff" : "#585858",
                  }}
                />
              )}
            </IconButton>

            <HamburgerWrap>
              <IconButton
                className={`${styles.menutrigger} ${styles.type7} ${
                  isOpen ? styles.active7 : ""
                }`}
                onClick={toggleSide}
              >
                <span
                  style={{
                    backgroundColor: isDarkMode ? "#fff" : "#585858",
                  }}
                ></span>
                <span
                  style={{
                    backgroundColor: isDarkMode ? "#fff" : "#585858",
                  }}
                ></span>
                <span
                  style={{
                    backgroundColor: isDarkMode ? "#fff" : "#585858",
                  }}
                ></span>
              </IconButton>
            </HamburgerWrap>
            {!match1023 && <ModeSwitch />}
          </IconButtonsWrap>
        </HeaderInner>
      </HeaderWrap>
      {isSearchVisible && (
        <Searchbar
          isDarkMode={isDarkMode}
          setIsSearchVisible={setIsSearchVisible}
        />
      )}
      {type === undefined ? (
        <ResponsiveMargin height={200} />
      ) : match760 ? (
        <ResponsiveMargin height={80} />
      ) : (
        <ResponsiveMargin height={60} />
      )}
      <Sidebar isOpen={isOpen} setOpen={setOpen} navItems={navItems} />
    </>
  );
}
