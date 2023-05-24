import { useRouter } from "next/router";

export default function useLocationPush(nextLocation) {
  const router = useRouter();
  const pushToNextLocation = () => {
    router.push(`/${nextLocation}`);
  };
  return pushToNextLocation;
}
