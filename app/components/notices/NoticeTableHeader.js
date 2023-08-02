import styled from "@emotion/styled";

const AttributeRow = styled.div`
  width: 100%;
  height: 56px;
  padding-bottom: 10px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border-bottom: 3px solid;
`;

const AttributeRowItem = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.first-row {
    flex: 0.5;
    justify-content: center;
    padding-left: 5px;
  }
  &.second-row {
    flex: 5;
  }
  &.third-row {
    flex: 2;
  }
  &.last-row {
    flex: 1.2;
  }
`;

export default function NoticeTableHeader() {
  return (
    <AttributeRow>
      <AttributeRowItem className="first-row">NO.</AttributeRowItem>
      <AttributeRowItem className="second-row">제목</AttributeRowItem>
      <AttributeRowItem className="third-row">작성자</AttributeRowItem>
      <AttributeRowItem className="last-row">작성일자</AttributeRowItem>
    </AttributeRow>
  );
}
