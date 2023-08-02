"use client";

import CardBoard from "@/app/components/cardBoard/CardBoard";
import LoadingLayout from "@/app/layouts/loading/LoadingLayout";
import { getClubs } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export default function CentralClubs() {
  //API 함수호출
  const { data, isLoading } = useQuery({
    queryKey: ["suwon-groups"],
    queryFn: () => getClubs("율전", "소모임"),
  });

  return isLoading ? <LoadingLayout /> : <CardBoard cardsData={data.content} />;
}
