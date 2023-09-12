import HashtagsList from "./HashtagsList";
import ThemeSubtitle from "./ThemeSubtitle";
import ThemeTitle from "./ThemeTitle";

export default function ThemeContent({ category, description, hashtags }) {
  return (
    <>
      <ThemeTitle>
        {category}분과를 추천합니다 :{")"}
      </ThemeTitle>
      <ThemeSubtitle>{description}</ThemeSubtitle>
      <HashtagsList hashtags={hashtags} />
    </>
  );
}
