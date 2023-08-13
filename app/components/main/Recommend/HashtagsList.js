import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

const HashtagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Hashtag = styled.div`
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background: #fff;
  color: #303030;
  font-family: Pretendard-Regular;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%; /* 27px */
  letter-spacing: -0.15px;

  @media (max-width: 768px) {
    height: 23px;
    padding: 1px 12px;
    font-size: 0.875rem;
    line-height: 151.5%; /* 21.21px */
    background-color: rgba(255, 229, 234, 1);
  }

  @media (max-width: 320px) {
    height: 23px;
    padding: 1px 7px;
    font-size: 0.75rem;
  }
`;

export default function HashtagsList({ hashtags }) {
  const matches_950 = useMediaQuery("(max-width:950px)");
  const matches_768 = useMediaQuery("(max-width:768px)");
  return (
    <HashtagWrapper>
      {hashtags.slice(0, matches_768 ? 4 : matches_950 ? 3 : 4).map((h) => (
        <Hashtag key={h}>{h}</Hashtag>
      ))}
    </HashtagWrapper>
  );
}
