import { RECOMMENDATION_COMMENT_SUWON } from "@/utils/constants";
import { useEffect, useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

export default function useRandomRecommendation() {
  const [randNum, setRandNum] = useState(0);
  useEffect(() => {
    setRandNum(getRandomInt(0, 8));
  }, []);

  const randBelong = RECOMMENDATION_COMMENT_SUWON[randNum];
  return [randBelong.category, randBelong.description, randBelong.hashtags];
}
