import styled from "@emotion/styled";

const AttributeRow = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  background-color: #2c2c2c;
  border-radius: 10px;
  gap: 20px;
  padding: 0 44px;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const AttributeRowItem = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NoticeTableHeader() {
  return (
    <AttributeRow>
      <AttributeRowItem style={{ width: "80px" }}>NO.</AttributeRowItem>
      <AttributeRowItem style={{ flex: 1 }}>제목</AttributeRowItem>
      <AttributeRowItem style={{ width: "200px" }}>글쓴이</AttributeRowItem>
      <AttributeRowItem style={{ width: "150px" }}>작성일지</AttributeRowItem>
    </AttributeRow>
  );
}
