"use client";

import CardBoard from "@/app/components/cardBoard/CardBoard";
import LoadingLayout from "@/app/layouts/loading/LoadingLayout";
import { getClubs } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export default function SemiCentralClubs() {
  const { data, isLoading } = useQuery({
    queryKey: ["suwon-semi-central"],
    queryFn: () => getClubs("율전", "준중앙동아리"),
  });

  return isLoading ? <LoadingLayout /> : <CardBoard cardsData={data.content} />;
}
