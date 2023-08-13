import useURLParse from "@/hooks/useURLParse";
import { categoryState } from "@/utils/atoms";
import { CATEGORIES_SEOUL, CATEGORIES_SUWON } from "@/utils/constants";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CategoryWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 25px;
  margin-top: 32px;
  overflow-x: scroll;
  gap: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 976px) {
    justify-content: flex-start;
  }
`;

const Category = styled.button`
  width: 102px;
  height: 39px;
  padding: 10px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 99px;
  background-color: ${(props) =>
    props.isClicked
      ? props.theme.palette.text.primary
      : props.theme.palette.background.paper};
  color: ${(props) =>
    props.isClicked
      ? props.theme.palette.background.paper
      : props.theme.palette.text.primary};
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard-Regular;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.palette.text.primary};
    color: ${(props) => props.theme.palette.background.paper};
  }

  @media (max-width: 425px) {
    width: 94px;
    height: 37px;
    padding: 10px 21px;
    text-align: center;
    text-overflow: ellipsis;
    font-family: Pretendard-Regular;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export default function Categories() {
  const [category, setCategory] = useRecoilState(categoryState);
  const { isSuwon } = useURLParse();
  const onCategoryClick = (clickedCategory) => {
    setCategory(clickedCategory);
  };

  return (
    <CategoryWrapper>
      {(isSuwon ? CATEGORIES_SUWON : CATEGORIES_SEOUL).map((c) => (
        <Category
          key={c}
          isClicked={category === c}
          onClick={() => onCategoryClick(c)}
        >
          {c}
        </Category>
      ))}
      <Category
        isClicked={category === "하트"}
        onClick={() => onCategoryClick("하트")}
        style={{
          width: "auto",
          height: "auto",
        }}
      >
        <FavoriteIcon />
      </Category>
    </CategoryWrapper>
  );
}
