import ClubDetailLayout from "@/app/layouts/clubDetail/ClubDetailLayout";

export default function SeoulClubDetail({ params }) {
  return <ClubDetailLayout clubId={params.clubId} />;
}
