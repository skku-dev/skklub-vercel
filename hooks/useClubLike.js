import { likedClubState } from "@/utils/atoms";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useClubLike() {
  const [likedClubs, setLikedClubs] = useRecoilState(likedClubState);

  useEffect(() => {
    setLikedClubs(
      JSON.parse(window.localStorage.getItem("likedClubs") || "[]")
    );
  }, []);

  const addClubToList = (newClub) => {
    setLikedClubs((likedClubs) => {
      window.localStorage.setItem(
        "likedClubs",
        JSON.stringify([...likedClubs, newClub])
      );
      return [...likedClubs, newClub];
    });
  };

  const deleteClubInList = (deletedClub) => {
    setLikedClubs((likedClubs) => {
      window.localStorage.setItem(
        "likedClubs",
        JSON.stringify(likedClubs.filter((item) => item !== deletedClub))
      );
      return likedClubs.filter((item) => item !== deletedClub);
    });
  };

  const handleHeartClick = (event, clubName) => {
    event.stopPropagation();

    if (likedClubs.includes(clubName)) {
      deleteClubInList(clubName);
    } else {
      addClubToList(clubName);
    }
  };

  return [likedClubs, handleHeartClick];
}
