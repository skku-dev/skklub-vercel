import { atom } from "recoil";

export const categoryState = atom({
  key: "categoryState",
  default: "전체보기",
});

export const likedClubState = atom({
  key: "likedClubState",
  default: [],
});

export const isDarkModeState = atom({
  key: "isDarkModeState",
  default: true,
});

export const initialIsLoadingState = atom({
  key: "initialIsLoading",
  default: true,
});
