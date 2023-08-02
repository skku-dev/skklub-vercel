"use client";
import { usePathname } from "next/navigation";

const useURLParse = () => {
  const pathName = usePathname();

  const [_, location, type] = pathName.split("/");
  const isSuwon = location === "suwon";
  if (location === "notices") {
    return { isSuwon, location: "notices", type:"notices" };
  }
  return { isSuwon, location, type };
};

export default useURLParse;
