import styled from "@emotion/styled";

const CategoryWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  margin-top: 5.25rem;
  overflow-x: auto;
  gap: 8px;
`;

const Category = styled.button`
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #303030eb;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  background-color: transparent;
  color: whitesmoke;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 17px;
    padding: 8px 25px;
  }
`;

export default function Categories() {
  return (
    <CategoryWrapper>
      <Category>전체</Category>
      <Category>평면예술</Category>
      <Category>연행예술</Category>
      <Category>봉사</Category>
      <Category>취미교양</Category>
      <Category>스포츠</Category>
      <Category>종교</Category>
      <Category>학술</Category>
      <Category>인문사회</Category>
    </CategoryWrapper>
  );
}
