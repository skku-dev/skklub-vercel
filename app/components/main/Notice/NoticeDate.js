import styled from "@emotion/styled";

const NoticeDate = styled.div`
  overflow: hidden;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.12px;
  margin-top: 0.75rem;
`;

export default NoticeDate;
