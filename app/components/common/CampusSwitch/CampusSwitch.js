"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import useURLParse from "../../../../hooks/useURLParse";
import { useRouter } from "next/navigation";

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 20px;

  > .toggle-container {
    width: 116px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 99px;
    background-color: #434c4f;
    color: #a7abaf;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div {
      width: 61px;
    }
  }
  //.suwon 클래스가 활성화 되었을 경우의 CSS를 구현
  > .suwon {
    /* color: rgba(80, 207, 177, 1); */
    transition: 0.7s;
  }

  > .toggle-circle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 65px;
    height: 38px;
    border-radius: 99px;
    border: 3px solid #4fcfb1;
    background: #b6eadd;
    transition: 0.5s;
    color: #009672;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    /* line-height: 160%; */
  }
  //.suwon 클래스가 활성화 되었을 경우의 CSS를 구현
  > .suwon-circle {
    top: 0px;
    left: 50px;
    transition: 0.5s;
    /* background-color: rgba(128, 164, 255, 1); */
    border: 3px solid #6b94fa;
    background: #abbdeb;
    color: #3a63cb;
  }
`;

export default function CampusSwitch() {
  const router = useRouter();
  const { isSuwon, type } = useURLParse();
  const [isOn, setisOn] = useState(isSuwon); // false일때 명, true일때 율

  // const toggleHandler = () => {
  //   setisOn(!isOn);

  //   if (isOn) {
  //     setTimeout(() => {
  //       if (type === undefined) {
  //         router.push(`/seoul`).then(() => window.location.reload());
  //       } else {
  //         router.push(`/seoul/${type}`);
  //       }
  //     }, 750);
  //   } else {
  //     setTimeout(() => {
  //       if (type === undefined) {
  //         router.push(`/suwon`).then(() => window.location.reload());
  //       } else {
  //         router.push(`/suwon/${type}`);
  //       }
  //     }, 750);
  //   }
  // };

  const toggleHandler = async () => {
    setisOn(!isOn);
    
    if (isOn) {
      await new Promise((resolve) => setTimeout(resolve, 750)); // Delay for smooth transition (optional)
      if (type === undefined) {
        router.push(`/seoul`);
      } else {
        router.push(`/seoul/${type}`);
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 750)); // Delay for smooth transition (optional)
      if (type === undefined) {
        router.push(`/suwon`);
      } else {
        router.push(`/suwon/${type}`);
      }
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn && "suwon"}`}>
          <div>명륜</div> <div>율전</div>
        </div>
        <div className={`toggle-circle ${isOn && "suwon-circle"}`}>
          {isOn ? "율전" : "명륜"}
        </div>
      </ToggleContainer>
    </>
  );
}
