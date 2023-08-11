const BASE_URL = process.env.NEXT_PUBLIC_DEV_URI;

export const getUsers = async () =>
  await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

export const getClubs = async (campus = "seoul", clubType = "", belongs = "") =>
  await fetch(
    `${BASE_URL}/club/prev?campus=${campus}&clubType=${clubType}&belongs=${belongs}`
  ).then((res) => res.json());

export const getDailyRecommendation = async (
  campus = "seoul",
  clubType = "",
  belongs = ""
) =>
  await fetch(
    `${BASE_URL}/club/random?campus=${campus}&clubType=${clubType}&belongs=${belongs}`
  ).then((res) => res.json());

export const getClubDetail = async (clubId) =>
  await fetch(`${BASE_URL}/club/${clubId}`).then((res) => res.json());

export const getClubsFromFullKeyword = async ({ name }) =>
  await fetch(`${BASE_URL}/club/search?name=${name}`).then((res) => res.json());

export const getClubsFromPartialKeyword = async ({ keyword }) =>
  await fetch(`${BASE_URL}/club/search/prevs?name=${keyword}`).then((res) =>
    res.json()
  );

export const getClubRecommendation = async (
  campus = "명륜",
  clubType = "",
  belongs = ""
) =>
  await fetch(`${BASE_URL}/club/random?campus=${campus}`).then((res) =>
    res.json()
  );

export const getNoticeDetail = async (noticeId) => {
  const response = await fetch(`${BASE_URL}/notice/${noticeId}`);
  return await response.json();
};

export const getNoticeThumbnailCard = async () => {
  const response = await fetch(`${BASE_URL}/notice/prev/thumbnail`);
  return await response.json();
};

export const getNoticeListwithRole = async ({ role, page }) => {
  const response = await fetch(
    `${BASE_URL}/notice/prev?role=${role}&size=10&page=${
      page - 1
    }&sort=createdAt,desc`
  );
  return await response.json();
};

export const getNoticesFromKeyword = async ({ keyword }) => {
  const response = await fetch(
    `${BASE_URL}/notice/prev/search/title?title=${keyword}`
  );
  return await response.json();
};

export const getNoticeFiles = async (filename) => {
  const response = await fetch(
    `${BASE_URL}/notice/file?fileSavedName=${filename}`
  );
  return await response.json();
};

export const getPartiallyMatchedSearchResults = async ({
  searchTerm,
  isSuwon,
}) => {
  const response = await fetch(
    `${BASE_URL}/club/search/prevs?keyword=${searchTerm}&sort=campus,${
      isSuwon ? "desc" : "asc"
    }`
  );
  return await response.json();
};

export const getFullyMatchedSearchResults = async (keyword) => {
  const response = await fetch(`${BASE_URL}/club/search?name=${keyword}`);
  return await response.json();
};

export const downloadAttachedFile = (originalName, savedName) =>
  fetch(`${BASE_URL}/notice/file?fileSavedName=${savedName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/octet-stream",
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", originalName);

      // Append to html link element page
      document.body.appendChild(link);

      // Start download
      link.click();

      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
