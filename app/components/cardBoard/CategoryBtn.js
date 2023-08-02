import styled from "@emotion/styled";

const Category = styled.button`
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #303030;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  background-color: ${(props) =>
    props.isClicked ? "#303030eb" : "transparent"};
  &:nth-of-type(3n) {
    color: rgba(255, 149, 89, 1);
  }
  &:nth-of-type(3n + 1) {
    color: rgba(252, 123, 149, 1);
  }
  &:nth-of-type(3n + 2) {
    color: rgba(128, 164, 255, 1);
  }
  &:first-of-type {
    color: rgba(255, 255, 255, 1);
  }
  &:hover {
    cursor: pointer;
    background-color: #303030eb;
  }

  white-space: nowrap;

  @media (max-width: 1024px) {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 17px;
    padding: 8px 25px;
  }
`;

export default function CategoryBtn() {
  return <Category>category</Category>;
}
