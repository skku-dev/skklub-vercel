"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const useCampusDetect = () => {
  const router = usePathname();
  const campusName = router.slice(1, 6);
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
