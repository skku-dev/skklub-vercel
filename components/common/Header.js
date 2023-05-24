import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import styles from "../../styles/hamburger.module.css";
import useCampusDetect from "../../hooks/useCampusDetect";

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

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #151717;
  width: 100%;
  height: 70px;
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
    justify-content: space-between;
    width: 100%;
  }
`;

const HomeImgWrap = styled.div`
  margin-right: 80px;
  width: 132px;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    margin-right: 60px;
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
  font-weight: bold;
  line-height: 1.25rem;
  color: #fff;
  &:hover {
    color: ${(props) =>
      props.campus
        ? ({ theme }) => theme.palette.secondary.main
        : ({ theme }) => theme.palette.primary.main};
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
  width: 65%;
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

function HomeButton({ campusName }) {
  return (
    <Link href={`/${campusName}`}>
      <HomeImgWrap>
        {campusName === "suwon" ? (
          <img src="/assets/images/skklub_율전.png" />
        ) : (
          <img src="/assets/images/skklub_명륜.png" />
        )}
      </HomeImgWrap>
    </Link>
  );
}

function NavButton({ item, campus }) {
  return (
    <Link href={`/${item.path}`}>
      <NavButtonFont campus={campus}>{item.name}</NavButtonFont>
    </Link>
  );
}

export default function Header() {
  const router = useRouter();
  const params = router.pathname.slice(6);
  const [isOpen, setOpen] = useState(false);
  const toggleSide = (e) => {
    setOpen(true);
  };

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const { campusName, isSuwon } = useCampusDetect();

  const navItems = [
    { name: "동아리연합회", path: campusName + "/intro" },
    { name: "중앙동아리", path: campusName + "/central-clubs" },
    { name: "기타동아리", path: campusName + "/independent-clubs" },
    { name: "소모임", path: campusName + "/groups" },
    { name: "학회", path: campusName + "/academic-clubs" },
    { name: "학생단체", path: campusName + "/student-org" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const match760 = useMediaQuery("(max-width:760px)");

  return (
    <>
      {campusName === "" ? null : params === "" && scrollPosition < 60 ? (
        <LogoWrap>
          {campusName === "suwon" ? (
            <SkklubLogo src="/assets/images/skklub_율전.png" />
          ) : (
            <SkklubLogo src="/assets/images/skklub_명륜.png" />
          )}
        </LogoWrap>
      ) : (
        <>
          <HeaderWrap>
            <HeaderInner>
              <HomeButton campusName={campusName} />
              <NavWrap>
                {navItems.map((item) => (
                  <NavButton item={item} campus={isSuwon} key={item.name} />
                ))}
              </NavWrap>
              <IconButtonsWrap>
                <IconButton onClick={handleSearchClick}>
                  {isSearchVisible ? (
                    <CloseIcon sx={{ fontSize: "35px", color: "#666" }} />
                  ) : (
                    <SearchIcon sx={{ fontSize: "35px" }} />
                  )}
                </IconButton>

                <HamburgerWrap>
                  <IconButton
                    className={`${styles.menutrigger} ${styles.type7} ${
                      isOpen ? styles.active7 : ""
                    }`}
                    onClick={toggleSide}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </IconButton>
                </HamburgerWrap>
              </IconButtonsWrap>
            </HeaderInner>
          </HeaderWrap>
          {isSearchVisible && (
            <Searchbar setIsSearchVisible={setIsSearchVisible} />
          )}
          {params === "" ? (
            <ResponsiveMargin height={200} />
          ) : match760 ? (
            <ResponsiveMargin height={80} />
          ) : (
            <ResponsiveMargin height={70} />
          )}
          <Sidebar isOpen={isOpen} setOpen={setOpen} navItems={navItems} />
        </>
      )}
    </>
  );
}
