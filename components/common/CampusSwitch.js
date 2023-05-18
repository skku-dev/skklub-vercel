import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import useCampusDetect from "../../hooks/useCampusDetect";

const Fadeinout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #222;
  animation: fade-in-out 0.7s ease-in-out forwards;
  display: ${(props) => (props.show ? "block" : "none")};

  @keyframes fade-in-out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;

const ToggleContainer = styled.div`
  position: fixed;
  left: 88%;
  bottom: 10vh;
  z-index: 999;
  cursor: pointer;

  > .toggle-container {
    height: 134px;
    width: 80px;
    border-radius: 50px;
    background-color: #e5e5e5;
    color: rgba(128, 164, 255, 1);
  }
  //.suwon 클래스가 활성화 되었을 경우의 CSS를 구현
  > .suwon {
    /* color: rgba(80, 207, 177, 1); */
    transition: 0.7s;
  }

  > .toggle-circle {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: rgba(128, 164, 255, 1);
    transition: 0.5s;
    color: rgb(255, 254, 255);
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 70px;
  }
  //.suwon 클래스가 활성화 되었을 경우의 CSS를 구현
  > .suwon-circle {
    left: 8px;
    top: 62px;
    transition: 0.5s;
    background-color: rgba(80, 207, 177, 1);
  }
`;

export default function CampusSwitch() {
  const router = useRouter();
  const params = router.pathname.slice(6);
  const { campus } = useCampusDetect();
  const [isOn, setisOn] = useState(campus); // false일때 명, true일때 율
  const [showFadeinout, setFadeinout] = useState(true);

  setTimeout(() => {
    setFadeinout(false);
  }, 750);

  const toggleHandler = () => {
    setisOn(!isOn);
    if (isOn) {
      setTimeout(() => {
        router.push(`/seoul${params}`);
      }, 750);
    } else {
      setTimeout(() => {
        router.push(`/suwon${params}`);
      }, 750);
    }
  };

  const matches_1024 = useMediaQuery("(min-width:1024px)");

  return (
    <>
      {matches_1024 && (
        <>
          <Fadeinout show={showFadeinout} />
          <ToggleContainer onClick={toggleHandler}>
            <div className={`toggle-container ${isOn ? "suwon" : null}`} />
            <div className={`toggle-circle ${isOn ? "suwon-circle" : null}`}>
              {isOn ? "율" : "명"}
            </div>
          </ToggleContainer>
        </>
      )}
    </>
  );
}
