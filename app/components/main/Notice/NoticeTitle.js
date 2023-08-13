import styled from "@emotion/styled";

const NoticeTitle = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 5px 0;

  @media (max-width: 425px) {
    font-size: 0.875;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export default NoticeTitle;
