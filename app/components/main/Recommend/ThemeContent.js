import HashtagsList from "./HashtagsList";
import ThemeSubtitle from "./ThemeSubtitle";
import ThemeTitle from "./ThemeTitle";

export default function ThemeContent({ category, description, hashtags }) {
  return (
    <>
      <ThemeTitle>{category} 동시에 잡기</ThemeTitle>
      <ThemeSubtitle>{description}</ThemeSubtitle>
      <HashtagsList hashtags={hashtags} />
    </>
  );
}
