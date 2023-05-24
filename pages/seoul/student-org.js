import ClubsLayout from "../../layout/clubs/ClubsLayout";
import { CLUBS_DUMMY_DATA } from "../../utils/constants";

export default function StudentOrg() {
  const ClubCategory = "학생단체";
  //API 함수호출
  const CARDS_DATA = CLUBS_DUMMY_DATA;
  return (
    <>
      <ClubsLayout club={ClubCategory} cardsData={CARDS_DATA} />
    </>
  );
}
