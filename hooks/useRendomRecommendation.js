import {
  RECOMMENDATION_COMMENT_SUWON,
  RECOMMENDATION_COMMENT_SEOUL,
} from "@/utils/constants";
import { useEffect, useState } from "react";
import useURLParse from "./useURLParse";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

export default function useRandomRecommendation() {
  const { isSuwon } = useURLParse();
  const [randNum, setRandNum] = useState(0);
  useEffect(() => {
    setRandNum(getRandomInt(0, 8));
  }, []);

  const randBelong = isSuwon
    ? RECOMMENDATION_COMMENT_SUWON[randNum]
    : RECOMMENDATION_COMMENT_SEOUL[randNum];
  return [randBelong.category, randBelong.description, randBelong.hashtags];
}
