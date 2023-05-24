import ClubsLayout from "../../layout/clubs/ClubsLayout";
import { CLUBS_DUMMY_DATA } from "../../utils/constants";

export default function AcademicClubs() {
  const ClubCategory = "학회";
  //API 함수호출
  const CARDS_DATA = CLUBS_DUMMY_DATA;
  return (
    <>
      <ClubsLayout club={ClubCategory} cardsData={CARDS_DATA} />
    </>
  );
}
