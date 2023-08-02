"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const FadeinoutScreen = styled.div`
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

export default function Fadeinout({showFadeinout}) {
  return <FadeinoutScreen show={showFadeinout} />;
}
