import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

const useCampusDetect = () => {
  const router = useRouter();
  const campusName = router.pathname.slice(1, 6);
  const [campus, setCampus] = useState(campusName === "suwon"); // suwon === true, seoul === false
  const isSuwon = campusName === "suwon";
  // const isSeoul = !isSuwon;

  // const updateCampus = useCallback(() => {
  //   if (campusName === "suwon") {
  //     setCampus(true);
  //   } else if (!isSuwon) {
  //     setCampus(false);
  //   }
  // }, [campusName]);s

  // useEffect(() => {
  //   if (campusName === "suwon" || !isSuwon) {
  //     updateCampus();
  //   }
  // }, [campusName, updateCampus]);

  return { isSuwon, campus, campusName };
};

export default useCampusDetect;
